//without regex
function isStrongPassword(pass){
if(pass.length < 8){
    return false;
}

let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let uppercase = lowerCase.toUpperCase();
let numbers = '0123456789';
let specialChar = '!@#';

let lowerCaseExist = false;
let uppercaseExist = false;
let numbersExist = false;
let specialCharExist = false;

for (let char of pass){
    if(lowerCase.includes(char)){
        lowerCaseExist = true;
    } else if(uppercase.includes(char)){
        uppercaseExist = true;
    } else if(numbers.includes(char)){
        numbersExist = true;
    } else if(specialChar.includes(char)){
        specialCharExist = true;
    } 
}
if(lowerCaseExist && uppercaseExist && numbersExist && specialCharExist){
    return true;
} else{
    return false
}


}

console.log(isStrongPassword('@Iubat1992'));
console.log(isStrongPassword('qadsgAssj'));
