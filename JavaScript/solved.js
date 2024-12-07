
//1.Program to print the table of any user defined number using function
function table (num1) {
    for ( let i =1; i<=10; i++) {
        let result = num1 * i;
        console.log(`${num1} x ${i} = ${result}`);
    };
}
table(5);
table(10);
//2.Program to make a simple calculator using switch case in JavaScript
/* let num2 = prompt("Enter 1st digit:");
let num22 = prompt("Enter 2nd digit:");
let operator = prompt ("Please, Select the operator + - x /");

    switch(operator) {
        case "+":
            let add = num2 + num22;
            console.log(`${num2} + ${num22} = ${add}`);
        break;
        
        case "-":
            let sub = num2 - num22;
            console.log(`${num2} - ${num22} = ${sub}`);
        break;
        case "*":
            let mul = num2 * num22;
            console.log(`${num2} * ${num22} = ${mul}`);
        break;
        case "/":
            let div = num2 / num22;
            console.log(`${num2} / ${num22} = ${div}`);
        break;
        default:
        console.log("Something Wrong!")
    } */
    
//3.Program to Check if the Numbers Have Same Last Digit
let num3 = 42;
let num33 = 52;
let num333 = 62;

let result1 = num3 % 10 ;
let result2 = num33 % 10 ;
let result3 = num333 % 10 ;

if (result1 == result2 && result1 == result3) {
    console.log(`The last digit of ${num3} , ${num33} , ${num333} are Same.`);
} else {
    console.log(`The last digit of ${num3} , ${num33} , ${num333} are Not Same.`);
}

//4.Program to Print the Fibonacci series.

let a = 0, 
    b = 1 ;
    console.log(a);
    console.log(b);
    for ( let i = 0; i<=10; i++) {
        let temp = a + b; //0+1 = 1
        console.log(temp); //1
        a = b; //0=1 => 1
        b = temp;  // 1 = 1 => 1
    }

//4.1 
let fibonacci = (f) =>{
    let series = [];
    let x = 0 , y = 1;
    for (let i = 0; i <= 7; i++) {
        series.push(x); // [0,]
        let tem = x + y;
        x = y;
        y = tem;
    }
    return series;
};
console.log(fibonacci(10))

//5. Write Program to Check 3 digits Armstrong Number 
let arm = 153;
let temp = arm; //temp=> 153
let sum = 0; // sum => 0
while (temp>0){ // yes boro
    let digit = temp%10; //153%10 =>  3(digit)
    console.log(digit);
    sum = sum + digit**3; //27
    console.log(sum);
    temp = parseInt(temp/10); //15
    console.log(temp);
    
}
if (sum == arm) {
    console.log(`${arm} is an Armstrong Number.`)
} else {
    console.log(`${arm} is not an Armstrong Number.`)
}
//5.1
let isArmstrong = (num) => {
    let numStr = num.toString(); 
    let numDigits = numStr.length;
    let sum = 0;

    for (let char of numStr) {
        let digit = parseInt(char);
        sum += digit ** numDigits;
    }

    return sum === num
        ? `${num} is an Armstrong Number.`
        : `${num} is not an Armstrong Number.`;
};
 
console.log(isArmstrong(9474)); 
console.log(isArmstrong(123)); 

//6 Program to Find the Factors of a Number
let num6 = 10;
    for (let i = 1 ; i<=num6; i++ ) {
        if (num6 % i == 0) {
            console.log(i);
        }
    };

//7.Program to Find Sum of a Natural Numbers using Recursion.

function natNum(num) {
    if(num>0) {
        return num + natNum(num-1);
    } else {
        return num;
    }
}
var res = natNum(20);
console.log(res);

//8. Program to Check Palindrome String

let str = 'jahaj';

let  isPallindrome = function (string) {
    let newStr =string.split('').reverse().join('');

    if (str == newStr) {
        return `${str} is a pallindrom string.`
    } else {
        return `${str} is not a pallindrom string.`
    }
};

console.log(isPallindrome(str));
//8.1
let input = 'madam';

let len = input.length;
let msg = 'It is Pallindrome.'
for(let i=0; i<len/2; i++) {
    if (input[i] != input[len-1-i]) {
        msg = 'It is not a Pallindrome.'
    }
}
console.log(`${input}: ${msg}`);
//9.Program to Replace Characters of a String
let string = "Mr. Red has a red car & a Red Bike";
let reg = new RegExp('Red','gi');
let newstring = string.replace(reg, 'Blue');
console.log(newstring);

//10.Program to Reverse a String using for loop
let strr = 'Atik Mazudar';
let newStrr = strr.length;
let revstr = '';
for (let i = newStrr-1; i>=0; i--) {
    revstr += (strr[i]);

}
console.log(`${strr} reverse is ${revstr}`)

//11.Program to Convert the First Letter of a String in to Uppercase
let string1 = 'atik';
let newstring1 = string1.charAt(0);
let remain = string1.slice(1);
let capital = newstring1.toUpperCase() + remain;
console.log(`${capital}`);

//12.Program to Check the Number of Occurrences of a Character in a String
let charCheck = 'Samiul Haque';
let letter = "a";
let ln = charCheck.length;
// console.log(ln);
// console.log(newCheck);
let count = 0;

