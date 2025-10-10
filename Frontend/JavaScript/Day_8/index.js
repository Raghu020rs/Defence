//Scope and closure, HDF 

let a = 10;
let b = 20;
if(true){
  let a = 100; //block scope
}

console.log(a); //10
function double(num){
  function execute(){
    console.log("Hello");
  }
}

const n = double();
n();

