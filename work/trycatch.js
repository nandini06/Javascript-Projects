const user = {
   email:'jd@gmail.com'
};

try {
   //Produce a Reference error
   // myFunc();

   //Produce a TypeError
   // null.myFunc();

   //Will produce SyntaxError
   // console.log(eval('Hello World'));

   // will produce URIError
   // decodeURIComponent('%');

   if(!user.name){
      // throw 'User has no name';
      throw new SyntaxError('User has no name');
   }
} catch (error) {
   console.log(`User Error: ${error.message}`);
   console.log(error);
   // console.log(error.message);
   // console.log(error.name);
   // console.log(error instanceof TypeError);
} finally {
   console.log('Finally runs reagardless of results');
}

console.log('Program continues.....')