// Custom filter function
function customFilter(array, callback) {
    const filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    
    return filteredArray;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6];
  
  // Using the custom filter function to filter even numbers
  const evenNumbers = customFilter(numbers, (number) => number % 2 === 0);
  
  console.log(evenNumbers); // Output: [2, 4, 6]
  