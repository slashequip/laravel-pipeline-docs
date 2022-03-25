# Basic usage

To use a Pipeline all you need is a `Transport` and some `Pipes`.

The Transport is the object that gets passed down the Pipeline and through the Pipes. This Transport object is the
source of truth for you Pipeline, it gets manipulated or shaped by the Pipes it passes through.

The Pipes are small, encapsulated pieces of logic that should do _one job_ they can use data from the Transport
and they can manipulate or set data on the Transport too.

Let's put together a super simple, familiar example by recreating user a simple registration Pipeline.

:::tip Note
Pipeline thrives in complex environments and something simple like user registration might be overkill but this
example is to help you understand what Laravel Pipeline can do for you
:::

```php
namespace App\Http\Controllers;

use Illuminate

class RegisterUserController
{
    public function __invoke(Request $request)
    {
        $transport = Pipline::make()
            ->send(new UserRegistrationTransport())
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

```php
namespace App\Transport;

use SlashEquip\LaravelPipeline\Transports\SimpleTransport;
use App\Models\User;

class UserRegistrationTransport extends SimpleTransport;
{
    private User $user;

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

```php
namespace App\Pipes;

use Slashequip\LaravelPipeline\Contracts\Transport;
use App\Transport\UserRegistrationTransport;

class CreateUser
{
    /**
     * @param UserRegistrationTransport $transport
     */
    public function handle(Transport $transport)
    {
        $transport = Pipline::make()
            ->send(new UserRegistrationTransport())
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
