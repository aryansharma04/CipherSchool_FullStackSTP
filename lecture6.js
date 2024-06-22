var x = 15;
{
    let x = 5;
    const y = 10;
    // y = 20;
    console.log(x);
    
}

console.log(x);

// var a = function(x,y){
//     return x+y;
// }



const b = (x,y) =>{    
    return x+y;  
}

console.log(b(5,6));

const q1 = ["Jan","Feb","March"];
const q2 = ["April","May","June"];
const q3 = ["July","Aug","Sept"];
const q4 = ["Oct","Nov","Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const myNumber = [25,12,50,77,-1];
let maxNumber = Math.max(...myNumber);
console.log(maxNumber);

let sum = 0;
for(let num of myNumber){
    sum+=num;
}

console.log(sum);

const name = "CipherSchool";
let text = "";
for(let ch of name){
    text+=ch+" ";

}
console.log(text);


const fruits = new Map([
    ["apples",100],
    ["oranges",200],
    ["banana",300],
]);

console.log(fruits);
console.log(fruits.get("oranges"));



const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters)

class Car{
    constructor(name,mfy){
        this.name = name;
        this.mfy = mfy;
    }
}

const MyCar1 = new Car("Audi",2023);
const MyCar2 = new Car("BMW",2024);
console.log(MyCar1,MyCar2);

const MyFunction = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("This is Inside Promise");
            resolve();
        }, 2000);

    } ); 
    
};

MyFunction()
    .then(() => {
        console.log("Resolved");
    })
    .catch(() => {
        console.error("Rejected");
    }
)


const person = {
    firstName :"John",
    lastName : "Doe",
    age : 30,
    eyecolor:"blue",
};

let id = Symbol("id");
person[id] = 140111;
console.log(person);

const addNumber = (a,b=10) =>{
    return a+b;
}
console.log(addNumber(10));


const newnum = (...args) =>{
    let sum = 0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
};

console.log(newnum(10,20,30,40,50));