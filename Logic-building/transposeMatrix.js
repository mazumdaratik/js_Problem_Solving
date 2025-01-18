function transposeMatrix(inputArray){
    const numOfRows = inputArray.length;
    const numOfCols = inputArray[0].length;

    const result = [];

    for(let i = 0; i < numOfRows; i++){
        for(let j = 0; j < numOfCols; j++){
 //           console.log(inputArray [i][j]);
            if(!result[j]){
                result [j] = [];
            }

            result [j] [i] = inputArray [i] [j]
        }
        
    }

    return result;
}

const inputMatrix = [ [3, 4, 8],
                      [5, 6, 9] ];

console.log(transposeMatrix(inputMatrix));