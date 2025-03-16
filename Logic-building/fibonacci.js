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
