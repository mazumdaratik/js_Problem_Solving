 let a = 'listen';
 let b = 'silent';
 const sortedStr1 = a.split('').sort().join('');
 console.log(sortedStr1);
 const sortedStr2 = b.split('').sort().join('');
 console.log(sortedStr2);

 if(sortedStr1 === sortedStr2){
     console.log('Given Strings are Anagrams string.')
 };