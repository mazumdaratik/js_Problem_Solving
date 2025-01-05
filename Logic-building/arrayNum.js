function arrayNum(array){
    let biggestNum = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > biggestNum){
            biggestNum = array[i];
        }
    }
    return biggestNum;
}
console.log(arrayNum([3,4,5,6]));
//Math.max();