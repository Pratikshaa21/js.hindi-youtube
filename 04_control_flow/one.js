const userEmail=" "

if(userEmail){
  console.log("Got user email");
}else{
  console.log("Don't have user email")
}

//false values are  0,-0,BigInt 0n,"",null,undefined,NAN

//truthy values are- "0","false",[],{}," ",function(){},new Date(),-1,1n,Infinity,-Infinity

const TeaPrice=100;
TeaPrice<=80?console.log("Less than 80"):console.log("More than 80");


const Teaprice=100;
if(Teaprice<80){
  console.log("Price is less than 80");
} else {
  console.log("Price is not less than 80");
}