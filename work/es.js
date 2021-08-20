//iterator example

// function nameIterator(names) {
//    let nextIndex = 0;

//    return {
//       next : function() {
//          return nextIndex < names.length ?
//          { value : names[nextIndex++] , done : false} :
//           { done : true}
//       }
//    }
// } 
// // create names array
// const namesArr = ['Harry' , 'Joe' , 'Ross'];
// //Inti iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


//Generator Example

// function* sayNames() {
//    yield 'jack';
//    yield 'jill';
//    yield 'john';
// }

// const names = sayNames();
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


//ID creator

function* createIds() {
   let index = 1 ;
   while(true) {
      yield index++;
   }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);