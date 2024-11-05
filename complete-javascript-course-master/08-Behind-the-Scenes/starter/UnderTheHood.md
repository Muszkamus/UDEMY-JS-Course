# An High-Level Overview of Javascript

---

High-Level

Garbage-Collected

Interpreted or just in-time compiled

Multi-Paradigm programming (Imperative vs. Declarative)

- Procedural (The one we have used so far)
- Object-oriented ()
- Functional

Prototype-based object-oriented

First-class functions

Dynamic

Single-threaded

Non-blocking event loop

---

# The Javascript engine and runtime

---

JS Engine - PRogram that exetuses javascript code.
Most popular is Google V8

CallStack- The call stack manages the order of function execution within an execution context. Each time a function is called, it’s added to the stack; when it completes, it’s removed. This allows the engine to keep track of where it is in the code.

Heap -The heap is an unstructured memory space used for storing objects and data that applications need over time.

JavaScript is often just-in-time (JIT) compiled. This combines elements of both compilation and interpretation:
JavaScript engines use a JIT compiler to compile parts of the code to machine code while executing.
This approach allows for fast execution (like compilation) while retaining flexibility (like interpretation), as the code can be optimized on the fly.

### Modern Just-In-Time Compilation

JS Code

**JavaScript Code Execution**
1- **Parsing**: The JavaScript engine parses the code and generates an Abstract Syntax Tree (**AST**) to understand the structure of the code.
2- **Compilation** (Just-In-Time): The engine compiles parts of the AST to machine code just before execution, optimizing it as the code runs.
3- **Execution**: The compiled code is executed in the Call Stack, where functions are added and removed as they are called and complete.
4- **Optimization**: During execution, the engine continuously optimizes code, sometimes re-compiling parts for better performance.

A JavaScript Runtime is the environment that provides all the resources necessary for JavaScript to function in a browser. It includes the JavaScript engine and other components needed to execute asynchronous tasks and interact with the browser environment.

### Components of a JavaScript Runtime

**JavaScript Engine**: Handles parsing, compiling, and executing JavaScript.

- **Call Stack**: Executes code in order.
- **Heap**: Memory pool where objects are stored.

**Web APIs**: Provided by the browser (not JavaScript itself), these APIs allow JavaScript to interact with elements like:

- **DOM**: For manipulating HTML/CSS elements.
- **Timers**: setTimeout, setInterval for delays.
- **Fetch API**: For making HTTP requests.

**Callback Queue**: Holds asynchronous callbacks waiting to be executed once the Call Stack is clear.

For example, callbacks from setTimeout, fetch, and event listeners wait here until the Call Stack is empty.

## [![App Platorm](https://miro.medium.com/v2/resize:fit:720/format:webp/0*gu_cZsU1i0QLUgoY.png)](https://srivastavaankita080.medium.com/javascript-engine-runtime-ae9d392c170a)

---

# Execution Contexts and The Call Stack

---

<center> Compilation

&darr;

Creation of **global execution context (EC)** (for top-level code)
[Execution Context] = Created when JavaScript starts, managing top-level
code and setting up the global scope.
&darr;
Execution of top-level code (inside global EC)- Runs line by line, defining global variables and functions.
&darr;
Execution of functions and waiting for callbacks- When a function is called, a new EC is added to the Call Stack.
After functions complete, asynchronous callbacks (like setTimeout) wait in the Callback Queue, managed by the Event Loop.

</center>

Variable Environment:

1. **Variable Declarations:** Stores let, const, and var variables within the current context.
   Function Declarations: Holds functions defined in the context.
   Arguments Object: Available in function contexts, it stores all arguments passed to the function.

2. **Scope Chain:** Manages the context’s access to variables from its own scope and outer (parent) scopes. This enables lexical scoping, where inner functions can access variables in outer functions.

3. **this Keyword:** The value of this depends on how the function was called. In the global context, this refers to the global object (like window in browsers). In functions, this varies depending on whether the function is called as a method, a constructor, or in strict mode.

### **The Call Stack**

```js
const name = 'Radek';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};
function second(x, y) {
  var c = 2;
  return c;
}
const x = first();
```

In this code, the Call Stack manages the sequence of function calls and returns as the program executes. Here's how it works step-by-step:

1. **Global Execution Context (EC):**
   When the code starts, the global execution context is created and added to the Call Stack.
   The variables name, first, second, and x are defined in the global context.

2. **Calling first():**
   When first() is called with const x = first();, a new execution context for first is created and pushed onto the Call Stack.
   Inside first, a is initialized to 1, and then second(7, 9) is called.

3. **Calling second(7, 9):**
   The second function is called from within first, so an execution context for second is created and pushed onto the Call Stack.
   Inside second, c is initialized to 2, and 2 is returned.
   The second execution context is then popped off the Call Stack, and b in first gets the returned value 2.

4. **Returning from first():**
   Back in first, a is updated to 3 (1 + 2), and 3 is returned.
   The first execution context is removed from the Call Stack, and x in the global context is set to 3.
   Throughout this process, the Call Stack helps track where each function is in execution, pushing new contexts for each call and popping them when completed.

# Scope and The Scope Chain
