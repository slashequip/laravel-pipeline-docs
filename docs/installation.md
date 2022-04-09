# Installation

All you need to do to get started is add Laravel Pipeline to your composer dependencies.

```bash
composer require slashequip/laravel-pipeline
```

You can then begin to use the pipeline in your codebase

```php
use SlashEquip\LaravelPipeline\Pipeline;
use Illuminate\Http\Request;
use App\Transports\NewUserTransporter;
use App\Pipes\StoreNewUser;
use App\Pipes\SendNewUserNotification;
use App\Pipes\AddNewUserToIntercom;
use App\Pipes\AddNewUserToOnboardingCampaign;
use App\Http\Resources\UserResource;

class CreateNewUserController
{
    public function __invoke(Request $request)
    {
        $transport = NewUserTransporter::make()
            ->setRequestData($request);

        Pipeline::make()
            ->send($transport)
            ->through(
                new StoreNewUser(),
                new SendNewUserNotification(),
                new AddNewUserToIntercom(),
                new AddNewUserToOnboardingCampaign(),
            )
            ->deliver();

        return new UserResource($transport->user);
    }
}
```
