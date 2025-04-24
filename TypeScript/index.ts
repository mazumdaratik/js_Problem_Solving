function addNumbers(num1: number, num2: number){
    console.log(num1 + num2);
}
addNumbers(20, 30);

let userId: number;
let firstName: string;
let lastName: string;
let isActivated: boolean;

userId = 20303037
firstName = "atik"
lastName = "mazumdar"
isActivated = true;
let fullName: string = firstName.concat(lastName)
console.log(firstName + " " + lastName);
console.log(fullName);
function display(age: number): void {
    console.log(age)
}
display(24);

let studentsName: (string | number) [];
studentsName = ['sami', 'rahin', 'mostafiz', 24, 30];
console.log(studentsName.sort());

enum Type1{
    readData,
    saveData,
    deleteData,
}
console.log(Type1);

enum Type2{
    readData = "data is reading",
    saveData = "saving data",
    id = 101,
}
console.log(Type2.readData);
console.log(Type2.id);

let userName: any;
userName = "atik"
userName = true
userName = 123456

let users: object[];
users = [];

let user1: {userName: string, userId: number};
user1 = {userName: "Atik", userId: 101};
users.push(user1);

let user2: {userName: string, userId: number};
user2 = {userName: "samiul", userId: 102};
users.push(user2);
console.log(users);

for (const key in users) {
    console.log(users[key]);
}