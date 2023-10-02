Array.prototype.myFilter = function (callbackFn, thisArg) {
    // console.log(this)
    const res = []
    for (let i =0;i<this.length;i++){
        console.log(this[i])
        if (callbackFn(this[i])){
            res.push(this[i]);
        }
    }
    console.log(res)
  };

 [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
// [1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
