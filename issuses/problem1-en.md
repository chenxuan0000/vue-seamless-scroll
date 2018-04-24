## Event cannot be duplicated (click on event, etc.)

### This plugin does not make a deep copy of the node (cl (true) of jq)

### Solution
> 1. A simple direct native js for `addEventListener`, there is a problem with asynchronous data can not be bound. (Not recommended)
> 2. The event agent binds the corresponding event to the parent element and adds events to the child elements that need to be penalized. (recommend)