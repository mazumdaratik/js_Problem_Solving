function rollThedice(sidesofDice){
    return Math.floor(Math.random() * sidesofDice) + 1;
}

function rollMultipleDice(numOfDice, sidesofDice){
    const result = [];
    let count = 0;
    while( count < numOfDice){
        const resultOfDice = rollThedice(sidesofDice);
        result.push(resultOfDice);
        count ++;
    }
    return result;
}
console.log(rollMultipleDice(2,6));
console.log(rollMultipleDice(1,6));
console.log(rollMultipleDice(3,6));