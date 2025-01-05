function smallest(a, b, c){
    if (a < b && a < c ){
        return `${a} is Smallest`;
    } else if(b < a && b < c) {
        return `${b} is Smallest`;
    } else if(c < a && c < b) {
        return `${c} is Smallest`;
    } else{
        if (a === b && a === c && b === c) {
            return`Do not Provide Same Value`;
        }
    }
}
console.log(smallest(2,2,2));

function smallestOfThree(a,b,c){
    let smallestNumber = a;
    if (b < smallestNumber){
        smallestNumber = b;
    }
    if (c < smallestNumber) {
        smallestNumber = c;
    }
    return smallestNumber;
}
console.log(smallestOfThree(2,3,5));