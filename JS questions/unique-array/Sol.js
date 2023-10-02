function uniqueArray(array) {
  const seen = new Set()
    const res  = []
    for (let i=0; i<array.length;i++){
      if (!seen.has(array[i])){
        res.push(array[i])
        seen.add(array[i])
      }
    }
    console.log(res)
  }

  uniqueArray([1, 2, 3]); // [1, 2, 3]
  uniqueArray([1, 1, 2]); // [1, 2]
  uniqueArray([2, 1, 2]); // [2, 1]
  