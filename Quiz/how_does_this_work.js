// Explain how `this` works in JavaScript?
// - the this keyword is used to refer to the current execution context.

// 1.0 Global Context:
// Outside of any function or object, this refers to the global object. 
// In web browsers, the global object is window.
// Example 
console.log(this === window); // true (in a browser environment)

// 2.0 Functional Content
// Inside a regular function this refers to a the global object aka the window 
// Example
function showThis() {
console.log(this);
}
showThis(); // window (in a browser)

// 3.0 Method Context
// method is a function inside an object 
// "this" refers to the object 
const person = {
    name: 'Alice',
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  person.sayHello(); // "Hello, my name is Alice"
  

// 4.0 Constructor Context:
// insdide a constructor this refers to the new created objects 
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make); // "Toyota"
// 5.0 Event Handlers:
    // Refer to the object being handled 
    const button = document.getElementById('myButton');
        button.addEventListener('click', function () {
        console.log(this); // button element
        });
// 6.0 Arrow Functions:

// 7.0 Explicitly Binding this:




