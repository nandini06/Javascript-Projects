//Intatiating GitHub class
const github = new Github;
//Intatiating UI class
const ui = new UI;

//Search input
const searchUser = document .getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e)=>{
   //Get inputText
   const userText = e.target.value;

   if(userText !== ''){
      //Make http call
      github.getUser(userText)
      .then(data => {
         if(data.profile.message === 'Not Found')
         {
            // show alert
            ui.showAlert('User not found', 'alert alert-danger');
         }
         else
         {
            // show profiles
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
         }
      })
   }
   else
   {
      //Clear profile
      ui.clearProfile();
   }
});