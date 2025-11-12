// Prototype

const obj = {
  name: "Rohit",
  age: 38,
  greet: function() {
    console.log("Hello ", this.name);
  }
} 

const obj2 = {
  name: "Raghu"
};

obj2.__proto__ = obj;

console.log(obj2.age);
 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log("Hi", this.name);
  }
}

class Student extends Person {
  constructor(name, age, grade, balance) {
    super(name, age);
    this.grade = grade; 
    this.balance = balance;
  }
  chcekbalance() {
    return this.balance;
  }

}

const c1 = new Student("Rohit", 38, "A +", 5000);
console.log(c1);
