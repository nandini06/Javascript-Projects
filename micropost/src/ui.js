class UI {
   constructor() {
      this.post = document.querySelector('#posts');
      this.titleInput = document.querySelector('#title');
      this.bodyInput = document.querySelector('#body');
      this.idInput = document.querySelector('#id');
      this.postSubmit = document.querySelector('.post-submit');
      this.forState = 'add';
   }

   //Show all the posts
   showPosts(posts) {
      let output = '';
      posts.forEach((post) => {
         output += `
            <div class="card mb-3">
               <div class="card-body">
                  <h4 class="card-title">${post.title}</h4>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="edit card-link"  data-id="${post.id}">
                     <i class="fas fa-pencil-alt"></i>
                  </a>
                  <a href="#" class="delete card-link" data-id="${post.id}" style="color:red;">
                     <i class="fas fa-eraser"></i>
                  </a>
               </div>
            </div>
         `;
      });
      this.post.innerHTML = output;
   }

   //Create and display the alert div
   showAlert(message, className) {
      this.clearAlert();
      //Create a div 
      const div = document.createElement('div');
      //Add classes
      div.className = className;
      //Add text
      div.appendChild(document.createTextNode(message));
      //Get parent 
      const container = document.querySelector('.postsContainer');
      //Get posts
      const posts = document.querySelector('#posts');
      //Insert alert div
      container.insertBefore(div, posts);

      //Timeout 
      setTimeout(() => {
         this.clearAlert();
      }, 3000);
   }

   //Erase the alert div
   clearAlert() {
      const currentAlert = document.querySelector('.alert');
      if (currentAlert) {
         currentAlert.remove();
      }
   }

   //Clear input fields
   clearFields() {
      this.titleInput.value = '';
      this.bodyInput.value = '';
   }

   //Clear id input 
   clearIdInput() {
      this.idInput.value = '';
   }

   //Fill form to edit
   fillForm(data) {
      this.titleInput.value = data.title;
      this.bodyInput.value = data.body;
      this.idInput.value = data.id;

      this.changeFormState('edit');
   }

   //Change Form State
   changeFormState(type) {
      if(type === 'edit')
      {
         this.postSubmit.textContent='UPDATE POST';
         this.postSubmit.className = 'post-submit btn btn-warning btn-block m-2';

         //Crete a cancel button
         const button = document.createElement('button');
         button.className = 'post-cancelled btn btn-primary btn-block m-2';
         button.appendChild(document.createTextNode('CANCEL'));

         //Get parent
         const cardForm = document.querySelector('.card-form');

         //Get element to insert that
         const formEnd= document.querySelector('.form-end');
         //Insertcancel button
         cardForm.insertBefore(button,formEnd);
      }
      else
      {
         this.postSubmit.textContent='POST IT';
         this.postSubmit.className = 'post-submit btn btn-secondary btn-block m-2';

         //Remove cancel button if there
         if(document.querySelector('.post-cancelled')) 
         {
            document.querySelector('.post-cancelled').remove();
         }

         //Clear id from hidden fields
         this.clearIdInput();

         //Clear text fields
         this.clearFields();
      }
   }
}

export const ui = new UI();