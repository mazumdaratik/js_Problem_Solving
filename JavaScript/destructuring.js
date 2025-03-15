//object
const player = {
    jersyNo: 45,
    name: "Tamim",
    age: 45,
    Type: {
        Batting: "left",
        Bowling:"No"
    }
}

const {Type:{Batting, Bowling}, } = player;
console.log(Batting, Bowling);

//array
var odds = [1, 3, 5, [7, 9, 11], 13];
var [, , , [, nine, eleven], ,] = odds;
console.log(nine, eleven);

var a = 1;
var b = 2;

[b, a] = [a, b];
console.log(a, b);