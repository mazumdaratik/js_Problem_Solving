const parenthesis = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
}

//console.log(parenthesis['[']);
//console.log(parenthesis['{']);

function isBalanced(str){
    const openningArray = [];
for(let char of str){
    if(parenthesis[char]){
        openningArray.push(char);
    }
    else if(char === ')' || char === '}' || char === ']'){
        const lastOpenningParenthesis = openningArray.pop();
       if(parenthesis[lastOpenningParenthesis] !== char){
        return false;
       }
    }
}
if(openningArray.length === 0){
    return true;
}
return false;
}
console.log(isBalanced('[{()}]'));
console.log(isBalanced('{[]'));