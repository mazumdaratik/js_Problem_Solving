import Stack from "./stack.js"

const stack = new Stack();
stack.push(33);
stack.push(35);
console.log(stack);
console.log("pop result: ", stack.pop());
console.log("isEmpty result: ", stack.isEmpty());
stack.push(22);
console.log("isEmpty result: ", stack.isEmpty());
console.log("size result: ", stack.size());
stack.push(23);
console.log("size result: ", stack.size());