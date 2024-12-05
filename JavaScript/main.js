//1.How to print random number from - 1 to 6 in LUDU Game
function  getRandomNumber (min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}

document.write(getRandomNumber(1,6));

//2.How to organize All the students name in class Alphbetically?

const students = ['Shawon','Rizowan','Riana', 'Atik', 'ovey', 'Huda', 'Afrin', 'Tuse'];

console.log(students.sort());

//3.How to print students ID in ascending order?

const stuedntsID = [20303001, 20303038, 20303025, 20303045, 20303007, 20303015,20303009, 20303032, 20303022];

console.log(stuedntsID.sort(function (num1, num2) {
    return num1 - num2 ; //descending num2-num1 if num1-num2 = positive then num2 is small if negative then num1 is small
}));
console.log(stuedntsID)

//3.Calculate Leapyear

let isLeapYear = function (year) {
if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)) ) {
    console.log(`${year} is leap year.`);
}else {
    console.log(`${year} is not leap year.`);
    }
}
isLeapYear(2032);
//Using Arrow function
let LeapYear = year => {

    if((year % 400 === 0) ||(year % 4 === 0 && year % 100 !== 0)) {
        console.log(`${year} is leap year.`);
    } else {
        console.log(`${year} is not leap year.`);
    }
}
LeapYear(2032);

//4.Find Out Vowels In a sentence

let checkVowels = function (sentence) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
const lowercase = sentence.toLowerCase();

let count = 0;

for (let char of lowercase) {
    if (vowels.includes(char)) {
        count ++ ;
    }
}

if (count > 0) {
    console.log(`Total Vowels found in "${sentence}" is = ${count}`);
} else {
    console.log("No Vowels in this Sentence")
}

}
checkVowels('My Name is Atik Mazumdar.');

//4.1 using forEach
const vow = ['a','A', 'e','E','I','i','U','O','o','u'];

function countVowels (sentence) {
    let count = 0;
    let letters = Array.from(sentence);
    letters.forEach(function(value) {
        if (vow.includes(value)) {
            count ++ ;
        }
    });
    return count;
}

console.log(countVowels("My Name is Atik Mazumdar."));

//5. Find out the duplicates number from an Array 

const newNum = [1, 2, 3,4,5,7,5,2,8,9,8,1,10];

const duplicates = newNum.filter(function (value, index, array){
    return array.indexOf(value) !== index
})
console.log(duplicates);

//6. Find the derivative of the function 𝑓(𝑥)=3x**2 + 2x + 1


let derivative = x => {
    return 6 * x + 2; // Derivative of f(x) = 3x^2 + 2x + 1
};
let xValue = 3;
console.log(`The value of f'(x) at x = ${xValue} is: ${derivative(xValue)}`);

//7.Write a program to check two numbers and return if one of the number is 100 or if the sum of the two numbers is 100;

let checkNumbers = function (numb1, numb2) {
    if (numb1 === 100 || numb2 === 100) {
        return `One of the numbers is 100.`;
    } else if (numb1 + numb2 === 100) {
        return `The sum of the numbers is 100.`;
    } else {
        return `Neither condition is met.`;
    }
};

console.log(checkNumbers(50, 50)); 
console.log(checkNumbers(100, 20)); 
console.log(checkNumbers(30, 40)); 

//8.Write a Program To get the extension of a filname;
const getFileExt = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExt('index.html'));
console.log(getFileExt('tailwind.css'));
console.log(getFileExt('document.pdf'))

//9.Write a program to replace every character in a given string with 
//the character following it in aplphabet
function shiftCharacters(str) {
    let result = ''; 

    for (let char of str) {
        
        if (char >= 'a' && char <= 'z') {
            
            result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z') {
            
            result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            
            result += char;
        }
    }

    return result;
}

// Test cases
console.log(shiftCharacters("abcd")); 
console.log(shiftCharacters("XYZ"));

//9.1 Alternative 
const moveCharForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(moveCharForward('atik'));

//10. How to calculate the Square Root of a number?
let a = prompt('Enter the number:')
let b = Math.sqrt(a);
console.log(b);
//10.1
let findSquareRoot = (number) => {
    if (number < 0) {
        return `Negative number is not a real number.`
    } else {
        return Math.sqrt(number);
    }
}

console.log(findSquareRoot(4));

//11.Calculate th Area of a triangle
//first thoughts
let base = prompt('Enter the base:');
let height = prompt('Enter the height:');
let area = (base * height) /  2;
console.log(area);
//11.
let  = prompt('Enter the base:');
let h = prompt('Enter the height:');
let c = Number(b);
let d =Number(h);
let calArea = function (c,d) {
    return 0.5*c*d;
}
console.log(`The area of the triangle is: ${calArea(c, d)}`);

//12.Swap two variable using temporary variable & without temporary variable
/* let x = 5;
let y = 10;
      //using temporary variable
let temp = x;
let x = y;
let y = temp;
console.log(`Swapped variable of a  is ${b} and Swapped variable of a  is ${a} `); */
/* 13.How to convert kms to miles */
function convert() {
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('result').innerText = `${miles} miles`
}
//14. Program to Check if a number is Positive, Negative, or Zero

let pnz = function (val) {

if (val < 0) {
    console.log(`Given number is Negative`)
} else if (val > 0) {
    console.log(`The number is positve.`)
} else if (val === 0) {
    console.log(`The number is Zero.`)
} else {
    console.log(`Not a number.`)
}
}
pnz(5);
//15.Create a OTP generator code
let otp = Math.random();
console.log("before calculation" +otp);
otp = otp * 10000;
console.log("After Calculation" +otp);
console.log("Your OTP is:  " + Math.floor(otp));

//16 Find out Eve/Odd Number using ternary operator
let m = 5;
var eveodd = m % 2 == 0 ? "Even" : "Odd";
console.log (`${m} is an ${eveodd} Number.`);

//17.Write a program to Check if a Number is a Prime Number
let primeNumber = prime => {
    if (prime % 1 === 0 && prime % prime) {
        return `${prime} is a Prime Number.`;
    } else {
       return `${prime} is not a Prime Number.`;
    }
}
console.log(primeNumber(7));
//17.1-----
let primeNumbers = (prime) => {
    if (prime <= 1) {
        return `${prime} is not a Prime Number.`;
    }

    for (let i = 2; i <= Math.sqrt(prime); i++) {
        if (prime % i === 0) {
            return `${prime} is not a Prime Number.`;
        }
    }

    return `${prime} is a Prime Number.`;
};
console.log(primeNumbers(1)); 
//18.Find Factorialof a number

/* let findFactorial = (fact) => {
    let count = 1;
    for (let f = 1 ; f <= fact ; f++) {
     count *= f;
} return count;
}
console.log (findFactorial(5)); */
//18.1 using recursion
var numberr = prompt("Enter number to calculate Factorial:")
var fact = 1;
function factorial (n) {
    if (n > numberr) {
        return;
    }
    fact = fact * n;
    n++;
    fact(n);
}
factorial(1);
//19 JavaScript Promises

const statu = false;

console.log('Task 1');

const promise = new Promise(function (resolve,reject){

    setTimeout(function(){
        if(statu) {
            resolve('Task 2');
        } else {
            reject('failed');
        }
    },2000);

});
promise
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log(err);
    });

console.log('Task 3');
