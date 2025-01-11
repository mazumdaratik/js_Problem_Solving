function factorsOfNumber(inputNumber){
    let result = [];
    for(i = 1; i <= inputNumber; i++){
        if (inputNumber === 0){
            result.push(i);
        console.log(i, "is a factor.");
        }
        
    }
    return result;
}

factorsOfNumber(5);