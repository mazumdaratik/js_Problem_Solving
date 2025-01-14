let calcInterest = function(amount, rate, years){
    if(amount < 500){
        throw new Error(`Enter a valid Amount.`);
    }

    let interest = amount * rate * years / 100 ;
    interest = interest.toFixed(2);
    return interest;
}
console.log('The inters is', calcInterest(100, 5 , 1));