function get(object, pathParam, defaultValue) {
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
    i=0; 
    while (object!=undefined && i<path.length){
        object= object[String(path[i])]
        i++;
    }
    // console.log(undefined==null)
    const value = i && i === path.length ? object : undefined;
    const res = value !== undefined ? value : defaultValue;
}

const john = {
    profile: {
      name: { firstName: 'John', lastName: 'Doe' },
      age: 20,
      gender: 'Male',
    },
  };
  
  const jane = {
    profile: {
      age: 19,
      gender: 'Female',
    },
  };
  
  function getFirstName(user) {
    return user.profile.name.firstName;
  }
  
// console.log(john.profile)
// get(john, 'profile.name.firstName'); // 'John'
// get(john, 'profile.gender'); // 'Male'
// get(jane, 'profile.name.firstName'); // undefined
get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
