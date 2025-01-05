function checkPallindrome(str){
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

checkPallindrome("madam")