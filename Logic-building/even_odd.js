let EvenOdd = function(number){
    if(number % 2 === 0){
        return `Even`;
    } else if( number % 2 != 0) {
        return `Odd`;
    }  else {
        if(number < 0) {
            return `The Number is Negative`;
        }
    } 
}
console.log(EvenOdd(5));