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

function placedOrder(orderDetails,Callback){
  console.log("Payment is in progress");

  setTimeout(() => {
      console.log("Payment is recieved and order get placed ");
      orderDetails=true;
      Callback();
  }, 3000);
}


function preparingOrder(orderDetails, Callback){
  console.log("Your food preparation has started");
  setTimeout(() => {
    console.log("Your order is now prepared");
  },3000);
}

function pickupOrder() {
  console.log("Delivery boy is on a way to pickup Order");
  setTimeout(() => {
    console.log("I have pickup the order");
  }, 3000);
}

function deliverOrder() {
  console.log("I am on the way to deliver the order");
  setTimeout(() => {
    console.log("Order is dilivered");

  }, 3000);
}


// placedOrder(orderDetails,(orderDetails) => {
//   preparingOrder(orderDetails,() => {
//     pickupOrder(()=> {
//       deliverOrder();
//     });
//   });
// });
//This is called callbackHell because of multiple nested callbacks


placedOrder(orderDetails,(orderDetails) => {
  preparingOrder(orderDetails, () => {
    pickupOrder(() => {
      deliverOrder();
    })
  });
});