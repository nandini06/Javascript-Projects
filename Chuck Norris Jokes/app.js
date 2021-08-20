document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
   const number = document.getElementById('number').value;

   const xhr = new XMLHttpRequest();

   xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

   xhr.onload = function(){
      if(this.status === 200)
      {
         const responses = JSON.parse(this.responseText);
         console.log(responses);
         let jokes='';
         if(responses.type === 'success')
         {
            responses.value.forEach(function(response){
               // console.log(response.joke);
               jokes += `<li>${response.joke}</li>`;
            });
         }
         else
         {
            jokes += `<li>Something Went Wrong</li>`;
         }

         document.querySelector('.jokes').innerHTML = jokes;
      }
   }

   xhr.send();

   e.preventDefault();
}