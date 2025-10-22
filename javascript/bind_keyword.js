const module = {
    x: 42,
    getX: function(){
        return this;
    }
}

console.log(module.getX());

const unboundedGetX = module.getX;

console.log(unboundedGetX());

console.log("\n\nUsing bind functions\n\n");
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
console.log(boundLog);
const boundLog2 = boundLog.bind("new this value", 3, 4);
console.log(boundLog2(5, 6)); // "this value", 1, 2, 3, 4, 5, 6