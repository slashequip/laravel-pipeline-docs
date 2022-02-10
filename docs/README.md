# Laravel Pipeline

The pipeline pattern, is not new, it is a software design pattern that provides the ability to build and execute a sequence of operations.

You'll have used the pattern even if you were not aware - Laravel's middleware handling uses a pipeline approach. Each middleware is a pipe, and the request is passed through each one as the transport.

![Image of a conveyor belt](/images/pipeline.png)

We can use this same approach to simplify complex logic.
