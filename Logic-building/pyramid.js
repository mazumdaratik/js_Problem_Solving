function pyramid(num){
    for(let i = 1; i <= num; i++){
        let lineContent = "";
        for(let space = 1; space <= num - i; space++){
            lineContent += " ";
        }
        for(let count = 1; count <= i; count++){
            lineContent += count;
        }
        for(let reverseCount = i -1; reverseCount >= 1; reverseCount--){
            lineContent += reverseCount;
        }
        console.log(lineContent);
    }
}

pyramid(10);