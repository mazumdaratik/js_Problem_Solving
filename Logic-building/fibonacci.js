function fibonacci(n) {
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return a;
}

console.log(fibonacci(6));
console.log(fibonacci(10)); 
//store fibonacci numbers in an Array
function fibonacciArray(n) {
    let arr = [0, 1]; // First two numbers

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

console.log(fibonacciArray(10));

