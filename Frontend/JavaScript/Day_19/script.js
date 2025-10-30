// //Promises in js 
// console.log("Hello World");

// //const p1 = fetch("https://api.github.com/users");

// //Fullfilled ,Reject
// // const p2 = p1.then((response) => {
// //   return response.json();
// // });



// // p2.then((response) => {
// //   console.log(response);
// // })



// const p1 = new Promise((resolve, reject) => {
//    reject({
//     name: "Rohit",
//     age: 30
//    });
// })

// p1.then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log("Error is ", error);
// })

// fetch("https://api.github.com/users")
// .then((response) => {
//   if(!response.ok){
//     throw new Error("Data is not preset on server ")
//   }
//   return response.json();
// })
// .then((data)=> {
//   // console.log(data);
//   const parent = document.getElementById("first");
//   for(let i=0;i<data.length;i++){
//   const img = document.createElement('img');
//   img.src = data[i].avatar_url;
//   img.style.height = "40px";

//   parent.append(img);
//   }
// })

// .catch((error) => {
//   const parent =  document.getElementById("first");
//   parent.textContent = error.message;
// })




// console.log("Hello World End");

// const j1 = {
//   name: "John",
//   age: 30,
//   address: "dalian",
//   c: undefined
// };


// const a = JSON.stringify(j1);
// console.log(a);

// const jsonFormat = `{
//   "name": "John",
//   "age": 30,
//   "address": "dalian"}`;

//   //JavaSript Object
//   const obj = JSON.parse(jsonFormat);
//   console.log(obj);



//Using promises in Zomato Food Delivery
// Zomato Application 

const orderDetails = {
  orderId: 123123,
  food: ["Pizaa", "Burger", "Coke"],
  cost : 500,
  customer_name: "Rohit",
  customer_location: "Delhi",
  customer_number: 9849203,
  resturant_location: "Delhi",

}

function placedOrder(orderDetails){
  console.log("Payment is in progress");

  return new Promise((resolve, reject) =>{
     setTimeout(() => {
      console.log("Payment is recieved and order get placed ");
      orderDetails=true;
      resolve(orderDetails);
     
    }, 3000);
  })

}

 


function preparingOrder(orderDetails){
  console.log("Your food preparation has started");
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    console.log("Your order is now prepared");
    orderDetails.token = 123;
    resolve(orderDetails);
  },3000);
  })

}

function pickupOrder(orderDetails) {
  console.log("Delivery boy is on a way to pickup Order");
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    console.log("I have pickup the order");
    orderDetails.received = true;
    resolve(orderDetails);
  }, 3000);
  })

}

function deliverOrder(orderDetails) {
  console.log("I am on the way to deliver the order");
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Order is dilivered");
    orderDetails.delivered = true;
    resolve(orderDetails);
  }, 3000);
  })


}


placedOrder(orderDetails)
.then((orderDetails) => preparingOrder(orderDetails))
.then((orderDetails) => pickupOrder(orderDetails))
.then((orderDetails) => deliverOrder(orderDetails))
.then((orderDetails) => {
  console.log(orderDetails);
})
.catch((error) => {
  console.log("Error", error.message);
})


