const MyArr=[0,1,2,3,4,5]
// console.log(MyArr[0])

// MyArr.push(3)//push add the element at end
// MyArr.push(7)
// // MyArr.pop()
// console.log(MyArr);

// MyArr.unshift(9)//add this value at beginning
// MyArr.shift()//remove  one starting value value
// console.log(MyArr)

// console.log(MyArr.includes(9));
// console.log(MyArr.indexOf(9));
// console.log(typeof MyArr);

// const newArr=MyArr.join()
// console.log(MyArr);
// console.log(newArr);

//slice,spice

console.log("A",MyArr);
const myn1=MyArr.slice(1,3)//print values at 1 and 2 position and not 3rd position
console.log(myn1);
console.log("B",MyArr)

const myn2=MyArr.splice(1,3)
console.log(myn2);
console.log("B",MyArr)

// console.log(myn2);
// console.log("B",MyArr)

