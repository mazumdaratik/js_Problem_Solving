function isPalindrom(inputString){
    let len = inputString.length / 2;
    //console.log(len);
    for(let i = 0; i <= len; i++){
        if(inputString[i] !== inputString[len-1-i]){
            return false;
        }
    }
    return true;
}
//console.log(isPalindrom('radar'));

function findPalindrom(inputString){
    const result = [];
    for(let i = 0; i < inputString.length; i++){
        for(let j = i + 1; j <= inputString.length; j++){
            const substr = inputString.slice(i,j);
            if(isPalindrom(substr) && substr.length > 1){
                result.push(substr);
            }
        }
    }
    return result;
}
console.log(findPalindrom('abcd'));

/* function checkPallindrome(str){
    let doSplit = str.split('');
 //   console.log(doSplit);
    let reversed = doSplit.reverse();
 //   console.log(reversed);
    let add = reversed.join('');
 //   console.log(add);
    if(str == add){
        console.log(`Pallindrome`);
    } else {
        console.log(`Not Pallindrome`);
    }
}

checkPallindrome("madam") */