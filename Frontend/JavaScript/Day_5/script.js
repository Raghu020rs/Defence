// lets learn object
const user = {
  name: "John",
  age: 30,
  amount: 1000,
  "home address": "123",
  greeting: function(){
    console.log(`Hello  ${this.name}` );
    return "world";
  },
  user2 : {
      name: "mohan",
      age: 92,
    }
}
 
const user2 = {...user};
user2.name = "raghu";
console.log(user);
console.log(user2);

// console.log(user.user2.name);





// for(let keys of Object.keys(user)){
//   console.log(keys, user[keys]);
// }

// for(let keys of Object.entries(user)){
//   console.log(keys);
// }

// const user1 = user.greeting();
// console.log(user1);


// const user2 = user;
// user2.name = "ram";
// //Object destructuring 

// const  { name: Username, age: Userage} = user;
// console.log(Username, Userage);

// const arr = [1,2,3,4,5];
// const [first, second] = arr;
// console.log(first, second);




// console.log(Object.values(user));
// console.log(Object.values(user2));
// console.log(Object.entries(user));

// for(let num in user){
//   console.log(num, user[num]);
// }



// console.log(user);

// console.log(Object.keys(user));

// console.log(user["home address"]);



// console.log(user["name"]);


// console.log( typeof user);
// console.log(user.name);

// user.adhar = 123;
// user.amount = 2000;
// console.log(user);


// //delete
// delete user.adhar;
// console.log(user);
 