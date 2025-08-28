# ---------Question/Answer---------


### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll.

**Answer:**

1. **`getElementById("id")`** → Selects one element with the given ID. Returns a single element.

2. **`getElementsByClassName("class")`** → Selects all elements with the given class. Returns an HTMLCollection (like an array, but not exactly).

3. **`querySelector("selector")`** → Selects the first element that matches any CSS selector. Returns a single element.

4. **`querySelectorAll("selector")`** → Selects all elements that match any CSS selector. Returns a NodeList (can loop with `forEach`).

`getElementById` and `querySelector` return a single element, while `getElementsByClassName`, `getElementsByTagName`, `getElementsByName`, and `querySelectorAll` return collections like HTMLCollection or NodeList. Modern methods like `querySelector` and `querySelectorAll` are preferred, though old methods still work and may return live collections.

### 2. How to create and insert a new element into the DOM?
**Answer:**
Create a new element using the **document.createElement()** method. Then, set any attributes or properties for the element (like id, class, innerHTML, etc.). Next, select the parent node where you want to insert the new element. Finally, use one of the common methods to insert the new element into the parent node. These methods are:

i) parentNode.appendChild(newNode) → inserts at the end
ii) parentNode.insertBefore(newNode, referenceNode) → inserts before a reference node
iii) parentNode.insertAdjacentElement(position, newNode) → allows more versatile positions
iv) parentNode.append() or parentNode.prepend() → newer methods

### 3. What is Event Bubbling and how does it work?
**Answer:**
Event bubbling happens when an event starts on the element where it occurred and then “bubbles up” through its parent elements, one by one, all the way to the top of the DOM.

**How it works:**
i) When we click (or trigger an event) on an element, it first runs the event handler on that element.

ii) Then the event moves up to the parent element and runs any handlers there.

iii) It keeps going up through all the parent elements until it reaches the top of the document.




### 4. What is Event Delegation in JavaScript? Why is it useful?
**Answer:**
Event delegation is a way in JavaScript where we put one event listener on a parent element instead of adding listeners to every child element. The parent listens for events (like clicks) that happen on its children and reacts based on which child triggered the event.

**Why it’s useful:**

i) Efficient: Uses less memory because we don’t need a listener on every child.

ii) Works for new elements: Automatically handles child elements added later.

iii) Simple: Keeps we code cleaner by managing events in one place.



### 5. Difference between `preventDefault()` and `stopPropagation()`

**Answer:**
preventDefault() → Stops the browser’s default action for an event (like submitting a form or opening a link). The event still moves through the DOM.

stopPropagation() → Stops the event from traveling up or down the DOM tree. It doesn’t stop the browser’s default action.

We can use them separately or together.To sum up, preventDefault() stops the browser’s default action, while stopPropagation() stops the event from moving through the DOM.


