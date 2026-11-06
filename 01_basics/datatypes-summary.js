//Primitive:
// String 
// Number
// BigInt
// Boolean
// null
// Symbol
// undefined



// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId); //false bcz every symbol has unique value

// const a=1;
// const b=1;
// console.log(a===b);//true bcz both are of same type i.e int and have same value

//Reference Non-Primitive
// Objects
// Array
// Functions

// let myObj={
//     name:"Pratiksha",
//     age:21,
// }  //object

// const heros=["shaktiman","bheem","baalveer"];//Array

// const myFunction=function(){
//     console.log("Hello world")
// }

// console.log(typeof myObj)
// console.log(typeof heros)
// console.log(heros)   //datatypes of non premitives is always a object
// console.log(typeof anotherId)

// -------------------------------*----------------------------

//Stack(Primitive)
// Heap(Non-primitive)

// let userone={
//     email: "google.com",
//     upi: "gle123"
// }

// let usertwo=userone
// usertwo.email="pratiksha.com"
// console.log(userone);
// console.log(userone.email);
// console.log(usertwo.email);


// const name="pratiksha"
// const repoCount=50;
// console.log(`hello my name is ${name}and my repo count is ${repoCount}`);


const gamename=new String("Pratiksha")

console.log(gamename[0])
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename[2])
console.log(gamename.indexOf('s'))
console.log(gamename.substring(0,4))
console.log(gamename.slice(-8,-4))