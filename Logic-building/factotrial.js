function factorial(num) {
    if (num < 0){
        throw new Error('The number is Negative');
    }
    let result = 1;
    
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

function factRecursion(input){
    if (num < 0){
        throw new Error('The number is Negative');
    }
    if(input === 0 || input === 1){
        return 1;
    }
    return input * factRecursion(input-1);
            //5 * 4
            //4*3
}
console.log(factRecursion(5));

