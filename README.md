# Homework 1 - CSC 515 - Advanced Internet Programming #
**Due Date: 2/1/2019**

## Objective ##
Create a JavaScript library called MathFun. Your project should be self contained and use webpack
for local development. You can output the results in any way you like for local development:
add elements to the DOM, log to the console, etc.

Reference the
[webpack demo we did in class](https://github.com/MissouriState-CSC515-Spring2019/starter-kit)
to get started.

## Specifications ##
* You should create a module at `src/mathfun.js`.

### Export the following methods: ###

```JavaScript
export function fibonacci(index) {};
```
This function returns the fibonacci sequence number at the provided index.
Index may be a string or number. If a number is provided, it should be rounded to the nearest integer.
If a string is provided, it should be parsed as an integer. You must also handle invalid input.
The sequency should start with 0.

Invalid input should throw an exception.

```js
module.exports.fibonacciUsage: = function() {};
```
This function returns the number of times that `MathFun.fibonacci` has been called.

```js
export function fibonacciUsage() {};
```
This function returns the number of times that `fibonacci` has been called. 

**Example Usage:**
```js
import {fibonacci, fibonacciUsage} from './mathfun.js';
fibonacciUsage(); // returns 0
fibonacci(6); // returns 8  
fibonacci(0); // returns 0  
fibonacciUsage(); // returns 2
```

## How To Submit The Assignment
 1. Clone the repository locally.
 2. Create a feature branch to work on your code.
 3. Commit and push often while you develop.
 4. When ready to submit, create a pull request on GitHub targeting the master branch .

If you have questions during this process, create the pull request early and ask the questions there.
Email me a link to the pull request.
