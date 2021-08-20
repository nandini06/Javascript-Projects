const http = new easyHTTP;

//Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err , posts) {
//    if(err)
//    {
//       console.log(err)
//    }
//    else
//    {
//       console.log(posts);
//    }
// }); 

// Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/2', function(err , post) {
//    if(err)
//    {
//       console.log(err)
//    }
//    else
//    {
//       console.log(post);
//    }
// }); 


//Create data

const data = {
   titlt: 'Custom Post',
   body: 'This is custom post'
};

//Create Post request

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err , post){
//    if(err)
//    {
//       console.log(err)
//    }
//    else
//    {
//       console.log(post);
//    }
// });


//Update Post

// http.put('https://jsonplaceholder.typicode.com/posts/100',data,function(err,post) {
//    if(err)
//    {
//       console.log(err)
//    }
//    else
//    {
//       console.log(post);
//    }
// });


//Delete Post Request

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err , response) {
   if(err)
   {
      console.log(err)
   }
   else
   {
      console.log(response);
   }
}); 