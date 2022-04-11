# Anonymous Pipes

Anonymous pipes are exactly what you think they are, a way to define pipes without writing an explicit pipe class, using an anonymous function.

They can be useful for quick debugging or in a Pipeline that needs some context that is a little trickier to pass through.

The Laravel Pipeline package comes with a built in class you can use to define an anonymous pipe, see the
example below;

```php
use Slashequip\LaravelPipeline\Pipes\AnonymousPipe;

Pipline::make()
    ->send(new SimpleTransport)
    ->through(
        AnonymousPipe::make(function (SimpleTransport $transport) {
            Log::info("This is the current state", ['state' => $transport->state]);
        })
    )
    ->deliver();
```
