function bankAccount(initialBalance){
    var balance = initialBalance;
    return function(){
        return balance;
    };
};

var account = bankAccount(100000);
console.dir(account);

(function() {
    var num1 = 2;
    var num2 = 3;

    var sum = function(){
        return num1 + num2;
    }
    console.dir(sum);
})();

function stopWatch(){
    var startTime = Date.now();

    function getDelay(){
        console.log(Date.now() - startTime);
    }
    return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 100000; i++){
    var a = Math.random() * 10000;
}

console.dir(timer);

function apiFunction(url){
    fetch(url)
    .then((res) => {
        console.log(res);
    })
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1');


for(let i =0; i < 3; i++){
    const myFunc =() => {
        console.log(i);
    }
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 300);
};

console.log(i);