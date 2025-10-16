// const newElement = document.createElement("h2");
// newElement.textContent = "Strike is coming";
// newElement.id = "second";


// const element = document.getElementsById("first");
// element.after(newElement);

// const h3IsCreated = document.createElement("h3");
// h3IsCreated.textContent = "On 18th Oct";
// h3IsCreated.id = "third";

// element.before(h3IsCreated);

// const list = document.createElement("li");
// list.textContent = "milk";


// const list2 = document.createElement("li");
// list2.textContent = "cheese";

// const list3 = document.createElement("li");
// list3.textContent = "butter";

// const list4 = document.getElementById("li");
// list4.append(list.list2, list3, list);


const arr = ["milk", "Halwa", "Paneer", "tofu","cheese"];

const unorderElement = document.getElementById("li");

for(let food of arr){
  const list = document.createElement("li");
  list.textContent = food;
  unorderElement.append(list);
}

