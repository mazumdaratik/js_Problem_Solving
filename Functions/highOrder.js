/* function hello(){
    console.log('Hello this is a function')
}

hello();

hello.language = 'javascript';
console.log(hello.language); */

function hello(){
    return function () {
        console.log('Hello World');
    };
}

hello()();

var numbers = [ 1, 2, 3, 4];

var results = [];

for(let i = 0; i < numbers.length; i++) {
    results.push(numbers[i]*2);
}
console.log(results);