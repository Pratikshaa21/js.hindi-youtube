// let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// let CreatemyDate=new Date(2005,3,21)// year,month,date.......(0 as Jan)
// let CreatemyyDate=new Date(2005,3,21,6,10) //year ,minth,date,tine,min
// console.log(CreatemyDate.toDateString());
// console.log(CreatemyyDate.toLocaleString());

let myCreatedDate=new Date(2024,4,21)
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));