// let a = 'listen';
// let b = 'silent';

// const sortedStr1 = a.split('').sort().join('');
// const sortedStr2 = b.split('').sort().join('');

// if(sortedStr1 == sortedStr2){
//     console.log('Given Strings are Anagrams string.')
// };

function areAnagrams(str1, str2){
    if(str1.lenght !== str2.lenght){
        return false;
    }
    const charSet1 = {};
    for(let char of str1){
        if(!charSet1[char]){
            charSet1[char] = 0;
        }
        
        charSet1[char] = charSet1[char] + 1;
    }

    const charSet2 = {};
    for(let char of str2){
        if(!charSet2[char]){
            charSet2[char] = 0;
        }

        charSet2[char] = charSet2[char] + 1;
//      charSet2[char] = (charSet2[char] || 0) + 1;        
    }
    for(let key in charSet1){
 //       console.log(key);
        if(charSet1[key] !== charSet2[key]){
            return false;
        }
    }
    return true;
}

console.log(areAnagrams('elbow', 'below'));
console.log(areAnagrams('cat', 'act'));
console.log(areAnagrams('cat', 'batt'));