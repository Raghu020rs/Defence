console.log('Hi ji ');
const button1 = document.getElementById("button1");
button1.addEventListener('click', () => {
  console.log("Button 1 is clicked");
}, true);

const button2 = document.getElementById("button2");
button2.addEventListener('click', () => {
  console.log("Button 2 is clicked");
});

const button3 = document.getElementById("button3");
button3.addEventListener('click', () => {
  console.log("Button 3 is clicked");
});

console.log("I am the end ");