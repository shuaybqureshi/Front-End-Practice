function sum(numberA) {
    return function (numberB) {
        console.log(numberA,numberB)
        return numberB === undefined ? numberA : sum(numberA + numberB);
      };
  }

// console.log(sum(1)()); // 1
// console.log(sum(1)(2)()); // 3
sum(1)(2)(-3)(); // 0
// a=1,b=2 ->3 
// sum(3)(-3)