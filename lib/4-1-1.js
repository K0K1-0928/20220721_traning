"use strict";
function calc(a, b = 1) {
    return a + b;
}
console.log(calc(1)); // 2
console.log(calc(2, 3)); // 5
