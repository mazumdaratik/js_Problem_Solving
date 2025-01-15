function isArmstrong(num){
let lastDigit = Math.floor(num % 10);
//console.log(lastDigit);
let second = Math.floor(num / 10);
//console.log(second);
let secondDigit = Math.floor(second % 10);
//console.log(secondDigit);
let thirdDigit = Math.floor(second / 10);
//console.log(thirdDigit);

let arm = 0;
if(lastDigit){
    arm += lastDigit**3 + secondDigit**3 + thirdDigit**3;
    //console.log(arm);
    if(num === arm){
        return `${num} is a Armstrong Number.`;
    } else {
        return `${num} is not a Armstrong Number.`;
    }
}

}
console.log(isArmstrong(133));