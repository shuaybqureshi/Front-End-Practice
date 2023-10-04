function flatten(value) {
    const res = []
    // loop
        // 
    for (let i=0;i<value.length;i++){
            const item = value[i]
            if (Array.isArray(item)){
                // console.log('arr',value[i])
                const copy = flatten(item)
                res.push(...copy)
            } else{
                res.push(item)
            }  
    }
    console.log(res)
    // console.log(res.join(""));
    return res 
  }
/*
Input 
  - an array 
  - 
*/
// Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
