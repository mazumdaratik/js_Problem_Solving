
//explicit binding
var printName = function (v1, v2, v3){
    //console.log(this.name);
    console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);

}

var mash = {
    name: "Mashrafe",
    age : 36,
};
var v1 = "Captain";
var v2 = "Bowler"
var v3 = "MP"
//printName.call(mash);
printName.call(mash, v1, v2, v3);
//.apply for array-- var v = [v1, v2, v3];
//.bind need to store function in a variable


//implicit binding

/* var Person = function (name , age){
    return {
        name: name,
        age : age,
        printName : function (){
            console.log(this.name);
        },
        father : {
            name: "Mr. Omok",
            printName : function (){
                console.log(this.name);
            }  
        }
    };
};

var tamim = Person("Tamim", 35);
tamim.printName();
tamim.father.printName() */

// var Person = function (name , age){
//     return {
//         name: name,
//         age : age,
//         printName : function (){
//             console.log(this.name);
//         },
//     };
// };

// var tamim = Person("Tamim", 35);
// tamim.printName();


/* var printPalyerNameFunction = function (obj){
    obj.printPalyerName = function () {
        console.log(this.name);
    }
}

var riyad = {
    name : "Riyadd",
    age : 34,

};
var tamim = {
    name : "Tamim",
    age : 34,

};
printPalyerNameFunction(riyad);
printPalyerNameFunction(tamim);

riyad.printPalyerName();
tamim.printPalyerName(); */




// var sakib = {
//     name : "Sakib",
//     age : 24,
//     printPalyerName : function (){
//         console.log(this.name);
//     }
// }

// sakib.printPalyerName();