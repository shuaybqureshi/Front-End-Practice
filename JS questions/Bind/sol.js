const person = {
    name: 'Alice',
    sayHello: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const eventHandler = person.sayHello.bind(person);
  
console.log(eventHandler())  