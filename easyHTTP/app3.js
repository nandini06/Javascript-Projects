const http = new EasyHTTP;

//Get Users

// const users =  http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//USer Data

const data = {
   name : 'John Doe',
   username : 'johndoe',
   email: 'jd@gmail.com'
}

//Create POST

// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//UPDATE POST __> PUT

// http.put('https://jsonplaceholder.typicode.com/users/5',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete users

http.delete('https://jsonplaceholder.typicode.com/users/5',data)
.then(data => console.log(data))
.catch(err => console.log(err));