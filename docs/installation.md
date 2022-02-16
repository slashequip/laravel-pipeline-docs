# Installation

All you need to do to get started is add Laravel Pipeline to your composer dependencies.

```bash
composer require slashequip/laravel-pipeline
```

You can then begin to use the pipeline in your codebase

```php
use SlashEquip\LaravelPipeline\Pipeline;
use Illuminate\Http\Request;

class CreateNewUserController
{
    public function __invoke(Request $request)
    {
        $transport = NewUserTransporter::make()
            ->setRequestData($request);

        Pipeline::make()
            ->send($transport)
            ->through(
                StoreNewUser::make(),
                SendNewUserNotification::make(),
                AddNewUserToIntercom::make(),
                AddNewUserToOnboardingCampaign::make(),
            )
            ->deliver();

        return new UserResource($transport->user);
    }
}
```
