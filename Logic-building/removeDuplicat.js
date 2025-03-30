function removeDuplicate(arr){
    return [... new Set(arr)];
}

const numbers = [1, 2, 3, 2, 4, 5, 5];
console.log(removeDuplicate(numbers));