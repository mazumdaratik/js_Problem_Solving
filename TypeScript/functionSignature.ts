let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
    console.log("TypeScript is very Easy to learn ");
}

userInfo2 = (name: string) => {
    console.log(`${name} is noob coder`);
};

userInfo3 = (name: string, age: number) => {
    return `${name} is noob coder and ${age} years old`;
};

userInfo1();
userInfo2('Atik');
console.log(userInfo3('Atik', 25));