function reverseString(str){
    if(typeof str !== 'string') {
        throw new Error("Please, Enter a valid string.");
    }
  let result = "";
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;
}
console.log(reverseString('atik Mazumdar'));

function reString(str){
    const doSplit = str.split('');
    const reversed = doSplit.reverse();
    const final = reversed.join('');

  return final;
}
console.log(reString('atik Mazumdar'));