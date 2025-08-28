# 📘 JavaScript Interview Q&A


### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **`getElementById(id)`** → Selects a single element by its **unique `id`** attribute.  
- **`getElementsByClassName(className)`** → Selects **all elements** that have the specified class name (returns an *HTMLCollection*).  
- **`querySelector(selector)`** → Selects the **first element** that matches the given CSS selector.  
- **`querySelectorAll(selector)`** → Selects **all elements** matching the CSS selector (returns a *NodeList*).  


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



