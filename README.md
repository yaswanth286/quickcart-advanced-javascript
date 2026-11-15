# Advanced JavaScript Practical Assignment

## Overview

This repository contains the QuickCart order management practical assignment. It covers JavaScript objects, prototype inheritance, ES6 classes, array methods, Map and Set, JSON handling, asynchronous programming, performance optimization, DOM events and a final order summary.

## Technologies Used

- JavaScript ES6+
- HTML5
- CSS3
- Node.js
- Browser DOM APIs

No external frameworks or libraries are required.

## Project Structure

```text
quickcart-advanced-javascript/
├── part-a-objects-classes/
│   └── products.js
├── part-b-array-methods/
│   └── shopping-cart.js
├── part-c-json-debugging/
│   └── json-handling.js
├── part-d-asynchronous/
│   └── order-processing.js
├── part-e-optimization-events/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── part-f-integration/
│   └── quickcart.js
└── README.md
```

## How to Run

Install Node.js if it is not already installed.

Run the JavaScript files from the project root:

```bash
node part-a-objects-classes/products.js
node part-b-array-methods/shopping-cart.js
node part-c-json-debugging/json-handling.js
node part-d-asynchronous/order-processing.js
node part-f-integration/quickcart.js


The asynchronous examples include timers, so the Part D file takes several seconds to finish.

To view the DOM tasks, open `part-e-optimization-events/index.html` in a browser.

## Part A: Objects, Prototypes and Classes

Creates products with a constructor function and a shared prototype method. It also demonstrates ES6 classes, inheritance, `super()`, arrow functions, template literals, destructuring, rest parameters and spread syntax.

## Part B: Array Methods, Map, Set and Object Methods

Uses `map()`, `filter()`, `reduce()` and `forEach()` to process a shopping cart. It demonstrates inventory operations with `Map`, duplicate removal with `Set`, and the difference between `Object.freeze()` and `Object.seal()`.

## Part C: JSON Handling and Debugging

Converts an order object to JSON and back. It demonstrates how JSON handles `undefined`, functions, `NaN`, `Infinity`, invalid JSON, circular references and Date objects.

## Part D: Asynchronous JavaScript

Demonstrates event loop output order, callbacks, Promise chaining, async/await and the four Promise combinators: `all()`, `allSettled()`, `race()` and `any()`.

## Part E: Performance Optimization and DOM Events

Includes a search input with 500 ms debouncing, a scroll handler with throttling, a memoized discount calculation, event bubbling and event delegation for removing products. New list items use the same delegated click handler.

## Part F: Final Integration Challenge

Builds Rahul's QuickCart order summary using a Product class, destructuring, array methods, Set, Map, Object.freeze(), JSON serialization and async/await confirmation.

## Assignment Notes

- The code uses `const` by default and `let` only where reassignment is required.
- Strict equality is used for comparisons.
- Functions are kept reusable where appropriate.
- The JSON debugging examples catch expected errors so the script can continue running.
- The browser-based DOM tasks are in Part E.
