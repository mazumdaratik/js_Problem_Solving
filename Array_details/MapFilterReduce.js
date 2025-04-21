const numbers = [10, 15, 20, 25, 30];
const result = numbers.filter( num => num % 2 === 0)
                      .map( num => num * 2)
                      .reduce( (acc, value) => {
                       return acc + value;
                      }, 0)
console.log(result);

const words = ['you', 'favorite', 'are', 'knowledge', 'the', 'best'];
const stringResult = words.filter(word => word.length < 5)
    .map(word => word.toUpperCase())
    .reduce((accumulator, currentValue) => { 
        console.log(accumulator, currentValue); 
        return accumulator + ' ' + currentValue; });
console.log("stringResult", stringResult);