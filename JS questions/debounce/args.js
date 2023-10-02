function sum(...args) {
    let result = 0;
    for (const arg of args) {
      result += arg;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  