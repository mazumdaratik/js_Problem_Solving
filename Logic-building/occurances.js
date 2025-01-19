const bigString = 'This is a big string with the word big repeated in the big string.';

const wordToFind = 'big';

// console.log(bigString.indexOf('big'));
// console.log(bigString.indexOf('big',11));
// console.log(bigString.indexOf('big',36));

function findAllOccurances(str, word){
    const result = [];
let index = str.indexOf(word);
while(index !== -1){
    result.push(index);
    index = str.indexOf(word, index + 1);
}
console.log(result);
}

findAllOccurances(bigString, wordToFind);
