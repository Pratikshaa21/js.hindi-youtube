//Primitive
// String 
// Number
// BigInt
// Boolean
// null
// Symbol
// undefined



const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId); //false bcz every symbol has unique value

const a=1;
const b=1;
console.log(a===b);//true bcz both are of same type i.e int and have same value

//Reference Non-Primitive
// Objects
// Array
// Functions

let myObj={
    name:"Pratiksha",
    age:21,
}  //object

const heros=["shaktiman","bheem","baalveer"];//Array

const myFunction=function(){
    console.log("Hello world")
}

console.log(typeof myObj)
console.log(typeof heros)
console.log(heros)   //datatypes of non premitives is always a object
console.log(typeof anotherId)