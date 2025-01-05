// function Person(name, age){ //Capital cz constructor function
//     //let person = Object.create(Person.prototype);

//     this.name = name;
//     this.age = age;

//     return person;
// }
// function PersonNew(name, age){ //Capital cz constructor function
//     //let person = Object.create(PersonNew.prototype);

//     this.name = name;
//     this.age = age;

//     //return person;
// }

// Person.prototype = {
//     eat(){
//         console.log('Person is eating');
//     },

//     sleep(){
//         console.log('Person is Sleeping');
//     },
//     play(){
//         console.log('Person is Playing');
//     },
// };

// const tamim = new Person('Tamim', 35);
// tamim.play();
// const mushfiq = new Person('Musfiq', 36);
// mushfiq.play();
// mushfiq.sleep();

// const tamim = new PersonNew('Tamim', 35);
// tamim.play();
// const mushfiq = new PersonNew('Musfiq', 36);
// mushfiq.play();
// mushfiq.sleep();

//Coverted into class..

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

     eat(){
        console.log('Person is eating');
    }

     sleep(){
        console.log('Person is Sleeping');
    }
     play(){
        console.log('Person is Playing');
    } 
}

// const tamim = new Person('Tamim', 35);
// tamim.play();
// const mushfiq = new Person('Musfiq', 36);
// mushfiq.play();
// mushfiq.sleep();

//Forming Inheritance using prototype

// function Player(name, age){ //parent class
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name, age, type, country){ //sub-class
//     Player.call(this);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }
// Player.prototype = {
//     eat: function() {
//         console.log(`${this.name} is eating`);
//     }
// }

// Cricketer.prototype = Object.create(Player.prototype);
// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.play = function(){
//     console.log(`${this.name} is playing`);
// }

// let mash = new Cricketer('Mashrafe', 36, 'Bowler', 'Bangladeshi');
// console.log(mash);
// console.log(mash.play());

//Converted into inheritance

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Player{
    
    constructor(name, age, type, country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play(){
        console.log(`${this.name} is Playing`);
    }
}

let mash = new Cricketer('Mashrafe', 36, 'Bowler', 'Bangladeshi');
mash.play();
let riyad = new Cricketer('Mashrafe', 36, 'Bowler', 'Bangladeshi');
riyad.eat();
