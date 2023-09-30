/*
Promises 
    - they are asyc 
    - used for api,reading a file, doing a task that takes a little bit time to complete 
    - they are readable 

*/

/*
Certainly! Promises in JavaScript are a way to handle asynchronous operations, 
such as fetching data from an API, reading a file, or executing a task that takes some time to complete.
Promises provide a structured and more readable way to work with
-asynchronous code compared to callbacks, making your code easier to understand and maintain.
*/

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    // If successful:
    resolve('Success data');
    // If an error occurs:
    reject('Error reason');
  });
  
  /*
  Handling Promises:
You can use the .then() and .catch() methods to handle the result or error of a promise, respectively. 
These methods are called on a promise and return new promises.

.then(onFulfilled): Executes onFulfilled when the promise is fulfilled (successful) and passes the resolved value as an argument.
.catch(onRejected): Executes onRejected when the promise is rejected (an error occurs) and passes the reason for rejection as an argument.

  */
myPromise
.then((data) => {
  console.log('Promise resolved with data:', data);
})
.catch((error) => {
  console.error('Promise rejected with error:', error);
});

/*
Chaining Promises:
Promises can be chained together using .then() to create sequences of asynchronous operations. 
Each .then() returns a new promise, allowing you to manage the flow of async code more cleanly.

*/
myPromise
  .then((data) => {
    // Process data and return a new promise
    return processData(data);
  })
  .then((result) => {
    // Continue processing or return another promise
    return anotherAsyncOperation(result);
  })
  .catch((error) => {
    // Handle any errors in the chain
    console.error('Promise chain error:', error);
  });
