# Laravel Pipeline

The pipeline pattern, is not new, it is a software design pattern that provides the ability to build and execute a sequence of operations. In its simplest form a pipeline can be looked at like a `foreach` loop, looping over each pipe and invoking each one in turn.

You'll have used the pattern even if you were not aware - Laravel's middleware handling uses a pipeline approach. Each middleware is a pipe, and the request is passed through each one as the transport.

![Image of a conveyor belt](/images/pipeline.png)

We can use this same approach to simplify complex logic within our controllers, jobs, commands. In particular, this approach makes your code highly readable in team-based environments, other developers are able to very quickly see everything that should happen within the pipeline.

> This pipeline approach, when combined with a couple of other Laravel-centric safeguards - like stopping the use of Events - has allowed me to help a number of teams simplify their code but more importantly make it 100x more readable and understandable to new hires.
>
> -- <cite>Sam Jones (@slashequip)</cite>
