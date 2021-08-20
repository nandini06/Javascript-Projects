// Set - Store unique vlues only

const set =  new Set();


//Add elements to it

set.add(100);
set.add({val : 100, val2 : 200});
set.add('Hello');
set.add(true);
set.add(100);

// console.log(set);

const set2 = new Set([1,true,'Hey']);

// console.log(set2);

//Get count
// console.log(set.size);

//Checks foe values

// console.log(set.has(100));
// console.log(set.has(10*10));
// console.log(set.has({val2 : 200})); //  object is a reference object it is stored in heap

// console.log({l : 200} === {l : 200}); // two object are never equal even if they have same key value pair 


//delete from set 

set.delete(100);

// console.log(set);

//iterate through sets

// for....of loop

// for(let item  of set)
// {
//    console.log(item);
// }
// for(let item  of set.values())
// {
//    console.log(item);
// }
// for(let item  of set.keys())
// {
//    console.log(item);
// }
// for(let item  of set.entries()) // dont use
// {
//    console.log(item);
// }


//For each loop 

// set.forEach( (value)=> {
//    console.log(value);
// });


//Convert to array

const setArr = Array.from(set);

console.log(setArr);