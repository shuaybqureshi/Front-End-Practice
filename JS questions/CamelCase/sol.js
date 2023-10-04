function camelCaseKeys(objects) {
    // throw 'Not implemented!';
    let res = {}
    if (Array.isArray(objects)) {
        res= objects.map((item) => camelCaseKeys(item));
      }
    for (const [key, value] of Object.entries(objects)) {
        // console.log(`${key}: ${value}`);
        let newKey= []
        let prevValue=false; 
        for (let i =0;i<key.length;i++){ 
            if (prevValue){
                prevValue=false;
                newKey.push(key[i].toUpperCase())
                continue;
            } else if (key[i]==='_'){
                prevValue=true;
                continue;
            } else{
                newKey.push(key[i])
            }

        }
        newKey= newKey.join("")
        // console.log(newKey.join(""))
        if (typeof(value)==='object'){
            res[newKey]=camelCaseKeys(value) 
        } else{ 
            res[newKey]=value 
        }
      }
      console.log(res)
    return res 
  }
//   camelCaseKeys({ foo_bar: true });

//   camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
  camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
