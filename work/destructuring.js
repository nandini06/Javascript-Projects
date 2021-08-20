//Destructuring Assignment

let a,b;
[a,b]=[100,200];
//Rest pattern
[a,b,c,...rest]=[100,200,300,400,500];

({a,b} = {a:1,b:2 ,c:3,d:4,e:5} );
({a,b, ...rest} = {a:1,b:2 ,c:3,d:4,e:5} );

// console.log(rest);

//Array Destructuring

// const people = ['John','Beth','Mike'];

// const [p1,p2,p3] = people;

// console.log(p1,p2,p3);

//Parse array returned from function

// function getPeople () {
//    return ['A','B','C'];
// }

// let p1,p2,p3;

// [p1,p2,p3] = getPeople();

// console.log(p1,p2,p3);

//Object Destructuring

const person = {
   name: 'John Doe',
   age: 25,
   city: 'Miami',
   gender: 'female',
   sayHello : function() {
      console.log('Helloooo');
   }
}

// Old ES5 way

// const name=person.name,
//       age=person.age,
//       city=person.city,
//       gender=person.gender;

//New ES6 way

const { name , age , city , sayHello} = person;

console.log(name,age,city);

sayHello();