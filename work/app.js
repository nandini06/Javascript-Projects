//Person Constructor
// function Person(name,dob){
//    this.name = name;
//    // this.age = age;  
//    this.birthday = new Date(dob);
//    this.calculateAge = function(){
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear()-1970);
//    }
// }
// // const brad = new Person('Brad',20);
// // const joe = new Person('Joe',14);
// const brad = new Person('Brad','6/15/2000');

// console.log(brad.calculateAge());


// const name1 = 'Jeff';
// const name2 = new String('Jeff');


// // name2.foo = 'bar';
// console.log(name2);


// console.log(typeof name2);

// if(name2 == 'Jeff')
// {
//    console.log('yes');
// }
// else
// {
//    console.log('no');
// }



// function Person(firstName,lastName,dob){
//    this.firstName = firstName; 
//    this.lastName = lastName; 
//    this.birthday = new Date(dob);
//    // this.calculateAge = function(){
//    //    const diff = Date.now() - this.birthday.getTime();
//    //    const ageDate = new Date(diff);
//    //    return Math.abs(ageDate.getUTCFullYear()-1970);
//    // }
// }
// // Calculate age
// Person.prototype.calculateAge = function(){
//    const diff = Date.now() - this.birthday.getTime();
//    const ageDate = new Date(diff);
//    return Math.abs(ageDate.getUTCFullYear()-1970);
// };


// // Get full name
// Person.prototype.getFullName = function(){
//    return (`${this.firstName} ${this.lastName}`);
// };

// //Gets Married
// Person.prototype.getsMarried = function(newLastName){
//    this.lastName=newLastName;
// };
// const john = new Person('John' , 'Doe' , '1/1/2000');
// const joe = new Person('Joe' , 'Fiever' , '1/1/2010');

// console.log(joe.getFullName());

// console.log(john.calculateAge());

// joe.getsMarried('Smith');

// console.log(joe.getFullName());

// console.log(joe.hasOwnProperty('firstName'));
// console.log(joe.hasOwnProperty('getFullName'));



//Person Function

// function Person(firstName , lastName)
// {
//    this.firstName=firstName;
//    this.lastName=lastName;
// }

// //Greeting 


// Person.prototype.greeting = function(){
//    return `Hello there ${this.firstName} ${this.lastName}`;
// }


// const p1 = new Person('John' , 'Doe');

// console.log(p1.greeting());


//Customer Contsructor

// function customer(firstName , lastName , phone , membership) {
//    Person.call(this,firstName,lastName);
//    this.phone = phone;
//    this.membership = membership;
// }

//Inherit the person prortotype method

// customer.prototype = Object.create(Person.prototype);

// //MAke customer.prototype return Customer()

// customer.prototype.constructor = customer;

// //create customer
// const customer1 = new customer('Tom' , 'Doe' ,892803 , 'standard');
// console.log(customer1);

// //Customer greeiting

// customer.prototype.greeting =  function(){
//    return `Welcome ${this.firstName} ${this.lastName}`;
// }

// console.log(customer1.greeting());


// const p2 = new Person('Joe' , 'Doe');

// console.log(p2.greeting());


// const personPrototypes = {
//    greeting : function() {
//       return `Hello there ${this.firstName} ${this.lastName}`;
//    },
//    getsMarried : function(newLastName){
//       this.lastName=newLastName;
//    }
// }

// const mary = Object.create(personPrototypes);

// mary.firstName = 'Mary';
// mary.lastName = 'Doe';
// mary.age = 30;


// mary.getsMarried('Thompson');
// console.log(mary.greeting());


// const brad = Object.create(personPrototypes,{
//    firstName: {value: 'Brad'},
//    lastName : {value : 'Traversy'},
//    age: {value : 36}
// });

// console.log(brad);


// class  Person {
//    constructor(firstName,lastName,dob){
//       this.firstName=firstName;
//       this.lastName = lastName;
//       this.birthday = new Date (dob);
//    }

//    greeting(){
//       return `Hello there ${this.firstName} ${this.lastName}`;
//    }

//    calculateAge(){
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear()-1970);
//    }

//    getsMarried(newLastName){
//       this.lastName=newLastName;
//    }


//    static addNumbers(x,y)
//    {
//       return x+y;
//    }
// }

// const mary = new Person ('Mary' , 'Doe','6/15/2000');

// mary.getsMarried('Smith');

// console.log(Person.addNumbers(1,2));\


// class Person{
//    constructor(firstName,lastName)
//    {
//       this.firstName=firstName;
//       this.lastName=lastName;
//    }

//    greeting (){
//       return `Hello there ${this.firstName} ${this.lastName}`;
//    }
// }
// class Customer extends Person {
//    constructor(firstName,lastName,phone,membership){
//       super(firstName,lastName);
//       this.phone=phone;
//       this.membership=membership;
//    }

//    static getMembershipCost()
//    {
//       return 500;
//    }
// }

