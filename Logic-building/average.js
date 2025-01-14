function calcAvg (array){
    let sum = 0;
    let len = array.length;
for (let i = 0; i < len; i++){

    sum += array[i];
}
let res = sum / array.length;
return res;

}
console.log('The average is:', calcAvg ([1, 2, 3, 4]));