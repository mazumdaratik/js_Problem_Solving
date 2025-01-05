function Person(name, age){ //Capital cz constructor function
    //let person = Object.create(Person.prototype);

    this.name = name;
    this.age = age;

    //return person;
}
// function PersonNew(name, age){ //Capital cz constructor function
//     //let person = Object.create(PersonNew.prototype);

//     this.name = name;
//     this.age = age;

//     //return person;
// }

Person.prototype = {
    eat(){
        console.log('Person is eating');
    },

    sleep(){
        console.log('Person is Sleeping');
    },
    play(){
        console.log('Person is Playing');
    },
};

const tamim = new Person('Tamim', 35);
tamim.play();
const mushfiq = new Person('Musfiq', 36);
mushfiq.play();
mushfiq.sleep();

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