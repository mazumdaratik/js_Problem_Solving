function sumOfInt(number){
    
    let string = number.toString();
    
    let doSplit = string.split('');
    
    let sum = 0;

    doSplit.forEach( val => {
        sum += parseInt(val);
    })
    return sum;
    
}
console.log(sumOfInt(12));

function sumOfInteger(num){
    let number = num;
    while(number > 0){
        let lastDigit = number % 10;
        
        number = Math.floor(number / 10);
        
         sum = sum + lastDigit ;
        
    }
    return sum;
    
}
console.log(sumOfInteger());