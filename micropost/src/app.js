import { http } from './http';
import { ui } from './ui';

//GET post on dom load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen to add post 
document.querySelector('.post-submit').addEventListener('click', submitPost);

//Listen to delete
document.querySelector('#posts').addEventListener('click', deletePosts);

//Listen to edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

//Listen to cancel button
document.querySelector('.card-form').addEventListener('click', cancelEdit);

//Get pots
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//Add  posts
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  const data = {
    title,
    body
  }

  //Validate inpts are filled in
  if (title === '' || body === '') {
    ui.showAlert('Please Fill In All Fields....', 'alert alert-danger');
  }
  else {

    if (id === '') {
      //Create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added!!', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));

    }
    else {
      //update the post --- put request
      //Create post
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated!!', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

function deletePosts(e) {

  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure you want to delete?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed!!', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
  e.preventDefault();
}

//Enable edit mode

function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };

    //Fill form with current post
    ui.fillForm(data);

  }
  e.preventDefault();
}

//Cancel Edit State Function

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancelled')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}