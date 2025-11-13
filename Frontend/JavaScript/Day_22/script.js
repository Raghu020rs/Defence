// Important for interview 

'use strict'
// var a = 10;
// var b = 20;
// console.log(a,b);

function greet(name){
  console.log("Hello " + this);
}

const user = {
  name: "Varun",
  age: 22
}

const user2 = {
  name:"AniKet",
  age: 23
}

greet.call(user);