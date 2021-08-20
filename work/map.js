//Maps =  are key value pairs we can use any type as a key or a value

const map1 = new Map();

//Set Key
const key1 = 'some string',
      key2 = {},
      key3 = function() {} ;


//Set map values by key

map1.set(key1 , 'value of key1');
map1.set(key2 , 'value of key2');
map1.set(key3 , 'value of key3');


//Get values by keys

// console.log(map1.get(key1),map1.get(key2),map1.get(key3));

//Count values
// console.log(map1.size);


//iterating through map

// loop using for....of to get keys and values

// for(let [key,value] of map1) 
// {
//    console.log(`${key} : ${value}`);
// }

//Iterate the keys only
// for(let key of map1.keys()) 
// {
//    console.log(key);
// }

//Iterate the values only
// for(let value of map1.values()) 
// {
//    console.log(value);
// }


//Loop with forEach

// map1.forEach(function (value,key) {
//    console.log(`${key} : ${value}`);
// });


// Converts to arrays


//create an array of key value pair

const keyValArr = Array.from(map1);

console.log(keyValArr);


//Create an array of values

const valArr = Array.from(map1.values());

console.log(valArr);

//Create an array of keys

const keyArr = Array.from(map1.keys());

console.log(keyArr);






