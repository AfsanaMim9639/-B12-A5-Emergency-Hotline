1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementsByClassName(className): Selects all elements that possess the specified className.
getElementById(id): Selects a single element by its unique id attribute.
querySelector(selector): Selects the first element that matches the provided CSS selector.
querySelectorAll(selector): Selects all elements that match the provided CSS selector.

2. How do you create and insert a new element into the DOM?

Answer: 
I use document.createElement() method to create a new HTML element. Once created, the new element needs to be attached to an existing parent element in the DOM to become visible on the page. Several methods can be used for this:
i. appendChild(): This method appends a node as the last child of a specified parent node.
ii. insertBefore(): This method inserts a node before a specified reference node as a child of a parent node.
iii. append() and prepend(): These methods offer more flexibility than appendChild() as they can append/prepend multiple nodes or strings.


3. What is Event Bubbling and how does it work?

Answer:
Event bubbling is a concept in JavaScript related to how events propagate (or travel) through the DOM (Document Object Model).

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is a technique in JavaScript that allows us to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
event.preventDefault():
This method prevents the browser's default action associated with an event from occurring.
event.stopPropagation():
This method prevents the event from propagating further up or down the DOM tree (during the capturing and bubbling phases of event propagation).
