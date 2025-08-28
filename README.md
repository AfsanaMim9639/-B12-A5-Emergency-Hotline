# 📘 JavaScript Interview Q&A


### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

**Answer:**

1. **`getElementById("id")`** → Selects one element with the given ID. Returns a single element.

2. **`getElementsByClassName("class")`** → Selects all elements with the given class. Returns an HTMLCollection (like an array, but not exactly).

3. **`querySelector("selector")`** → Selects the first element that matches any CSS selector. Returns a single element.

4. **`querySelectorAll("selector")`** → Selects all elements that match any CSS selector. Returns a NodeList (can loop with `forEach`).

`getElementById` and `querySelector` return a single element, while `getElementsByClassName`, `getElementsByTagName`, `getElementsByName`, and `querySelectorAll` return collections like HTMLCollection or NodeList. Modern methods like `querySelector` and `querySelectorAll` are preferred, though old methods still work and may return live collections.

### 2. How to create and insert a new element into the DOM?

You can create a new element using **`document.createElement()`**, then attach it to a parent node.

**Common Methods:**
- **`appendChild(node)`** → Appends a node as the last child.  
- **`insertBefore(newNode, referenceNode)`** → Inserts before a specific child.  
- **`append()` and `prepend()`** → More flexible; can insert multiple nodes or strings.  


### 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event **starts from the target element** and then **bubbles up** through its parent elements until it reaches the root (`document`).



### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach **one event listener** to a parent element and use **event bubbling** to handle events on child elements.

Instead of attaching listeners to multiple children, the parent listens and identifies the target via `event.target`.


✅ New `<li>` elements added later still trigger the same event handler.

**Benefits:**
- Improves **performance** (fewer listeners).  
- Works with **dynamically added elements**.  
- Keeps code **cleaner and easier to maintain**.  

---

### 5. Difference between `preventDefault()` and `stopPropagation()`

| Method | Description | Example Use Case |
|--------|-------------|------------------|
| **`event.preventDefault()`** | Prevents the browser’s default behavior. | Stop form submission, prevent link navigation. |
| **`event.stopPropagation()`** | Stops the event from bubbling up (or capturing down) the DOM tree. | Prevent parent event handlers from firing. |



