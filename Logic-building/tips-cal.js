
function calculateTips(bill, percentage){
    let result = [];

    for(let i = 0; i < percentage.length; i++){
        let tipAmount = bill * (percentage[i]/100);
        //tipAmount = tipAmount.toFixed(2);
        //result.push(tipAmount);

        const formatter = Intl.NumberFormat("en-BN",{
            style: 'currency',
            currency: "BDT"
        });
        result.push(formatter.format(tipAmount));
    }
    return result;
}
console.log(calculateTips(1000, [5, 10, 15]));
console.log(calculateTips(996, [5, 10, 15]));