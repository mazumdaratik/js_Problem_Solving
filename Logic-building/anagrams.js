let a = 'listen';
let b = 'silent';

const sortedStr1 = a.split('').sort().join('');
const sortedStr2 = b.split('').sort().join('');

if(sortedStr1 == sortedStr2){
    console.log('Given Strings are Anagrams string.')
};
