function exponent(base, exp){
    let result = 1;
    for(let i = 1; i <= exp; i++){
        result = result * base;
        console.log(result);
    }
    return result;
}
exponent(5,4);
//do not use Math.pow()