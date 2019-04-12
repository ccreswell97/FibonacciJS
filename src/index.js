'use strict';

import {fibonacci, fibonacciUsage} from './mathfun.js'

function addText(content) {
    let div = document.createElement('div');
    let text = document.createTextNode((content));
    div.appendChild(text);
    document.body.appendChild(div);
}

addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 0 (0): ${fibonacci(0)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 1 (1): ${fibonacci(1)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 2 (1): ${fibonacci(2)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 3 (2): ${fibonacci(3)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 4 (3): ${fibonacci(4)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 5 (5): ${fibonacci(5)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 6 (8): ${fibonacci(6)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 7 (13): ${fibonacci(7)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 8 (21): ${fibonacci(8)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib ten (NaN): ${fibonacci("ten")}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib -8 (error): ${fibonacci(-8)}`);
addText(`Current count: ${fibonacciUsage()}`);

addText(`Fib 14.4 (377): ${fibonacci(14.4)}`);
addText(`Current count: ${fibonacciUsage()}`);




