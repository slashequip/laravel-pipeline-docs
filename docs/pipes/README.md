# Pipes

As noted on the [Basic Usage](/basic-usage.html) page; Pipes are small, encapsulated pieces of logic that should do one job. They can use data from the Transport and they can manipulate or set data on the Transport too.

Pipes will be the building blocks of your pipeline and are responsible for getting _shit_ done.

On the [Basic Usage](/basic-usage.html) page we saw that our pipes can perform some logic, kind of like an action class. In Laravel Pipeline, pipes can do so much more to help tackle any complex steps or requirements. There are a number of helper classes and interfaces provided by the Laravel Pipeline package;

* [Anonymous Pipes](/pipes/anonymous.html)
* [Branching Pipes](/pipes/branching.html)
* [Quiet Pipes](/pipes/quietly.html)
* [Teardown-able Pipes](/pipes/teardown.html)
