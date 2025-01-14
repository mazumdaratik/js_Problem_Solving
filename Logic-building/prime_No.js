function isPrimeNo(inputNo){
    let result = true;
    for ( let i = 2; i < inputNo; i++ ){
        console.log(inputNo, ' % ', i, inputNo % i )
        if(inputNo % i === 0){
            result = false;
            break;
        }
    }
    return result;
}
console.log(isPrimeNo(4));