# Basic usage

To use a Pipeline all you need is a `Transport` and some `Pipes`.

The Transport is the object that gets passed down the Pipeline and through the Pipes. This Transport object is the
source of truth for you Pipeline, it gets manipulated or shaped by the Pipes it passes through.

The Pipes are small, encapsulated pieces of logic that should do _one job_ they can use data from the Transport
and they can manipulate or set data on the Transport too.

Let's put together a super simple, familiar example by recreating user a simple registration Pipeline.

:::tip Note
Pipeline thrives in complex environments and for something simple like user registration it might be overkill, but this
example is to help you understand what Laravel Pipeline can do for you
:::

Let's start with the controller, generally your application will have three entry points, controllers, jobs and commands. These entry points are the best place to make use of pipelines. Even in this overly simple example you get to see how breaking up the code into Pipes you create a lot more readability.

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterUserController
{
    public function __invoke(Request $request)
    {
        // Here we build our Transport's initial state giving it
        // everything it needs to be able to be sent down the pipeline.
        $transport = new UserRegistrationTransport();
        $transport->setRequest($request);

        // And now we send the Transport through a set of Pipes. Here the Transport
        // is returned and this is the final state of the Transport.
        $transport = Pipline::make()
            ->send($transport)
            ->through(
                new CreateUser(),
                new SendWelcomeEmail(),
                new LogUserIn(),
            )
            ->deliver();

        return response()->route('dashboard', ['user' => $transport->getUser()->id])
    }
}
```

Next we have the Transport the Transport is the object that holds all the data for you allowing data to be added, updated and removed as it travels through the Pipes. It will be the one constant for your Pipes to refer back to and determine state.

```php
namespace App\Transport;

use SlashEquip\LaravelPipeline\Transports\SimpleTransport;
use App\Models\User;

class UserRegistrationTransport extends SimpleTransport;
{
    private Request $request;

    private User $user;

    public function setRequest(Request $request)
    {
        $this->request = $request;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    public function setUser(User $user)
    {
        $this->user = $user;
    }

    public function getUser(): User
    {
        return $this->user;
    }
}
```

Now the Pipes!

```php
namespace App\Pipes;

use Slashequip\LaravelPipeline\Contracts\Transport;
use App\Transport\UserRegistrationTransport;
use App\Models\User;

class CreateUser
{
    /**
     * @param UserRegistrationTransport $transport
     */
    public function handle(Transport $transport)
    {
        $user = User::create([
            'email' => $transport->getRequest()->input('email'),
            'name' => $transport->getRequest()->input('name'),
            'password' => Crypt::encrypt($transport->getRequest()->input('password')),
        ]);

        $transport->setUser($user);
    }
}
```

```php
namespace App\Pipes;

use Slashequip\LaravelPipeline\Contracts\Transport;
use App\Transport\UserRegistrationTransport;
use App\Models\User;

class SendWelcomeEmail
{
    /**
     * @param UserRegistrationTransport $transport
     */
    public function handle(Transport $transport)
    {
        $transport->getUser()->notify(new WelcomeEmail());
    }
}
```

```php
namespace App\Pipes;

use Slashequip\LaravelPipeline\Contracts\Transport;
use App\Transport\UserRegistrationTransport;
use App\Models\User;

class LogUserIn
{
    /**
     * @param UserRegistrationTransport $transport
     */
    public function handle(Transport $transport)
    {
        Auth::login($transport->getUser());
    }
}
```
