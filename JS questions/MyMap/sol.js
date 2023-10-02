Array.prototype.myMap = function (callbackFn, thisArg) {
    const res =[]
    for (i=0;i<this.length;i++){
        const val = callbackFn(this[i]);
        res.push(val)
    }
    return res 
  };


[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
