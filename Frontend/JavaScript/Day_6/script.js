//function 

function greeting(){
  console.log("Hello world");
}

greeting();

console.log(greeting());



//rest operator
function addnum(...num){
  //ye arguments ka array bana deta hai
  let sum = 0;
  for(let n of num){
    sum += n;
  }
  console.log(sum);
}

const arr = () => {
  return 2;
}  
console.log(arr());