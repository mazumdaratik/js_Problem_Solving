function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(20, 30);
var userId;
var firstName;
var lastName;
var isActivated;
userId = 20303037;
firstName = "atik";
lastName = "mazumdar";
isActivated = true;
var fullName = firstName.concat(lastName);
console.log(firstName + " " + lastName);
console.log(fullName);
function display(age) {
    console.log(age);
}
display(24);
var studentsName;
studentsName = ['sami', 'rahin', 'mostafiz', 24, 30];
console.log(studentsName.sort());
var Type1;
(function (Type1) {
    Type1[Type1["readData"] = 0] = "readData";
    Type1[Type1["saveData"] = 1] = "saveData";
    Type1[Type1["deleteData"] = 2] = "deleteData";
})(Type1 || (Type1 = {}));
console.log(Type1);
var Type2;
(function (Type2) {
    Type2["readData"] = "data is reading";
    Type2["saveData"] = "saving data";
    Type2[Type2["id"] = 101] = "id";
})(Type2 || (Type2 = {}));
console.log(Type2.readData);
console.log(Type2.id);
var userName;
userName = "atik";
userName = true;
userName = 123456;
var users;
users = [];
var user1;
user1 = { userName: "Atik", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "samiul", userId: 102 };
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]);
}
