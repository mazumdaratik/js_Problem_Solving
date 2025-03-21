let customers = [
    {
        'id': 001,
        'f_name': 'Atik',
        'l_name': 'Mazumdar',
        'gender': 'M',
        'age' : 25,
        'married': true,
        'expense' : 500,
        'purchased' : ['Shampoo', 'Toys', 'Book']
    },
    {
        'id': 002,
        'f_name': 'Samiul',
        'l_name': 'Haque',
        'gender': 'M',
        'married': true,
        'age' : 64,
        'expense' : 100,
        'purchased' : ['stick', 'Book']
    },
    {
        'id': 003,
        'f_name': 'Riana',
        'l_name': 'Azad',
        'gender': 'F',
        'married' : true,
        'age' : 22,
        'expense' : 1500,
        'purchased' : ['Lipstick', 'Nail Polish', 'Bag']
    },
    {
        'id': 004,
        'f_name': 'Sakibul',
        'l_name': 'Huda',
        'gender': 'M',
        'age' : 82,
        'married' : true,
        'expense' : 90,
        'purchased' : ['']
    },
    {
        'id': 005,
        'f_name': 'Arowa',
        'l_name': 'Mazumdar',
        'gender': 'F',
        'married': false,
        'age' : 7,
        'expense' : 300,
        'purchased' : ['Toys']
    },
    {
        'id': 006,
        'f_name': 'Shariul',
        'l_name': 'Islam',
        'gender': 'M',
        'married': true,
        'age' : 18,
        'expense' : 200,
        'purchased' : ['Toys']
    },

];
//console.log(customers);
console.log('-----------------------');
//Filtering out non-senior citizen
const seniorCustomer = customers.filter( (customer) => {
    return customer.age >= 60;
    
});
//console.log(seniorCustomer);

const nonSeniorCustomer = customers.filter( (customer) => {
    return customer.age < 30;
    
});

//console.log(nonSeniorCustomer);

const fullName = customers.map( (fullname)=> {

    let title = '';

    if(fullname.gender == 'M'){
        title = 'Mr.'
    } else if (fullname.gender == 'F' && fullname.married){
        title = 'Mrs.';
    }

    fullname['full_name'] = `${title} ${fullname.f_name} ${fullname.l_name}`;
      
    return fullname; 
})
//console.log(fullName);
let count = 0;
const total = customers.reduce( (accumulator, customer, index, array)=>{
    if(customer?.purchased?.includes('Book')){
        accumulator += customer.age;
        count += 1;
    }
    return accumulator;
}, 0)

const avgAgeOfCustBookPurchased = Math.floor( total / count);

//console.log(avgAgeOfCustBookPurchased);

const getInfo = customers.some( (customer) => {
    return customer.age < 20 
});

//console.log(getInfo);

const getCustomer = customers.find( (customer) => { //for index can apply findIndex() , findLastIndex()
    return customer.age < 20 
});

//console.log(getCustomer);

const ZeroShopping = customers.every( (customer) => {
    return customer?.purchased?.length === 0;
})

//console.log(ZeroShopping);
customers.forEach( (customer) => {
    console.log(customer);
});

const numbers = [10, 20, 30, 40, 50];
numbers.entries()
console.log(numbers);
for (const [key, value] of numbers.entries()){
    console.log(key, value);
}

for (const value of numbers.values()){
    console.log(value);
}

// let odds = [1, 3, 5, 7, 9];
// let oddDoubled = odds.map(number => [number*2]);
// console.log(oddDoubled);

let odds = [1, 3, 5, 7, 9];
let oddDoubled = odds.flatMap(number => [number*2]);
console.log(oddDoubled);

// reduceRight
// let even = [100, 40, 15];
// even.reduce( (sub, current) => {
//     return sub - current;
// }) //45 

let even = [100, 40, 15];
even.reduceRight( (sub, current) => {
    return sub - current;
}); //-125

const totalExpense = 
        customers
            .filter( customer => customer.married)
            .map( married => married.expense)
            .reduce( (accuum, expense) => accuum + expense);

    console.log(totalExpense);        

