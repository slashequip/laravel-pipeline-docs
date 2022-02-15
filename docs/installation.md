# Installation

## Install the package

All you need to do to get started is add Laravel Pipeline to your composer dependencies.

```bash
composer require slashequip/laravel-pipeline
```

You can then begin to use the pipeline in your codebase

```php
use SlashEquip\LaravelPipeline\Pipeline;

class MyComplexController
{
    use AsAction;

    public function __invoke()
    {
        Pipeline::make()
            ->send(new MySpecial)
    }
}
```
