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
let num2 = prompt("Enter 1st digit:");
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
    }
    