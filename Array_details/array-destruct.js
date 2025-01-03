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

// const fruits = ['a','b',['c','d','e']];
// const [f,g,[h,i,j]] = fruits;
//skip
// const [,g,[h,,j]] = fruits;

// console.log(j); //e

//rest & spread operator

// const [tomato, carrot, ...rest] = ['tomato', 'carrot', 'corn','atik'];
// console.log(rest);

// const salad = ['tomato', 'carrot', 'corn','atik'];
// console.log(salad);
// const newSalad =[...salad]; //clone array
// console.log(newSalad);

//Swapping in array using destructuring..

// let sad = 'a';
// let happy = 'b';

//  [happy, sad]= [sad, happy];
//  console.log(sad, happy);

//merging array using spread

// const batter = ['tamim', 'liton', 'tawhid', 'mushfiq', 'riyad', 'kayes'];
// const bowler = ['taskin', 'mahedi', 'saif', 'mash'];

// const team = [...batter, ...bowler];
// console.log(team);

//delte all array element by using array length = 0;

//Some of Exercise
//T-001: Create an array of 5 elements using the Array Constructor
const player = new Array('messi', 'neymar', 'salah', 'ronaldo', 'yamal');
//console.log(player);

//T-002: Create an array of 3 empty slots.
const playerNull = new Array(3);
//console.log(playerNull);

//T-003: Create an array of 6 elements using the Array literals and 
// access the fourth element in the array using its length property.
const fruits = ['apple', 'pine-apple', 'banana', 'avacado', 'mango', 'orange'];
let fourthElement = fruits[fruits.length - (fruits.length - 3)];
//console.log(fourthElement);

//T-004: Use the for loop on the above array to print elements in the odd index.

for (let i = 1; i < fruits.length; i += 2) {
    //console.log(`Fruits at odd index ${i}:`, fruits[i]);
  }


  // T-005: Add one element at the front and the end of an array.

  fruits.unshift('malta');
  fruits.push('last-fruit');
  //console.log(fruits);


  // T-006: Remove an element from the front and the end of an array.

  fruits.shift('malta');
  fruits.pop('last-fruit');
 // console.log(fruits);


  //T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

  let foods = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Tacos",
    "Ice Cream",
    "Salad",
    "Steak",
    "Sandwich",
    "Fries"
  ];
  
   [, , , , , sixthfood] = foods;
  //console.log("The 6th food is:", sixthfood);

  //T-008: Take out the last 8 food items from the above array using the Array destructuring.

  [, , ...last8] = foods;

  console.log(last8);

  //T-009: Clone an Array(Shallow cloning)
  let newArr = [...foods];
 // console.log(newArr);

  // T-010: Empty an array using its length property

newArr.length = 0;
//console.log(newArr);

//T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = numbers.indexOf(5);
if(index !== -1){
  numbers.length = 6;
}
console.log(numbers);
//for-loop

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] === 5 ){
    numbers.length = 6;
  }
}
//console.log(numbers);

//T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
let cars = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Camaro",
  "Tesla Model S",
  "BMW 3 Series",
  "Audi A4",
  "Mercedes-Benz C-Class",
  "Hyundai Elantra",
  "Nissan Altima"
];

cars.splice(3, 3, 'Masherati' );
console.log(cars);
cars.splice(0, cars.length);
console.log(cars);

//What happens when you concatenate two empty arrays?
let arr1 = [];
let arr2 = [];
let result1 = arr1.concat(arr2);
console.log(result1); // []

//T-015: How can you check if a value is partially matching with any of the elements of an Array?

const arr = ['apple', 'banana', 'orange'];
const searchTerm = 'ban';

const check = arr.some(item => item.includes(searchTerm));
console.log(check);

//T-016: What is the difference between the slice() and splice() methods?

// slice(startIndex, endIndex) - endIndex is optional
let fruit = ['apple', 'banana', 'orange', 'mango'];
let sliced = fruit.slice(1, 3);
console.log(sliced);     // ['banana', 'orange']
console.log(fruit);     // ['apple', 'banana', 'orange', 'mango']

// splice(startIndex, deleteCount, item1, item2, ...) - deleteCount and items are optional
let fruitz = ['apple', 'banana', 'orange', 'mango'];
let removed = fruitz.splice(1, 2, 'kiwi', 'grape');
console.log(removed);    // ['banana', 'orange']
console.log(fruitz);     // ['apple', 'kiwi', 'grape', 'mango']

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. 
// You must be doing this in an immutable way such that the source array never gets modified.
// Create original array with alphanumeric strings
const sourceArray = ['A1', 'Z9', 'B3', 'H7', 'K2', 'D5'];

// Sort in ascending order (creating new array)
const ascendingSort = [...sourceArray].sort((a, b) => a.localeCompare(b));

// Sort in descending order (creating new array)
const descendingSort = [...sourceArray].sort((a, b) => b.localeCompare(a));

// Verify results and source array integrity
console.log('Original:', sourceArray);    // ['A1', 'Z9', 'B3', 'H7', 'K2', 'D5']
console.log('Ascending:', ascendingSort); // ['A1', 'B3', 'D5', 'H7', 'K2', 'Z9']
console.log('Descending:', descendingSort); // ['Z9', 'K2', 'H7', 'D5', 'B3', 'A1']

const ascendingSort3 = sourceArray.slice().sort((a, b) => a.localeCompare(b));
const descendingSort3 = sourceArray.slice().sort((a, b) => b.localeCompare(a));

//T-019: Give a practical usages of the .fill() method

// Create test array with same object for testing
const testUsers = new Array(5).fill({
  isActive: true,
  role: 'user'
});

// Initialize an array of 5 todos with 'pending' status
const todoStatus = new Array(5).fill('pending');
console.log(todoStatus); // ['pending', 'pending', 'pending', 'pending', 'pending']

// Create an initial score array for a game
const playerScores = new Array(10).fill(0);
console.log(playerScores); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//node array-destruct