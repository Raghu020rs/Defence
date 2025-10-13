// const arr = [10, 20, 30, "Rohit", 90];
// //For each 
// arr.forEach((number)=> {
//   console.log(number);
// });


const products = [
  {
    id: 1,
    name: "laptop",
    category: "electronics",
    price: 1200,
    inStock: true
  },
  {
    id: 2, 
    name: "Book",
    category: "education",
    price: 30,
    inStock: true
  },
  {id: 3,
    name: "Phone",
    category: "appliances",
    price: 1500,
    inStock: false
  },
  {
    id: 4,
    name: "Headphones",
    category: "Electronics",
    price: 100,
    inStock: true
  }
];

console.log(" Our Products");
products.forEach(product => {
  console.log(`- ${product.name}`);
});

products.forEach((products, index) => {
  console.log(`${index + 1}. ${products.name}`);
});


const productsNames = products.map(products => {
  return products.name;
})

console.log(productsNames);

// console.log(products);

const availability = products.filter(products => {
  return products.inStock === true && products.category === "Electronics";
});

console.log(availability);


