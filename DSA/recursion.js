/* function goToLunch(person){
    if(person === 5) return true;
    
    console.log(person);
    return goToLunch(person + 1);
}
console.log(goToLunch(1)); */

/* function multiply(arr){
    console.log(arr);
    let len = arr.length;
    let rezisedArr = arr.slice(0, len - 1);
    console.log(rezisedArr);
   // console.log(len)
    if(len <= 0){
        return 1;
    } else {
        return arr[len - 1] * multiply(rezisedArr);
               // 4 * [1, 2, 3]    
               // 3 * [1, 2]
               // 2 * [1]
               // 1 
    }
}
console.log(multiply([1,2,3,4])); */
//5 4 3 2 1
/* function factorial(num){
    
    if(num === 0){
        return 1;
    } else {
        let res = factorial(num - 1);
        console.log(res);
        let val = num * res;
        return val;
    }
}
console.log(factorial(5)); */

/* function rangOfNumbers(start, end){
console.log(start, end);
let arr =[];
arr.push(start,end );
return arr;
}
console.log(rangOfNumbers(0, 5)); */

function fib(n){
    let arr = [0, 1];
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2] + arr[i -1])
    }
    return arr;
}
console.log(fib(5));

function recursiveFibonacci(n){
    if(n <= 1) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(5))

function isPalindromicInteger(num) {
    function reverse(n, rev = 0) {
        if (n === 0) return rev;
        return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
    }

    if (num < 0) return false; 

    return num === reverse(num);
}


console.log(isPalindromicInteger(12321));  
console.log(isPalindromicInteger(123));    


