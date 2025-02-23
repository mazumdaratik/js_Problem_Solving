function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

const numbers = [4, -2, 7, -5, 0, 10, -8, 3];
console.log(filterNegativeNumbers(numbers));  

