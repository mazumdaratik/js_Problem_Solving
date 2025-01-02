// const salad = ['tomato', 'carrot', 'corn'];

// const tomato = salad[0];
// const carrot = salad[1];
// const corn = salad[2];

// const [tomato, carrot, corn, name] = ['tomato', 'carrot', 'corn','atik'];

// console.log(tomato, carrot, corn, name);

//iput default value in array

//const [tomato, carrot ='carrot'] = ['tomato']
//console.log(tomato);
//console.log(carrot);

//skip value in aray using destructring

// const [tomato, , corn] = ['tomato', 'carrot', 'corn']
// console.log(tomato);
// console.log(corn);

//Nested Array-destructuring

const fruits = ['a','b',['c','d','e']];
const [f,g,[h,i,j]] = fruits;
//skip
// const [,g,[h,,j]] = fruits;

console.log(j); //e

//rest & spread operator

const [tomato, carrot, ...rest] = ['tomato', 'carrot', 'corn','atik'];
console.log(rest);

const salad = ['tomato', 'carrot', 'corn','atik'];
console.log(salad);
const newSalad =[...salad]; //clone array
console.log(newSalad);

//Swapping in array using destructuring..

// let sad = 'a';
// let happy = 'b';

//  [happy, sad]= [sad, happy];
//  console.log(sad, happy);

//merging array using spread

const batter = ['tamim', 'liton', 'tawhid', 'mushfiq', 'riyad', 'kayes'];
const bowler = ['taskin', 'mahedi', 'saif', 'mash'];

const team = [...batter, ...bowler];
console.log(team);

//delte all array element by using array length = 0;