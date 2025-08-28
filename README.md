# 📘 JavaScript Interview Q&A


### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **`getElementById(id)`** → Selects a single element by its **unique `id`** attribute.  
- **`getElementsByClassName(className)`** → Selects **all elements** that have the specified class name (returns an *HTMLCollection*).  
- **`querySelector(selector)`** → Selects the **first element** that matches the given CSS selector.  
- **`querySelectorAll(selector)`** → Selects **all elements** matching the CSS selector (returns a *NodeList*).  

**Example:**
```html
<div id="main" class="box"></div>
<div class="box"></div>

<script>
  console.log(document.getElementById("main"));        // single element
  console.log(document.getElementsByClassName("box")); // HTMLCollection
  console.log(document.querySelector(".box"));         // first element with .box
  console.log(document.querySelectorAll(".box"));      // NodeList of all .box
</script>
```

---

### 2. How to create and insert a new element into the DOM?

You can create a new element using **`document.createElement()`**, then attach it to a parent node.

**Common Methods:**
- **`appendChild(node)`** → Appends a node as the last child.  
- **`insertBefore(newNode, referenceNode)`** → Inserts before a specific child.  
- **`append()` and `prepend()`** → More flexible; can insert multiple nodes or strings.  

**Example:**
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
document.body.appendChild(newDiv);
```

---

### 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event **starts from the target element** and then **bubbles up** through its parent elements until it reaches the root (`document`).

**Example:**
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("child").addEventListener("click", () => {
    console.log("Child button clicked");
  });

  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent div clicked");
  });
</script>
```

**Output when button is clicked:**
```
Child button clicked
Parent div clicked
```

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach **one event listener** to a parent element and use **event bubbling** to handle events on child elements.

Instead of attaching listeners to multiple children, the parent listens and identifies the target via `event.target`.

**Example:**
```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById("myList");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(`You clicked on ${event.target.textContent}`);
    }
  });
</script>
```

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

**Example:**
```html
<a href="https://example.com" id="myLink">Click Me</a>

<script>
  const link = document.getElementById("myLink");

  link.addEventListener("click", (event) => {
    event.preventDefault();    // Prevents navigation
    event.stopPropagation();   // Stops bubbling
    console.log("Link clicked, but default action prevented!");
  });
</script>
```

