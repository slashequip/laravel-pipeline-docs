# Pipes With Teardown

Pipes that are 'teardown-able' allow you to define a teardown method on the pipe itself. Teardown happens when
the pipeline encounters an exception it goes back up the pipe in reverse order and will call the teardown
method on every pipe that can be torn down.

```php
use Slashequip\LaravelPipeline\Contracts\CanPerformTeardown;
use Slashequip\LaravelPipeline\Contracts\Transport;
use Slashequip\LaravelPipeline\Pipes\SimplePipe;
use Throwable;

class PipeThatWillRevertAnythingItDid extends SimplePipe implements CanPerformTeardown
{
    public function handle(Transport $transport): void
    {
        $order = Order::create([
            'user_id' => $transport->getUser()->id,
        ])

        $transport->setOrder($order);
    }

    public function teardown(Transport $transport, Throwable $e): void
    {
        $transport->getOrder()->delete();
    }
}
```
