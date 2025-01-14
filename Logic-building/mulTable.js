function multificationTable(tableOf, upTo){
    
    for(let i = 1; i <= upTo; i++){
        console.log(`${tableOf} * ${i} = ${i*tableOf}`);
    }
}
multificationTable(5, 10);

function mulTable(tableOf, upTo){
    for(let i = tableOf; i <= tableOf*upTo; i= i+tableOf){
        console.log(`${tableOf} * ${i} = ${i*tableOf}`);
    }
    
}
mulTable(4, 10);

function mulTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

mulTable(5); 
