function goToLunch(person){
    if(person === 5) return true;
    
    console.log(person);
    return goToLunch(person + 1);
}
console.log(goToLunch(1));