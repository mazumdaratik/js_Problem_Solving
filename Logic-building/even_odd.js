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

function evenOdds(num){
    let remainder = num % 2 ;
    if(remainder === 0) {
        return "Even"
    } else if (remainder !== 0){
        return "Odds"
    } else {
        console.log("Not a valid check");
    }
}
console.log(evenOdds(5));

function evenodd(num){
        return num % 2 === 0 ? "even" : "odd";
}

console.log(evenodd(5));