for (let j = 0; j < ln; j++) {
     if (charCheck[j] == letter ) {
        count++;
     }
}
console.log(`${charCheck} => ${letter} => ${count}`);

//13.Program to Check whether a String Starts and Ends with Certain Characters

let string2 = "BanladesB";
let leen = string2.length;
for (let k = 0; k < leen; k++) {
    if (string2[0] === string2[leen-1] ) {
        console.log('Matched')
        break;
    }else {
        console.log('Not matched')
    }

}
//13.1
let string3 = 'Amar Shonar Bangla'
let testStart = string3.startsWith('A');
let testEnd = string3.endsWith('a');

if(testStart ==  true && testEnd == true) {
    console.log(`${string3} starts with A and ends with a`);
    } else if(testStart ==  true && testEnd == false) {
        console.log(`${string3} starts with A`);
     } else if(testStart ==  false && testEnd == true) {
        console.log(`${string3}  ends with a`);
     } else {
        onsole.log(`${string3} ends with a`);
     }
//14.Program to Check whether a String Contains a Substring
let string4 = 'My name is Atik mazumdar';
let subString = 'mazumdar';

let test1 =string4.includes(subString);
console.log(test1);

let test2 = string4.indexOf(subString);
console.log(test2);

//15.Flatten Array of Arrays
let arr = [[0,1],[2,3],[4,5]];
const flattenArray = arr.reduce(
    (previousvalue, currentValue) => previousvalue.concat(currentValue), []
);

console.log(flattenArray);

//16.Find Largest Prime Number in an Array

const arry = [4, 5, 7, 8, 11, 12, 17, 97, 47];

function isPrime(number) {
    if (number < 2) return false; 
    if (number === 2) return true; 
    if (number % 2 === 0) return false; 

    for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
        if (number % fact === 0) return false; 
    }
    return true; 
}

console.log(arry.sort((a, b) => a - b).findLast(isPrime));

//17. Create 3 function as Enroll, Progress, GetCertificate & use aynchronus callback pattern to call them.
let paymentSuccess = true;
let marks = 70;
function enroll (callback) {
    console.log("Course Enrollment is in Progress...");

    setTimeout(function() {
        if(paymentSuccess) {
            callback();
        } else {
            console.log("Payment Failed. Try Again please..");
        }
    },2000);
}

function progress (callback) {
    console.log("Getting ready courses...");

    setTimeout(function() {
        if(marks<=70) {
            callback();
        } else {
            console.log("You are not eligible for certificate");
        }
    },2000);
}
function getCertificate () {
    console.log("Preaparing Your Certificate...");

    setTimeout(function() { 
            console.log("Congratulations!! Click here to download.");
    },2000);
}

enroll(function() {
    progress(getCertificate);
});

//18. Find a specific string in a sentence & show how many times it is found
const sentence = "Bangladesh is development country. Bangladesh got independent in 1971 from Pakistan.";

const matches = sentence.match(/bangladesh/gi);
console.log(matches);
const occurances = matches ? matches.length : 0 ;
console.log(occurances);

let position = sentence.search(/bangladesh/i);
console.log(position);
position = position >= 0 ? position : "Not found";

//19.Perform a linearsearch() function in a array

function linearSearch(arr, val) {
    for(let i =0; i < arr.length;i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'Not found';
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));

//20.How to find largest string from an Array & show its index number.

function longestString (names) {
    let longestWord = '';
    for(let name of names) {
        if(name.length > longestWord.length) {
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}
console.log(['Atik Mazumdar', 'Samiul Haque', 'Rizowan Kabir Khan', 'Riana Azad']);

//21. From 1-100 which numbers are divisible by 3 ,5 & 3 & 5 both.

function fizzBuzz(number) {
    for(let i=1; i<=number; i++) {
        if (i%15 === 0) {
            console.log(`${i} is Fizzbuzz`);
        } else if(i%3 === 0) {
            console.log(`${i} is Fizz`); 
        } else if(i%5 === 0) {
            console.log(`${i} is Buzz`); 
        } else {
            console.log(i);
        }
    }

}
fizzBuzz(50);

//22.How to remove falsy value from an array

const mixedArray = [
    'Atik',
    undefined,
    "JavaScript",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "IUBAT_CSE",
    NaN
];

const trueArray = mixedArray.filter(function (element) {
    if(element) {
        return true;
    } else {
        return false;
    }
} );
//Use boolean function
//const trueArray = mixedArray.filter(Boolean);
console.log(trueArray);

//23.Write a JavaScript Program to get the current date.
//Expected Output: mm-dd-yyyy, dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date ()) => {

    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}-${months}-${years}`;
}
console.log(formatDate());

//24.Write a JavaScript program to create a new string
//adding "New" in front of a given string.
//If the given string begins with "new" already then
//return the original string

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Offers'));

//25.Write Program to create new String from a given string
//taking the first 3 characters and the last 3 chacracters of a string
//and adding them together. The string length must be 3 or more,
//if not, rturn the original string.

function createNewString(str) {
  
    if (str.length < 3) {
        return str;
    }
    
    const first = str.slice(0, 3);
    
    const last = str.slice(-3);
    
    let addthem = first + last;
    return addthem;
}

console.log(createNewString("JavaScript"));
console.log(createNewString("Hi")); 