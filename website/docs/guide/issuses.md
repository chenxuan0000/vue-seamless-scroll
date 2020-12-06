#  Issues solution

1、**`Event cannot be duplicated`**

This plugin does not make a deep copy of the node (cl (true) of jq)

Solution

> 1. The event agent binds the parent element to the corresponding event and makes event completions on the required child elements. (recommend)

> 2. A simple direct native js for `addEventListener`, there is a problem with asynchronous data can not be bound. (Not recommended)
