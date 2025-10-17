//CRUD ON DOM 
//Create Read Update Delete

//1. Create Element 
let div = document.createElement('div');
div.id = "myDiv";
div.className = "container";
div.textContent = "Hello, I am a new div element.";
document.body.appendChild(div); // Adding the new div to the body

//2. Read Element
let readDiv = document.getElementById('myDiv');
console.log(readDiv.textContent); // Output: Hello, I am a new div element.

//3. Update Element
readDiv.textContent = "Hello, I have been updated!";
console.log("Updated Element:", readDiv.textContent);

//4. Delete Element
document.body.removeChild(readDiv);
console.log("Deleted Element:", readDiv);
