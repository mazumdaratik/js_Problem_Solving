function countWordsInSentence(sentence){
    let splitted = sentence.split(' ')
    //console.log(splitted);
    let avoidDoubleSpace = splitted.filter( elem => elem != '');
    //console.log(avoidDoubleSpace);
    let len = avoidDoubleSpace.length;
    return `${sentence}: has ${len} words.`;
}
console.log(countWordsInSentence('I would   never fall in love again'))