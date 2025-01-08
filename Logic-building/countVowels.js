function countVowelsandConsonants(str){
let countVowels = 0;
let countConsonants = 0;
let vowels = 'aeiou';
let consonants = 'bcdfghjklmnpqrstvwxyz';

for (let i = 0; i <= str.length; i++){
    if(vowels.includes(str[i])){
        countVowels ++;
    } else if(consonants.includes(str[i])){
        countConsonants ++;
    }
}
return {countVowels, countConsonants};
    
}

console.log(countVowelsandConsonants('Bangladesh'));