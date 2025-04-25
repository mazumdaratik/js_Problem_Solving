class Person {
    userName: string;
    age: number;
    
    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    display():void{
        console.log(`username: ${this.userName} and age: ${this.age}`);
    }
}

// let person1 = new Person("Atik", 25);
// console.log(person1);
// let person2 = person1.userName;
// console.log(person2);

class Details extends Person{
    personId: number;
    constructor(userName: string, age: number, personId: number){
        super(userName, age)
        this.userName = userName;
        this.age = age;
        this.personId = personId;
    }
}

let person1 = new Details('Atik', 24, 101)
console.log(person1);
person1.personId
console.log(person1);