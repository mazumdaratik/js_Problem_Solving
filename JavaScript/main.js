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