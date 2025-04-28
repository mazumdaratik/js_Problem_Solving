function rollTheDice(sidesOfDice: number): number {
    return Math.floor(Math.random() * sidesOfDice) + 1;
}

function rollMultipleDice(numOfDice: number, sidesOfDice: number): number[] {
    const result: number[] = [];
    let count = 0;
    while (count < numOfDice) {
        const resultOfDice = rollTheDice(sidesOfDice);
        result.push(resultOfDice);
        count++;
    }
    return result;
}

console.log(rollMultipleDice(2, 6));
console.log(rollMultipleDice(1, 6));
console.log(rollMultipleDice(3, 6));
