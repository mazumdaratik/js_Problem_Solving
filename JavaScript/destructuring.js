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