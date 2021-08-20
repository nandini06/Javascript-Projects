//Get Local text file

document.getElementById('button1').addEventListener('click',getText);

// function getText () {
//    fetch('test.txt')
//    .then(function(response){
//       console.log("RESPONSE ---- " , response);
//       // console.log("RESPONSE TEXT ---- " , response.text());
//       return response.text();
//    })
//    .then(function(data) {
//       console.log("DATA ---- ", data);
//    });
// }

function getText() {
   fetch('test.txt')
   .then((response) => response.text())
   .then((data) => document.getElementById('output').innerHTML = data)
   .catch((err) => console.log(err));
}

//Get local JSON file

document.getElementById('button2').addEventListener('click',getJSON);


function getJSON() {
   fetch('posts.json')
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      let output='';
      data.forEach((post) => output += `<li>${post.title} : ${post.body}</li>`);
      document.getElementById('output').innerHTML = output;
   })
   .catch((err) => console.log(err));
}


//Get Api from external
document.getElementById('button3').addEventListener('click',getExternal);


function getExternal() {
   fetch('https://api.github.com/users')
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      let output='';
      data.forEach((user) => output += `<li>${user.id} : ${user.login}</li>`);
      document.getElementById('output').innerHTML = output;
   })
   .catch((err) => console.log(err));
}