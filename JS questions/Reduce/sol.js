Array.prototype.myReduce = function (callbackFn, initialValue) {

    const noInitialValue = initialValue === undefined;
    const len = this.length;
  
    if (noInitialValue && len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  
    let res=initialValue
    for (i=0;i<this.length;i++){
        res=callbackFn(res,this[i])
    }
    // console.log(res)
    return res 
  };

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
