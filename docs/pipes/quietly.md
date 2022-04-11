# Quiet Pipes

Quiet pipes are pipes that are ok to throw exceptions, they allow you to write code that isn't swamped in
`try/catch` statements.

Quiet pipes are implemented with just an interface and a corresponding method, the pipeline will handle the rest.

The requirement method to implement the `CanHandleQuietly` interface is the `shouldReport` method. This method allows you to define whether or not the exception thrown by this pipe will be reported to Laravel's [exception handler](https://laravel.com/docs/9.x/errors#the-exception-handler).

```php
use Slashequip\LaravelPipeline\Contracts\CanHandleQuietly;
use Slashequip\LaravelPipeline\Contracts\Transport;
use Slashequip\LaravelPipeline\Pipes\SimplePipe;

class AnUnimportantPipeThatOftenThrowsExceptions extends SimplePipe implements CanHandleQuietly
{
    public function handle(Transport $transport): void
    {
        throw new RuntimeException('I am broken');
    }

    public function shouldReport(): bool
    {
        return false;
    }
}
```
