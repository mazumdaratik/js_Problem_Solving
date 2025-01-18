function isPerfect(num){
//console.log(num);
let result = 0;
for(let i = 1; i < num; i++){
    //console.log(i);
    
    if(num % i === 0){
        //console.log(i);
    result += i;  
    
    }
    
}
return result === num;
}
console.log(isPerfect(6));