// const john = new Customer('John' , 'Doe' , 584984 , 'special');

// console.log(Customer.getMembershipCost());



//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------



// document.getElementById('button').addEventListener('click',loadData);

// function loadData() {
//    //Create an XHR Object
//    const xhr = new XMLHttpRequest();

//    //OPEN
//    xhr.open('GET','data.txt',true);

//    xhr.onload = function(){
//       if(this.status === 200) {
//          document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
//       }
//    };

//    // xhr.onreadystatechange = function() {
//    //    if(this.status === 200 && this.readyState === 4){
//    //       console.log(this.responseText);
//    //    }
//    // }

//    xhr.send();
// }



   // readyState Values
   // 0: request not initialized 
   // 1: server connection established
   // 2: request received 
   // 3: processing request 
   // 4: request finished and response is ready
   
   //HTTP Statuses
   // 200:"OK"
   //403: "FORBIDDEN"
   //404: "NOT FOUND"


// document.getElementById('button1').addEventListener('click',loadCustomer);

// document.getElementById('button2').addEventListener('click',loadCustomers);

// // Single customer

// function loadCustomer(e) {
//    const xhr = new XMLHttpRequest;

//    xhr.open('GET','customer.json', true);

//    xhr.onload = function(){
//       if(this.status === 200) {
//          // console.log(this.responseText);

//          const customer = JSON.parse(this.responseText);

//          const output = `
//          <ul>
//          <li>ID : ${customer.id}</li>
//          <li>NAME : ${customer.name}</li>
//          <li>COMPANY : ${customer.company}</li>
//          <li>PHONE : ${customer.phone}</li>
//          </ul>
//          `;

//          document.getElementById('customer').innerHTML = output;
//       }
//    }

//    xhr.send();
// }


// //Multiple customers

// function loadCustomers(e) {
//    const xhr = new XMLHttpRequest;

//    xhr.open('GET','customers.json', true);

//    xhr.onload = function(){
//       if(this.status === 200) {
//          // console.log(this.responseText);

//          const customers = JSON.parse(this.responseText);

//          let output='';

//          customers.forEach(customer => {
//             output += `
//             <ul>
//             <li>ID : ${customer.id}</li>
//             <li>NAME : ${customer.name}</li>
//             <li>COMPANY : ${customer.company}</li>
//             <li>PHONE : ${customer.phone}</li>
//             </ul>
//             `;
//          });

//          document.getElementById('customers').innerHTML = output;
//       }
//    }

//    xhr.send();
// }




//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


//Call back


// const posts = [
//    { title:'Post One', body: 'This is post one'},
//    { title:'Post Two', body: 'This is post two'}
// ];


// function createPost(post)
// {
//    setTimeout(function() {
//       posts.push(post);
//    },2000);
// }

// function getPosts(){
//    setTimeout(function(){
//       let output = '';
//       posts.forEach(function(post){
//          output += `<li>${post.title} : ${post.body}</li>`;
//       });

//       document.body.innerHTML = output;
//    },1000);
// }

// createPost({ title:'Post Three', body: 'This is post three'});

// getPosts();

// const posts = [
//    { title:'Post One', body: 'This is post one'},
//    { title:'Post Two', body: 'This is post two'}
// ];


// function createPost(post)
// {
//    return new Promise(function(resolve , reject) {
//       setTimeout(function() {
//          posts.push(post);   
//          let error = false; 
//          if(!error)
//          {
//             resolve();
//          }
//          else{
//             reject('Something went wrong')
//          }
//       },2000);
//    });
// }

// function getPosts(){
//    setTimeout(function(){
//       let output = '';
//       posts.forEach(function(post){
//          output += `<li>${post.title} : ${post.body}</li>`;
//       });

//       document.body.innerHTML = output;
//    },1000);
// }


// createPost({title:'Post Three', body:'This is post three'}).then(getPosts).catch(function(err){
//    console.log(err);
// });

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Arrow Function

// const sayHello = function() {
//    console.log ('Hello');
// }

// const sayHello =() => {
//    console.log ('Hello from Arrow');
// }


//one line function need no braces
// const sayHello = (fn,ln) => `Hello ${fn} ${ln}`;

// when you need return 
// const add = (x,y) => ({ x : x , y : y , ad : x+y});

// console.log(add(4 , 15));
// console.log(sayHello("aa" , "bb"));

// const user = ['Joe' , 'Chandler' , 'Ross'];

// const nameLength = user.map((name) => {
//    return name.length;
// });

// const nameLength = user.map(name => name.length);

// console.log(nameLength);

// asyn


async function getUsers () {
   // await response of the fetch call
   const response = await fetch('https://jsonplaceholder.typicode.com/users');


   //Only proceed once its resolved
   const data = await response.json();


   //Only proceed once second promise is resolved
   return data;
}

getUsers().then(users => console.log(users));