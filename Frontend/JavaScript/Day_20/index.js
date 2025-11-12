// // async function greet(){
// //   return new Promise((resolve, reject) => {
// //     resolve("rohit");
// //   })
// // }

// // const response = greet();
// // console.log(response);

// // response.then((data) => console.log(data))
// // .catch((error)=>{
// //   console.log("Error", error.message);
// // })

async function github() {
  try {
  const response = await fetch("https://api.github.com/users");
  if(!response.ok) {
    throw new Error("Data is not present");
  }
  const data = await response.json();
  // console.log(data);
  const parent = document.getElementById("first");
  for(let user of data){
   const element = document.createElement("div");
   element.classList.add("user");

   const image = document.createElement('img');
   image.src = user.avatar_url;

   const userName = document.createElement('h2');
   userName.textContent = user.login;

   const anchor = document.createElement('a');
   anchor.href = user.html_url;
   anchor.textContent = "Profile Link";

   element.append(image, userName, anchor);
   parent.append(element);
  }
} catch (error) {
  console.log("Error ", error);
}
}

github();

console.log("Hello World End");




// const orderDetails = {w
//   orderId: 123123,
//   food: ["Pizaa", "Burger", "Coke"],
//   cost : 500,
//   customer_name: "Rohit",
//   customer_location: "Delhi",
//   customer_number: 9849203,
//   resturant_location: "Delhi",

// }

// function placedOrder(orderDetails){
//   console.log("Payment is in progress");

//   return new Promise((resolve, reject) =>{
//      setTimeout(() => {
//       console.log("Payment is recieved and order get placed ");
//       orderDetails=true;
//       resolve(orderDetails);
     
//     }, 3000);
//   })

// }

 


// function preparingOrder(orderDetails){
//   console.log("Your food preparation has started");
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//     console.log("Your order is now prepared");
//     orderDetails.token = 123;
//     resolve(orderDetails);
//   },3000);
//   })

// }

// function pickupOrder(orderDetails) {
//   console.log("Delivery boy is on a way to pickup Order");
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//     console.log("I have pickup the order");
//     orderDetails.received = true;
//     resolve(orderDetails);
//   }, 3000);
//   })

// }

// function deliverOrder(orderDetails) {
//   console.log("I am on the way to deliver the order");
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Order is dilivered");
//     orderDetails.delivered = true;
//     resolve(orderDetails);
//   }, 3000);
//   })


// }

// async function ordering() {
//   try {

  
//   const response1 = await placedOrder(orderDetails);
//   const response2 = await preparingOrder(response1);
//   const response3 = await pickupOrder(response2);
//   const response4 = await deliverOrder(response3);
//   console.log("Final Response: ", response4); 
//   }
//   catch (error) {
//     console.log("Error ", error);
//   }
// }




// ordering();