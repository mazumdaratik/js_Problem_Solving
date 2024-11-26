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
