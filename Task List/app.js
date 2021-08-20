//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.getElementById('filter');
const taskInput = document.querySelector('#task');


//Load all event listeners

loadAllEventListeners();

//Load all event listeners

function loadAllEventListeners(){

   //DOM load event
   document.addEventListener('DOMContentLoaded',getTasks);
   //Add task event
   form.addEventListener('submit',addTask);
   //Remove task event
   taskList.addEventListener('click',removeTask);
   //Clear Button event
   clearBtn.addEventListener('click',clearTasks);
   //Filter Task event
   filter.addEventListener('keyup',filterTasks);
}
//Get get tasks from LS
function getTasks(){
   let tasks;
   if(localStorage.getItem('tasks')===null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task){
      //Create li element
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item';
      //Create text node and append it to li
      li.appendChild(document.createTextNode(task));
      //Create new link element
      const link = document.createElement('a');
      //Add class
      link.className = 'delete-item secondary-content';
      //Add cross icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      //Append the link to li
      li.appendChild(link);
      //Append li to ul
      taskList.appendChild(li);
   });
}
function addTask(e){
   if(taskInput.value === ''){
      alert('Add a Task');
   }
   else{
      //Create li element
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item';
      //Create text node and append it to li
      li.appendChild(document.createTextNode(taskInput.value));
      //Create new link element
      const link = document.createElement('a');
      //Add class
      link.className = 'delete-item secondary-content';
      //Add cross icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      //Append the link to li
      li.appendChild(link);
      //Append li to ul
      taskList.appendChild(li);
      //Store in Local Storage
      storeTasksInLocalStorage(taskInput.value);
      //Clearing the value
      taskInput.value='';
   }
   e.preventDefault();
}
// storeTasksInLocalStorage function
function storeTasksInLocalStorage(task){
   let tasks;
   if(localStorage.getItem('tasks')===null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item'))
   {
      if(confirm("Are You Sure?")){
         e.target.parentElement.parentElement.remove();

         //Remove from LS
         removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
   }
}

function removeTaskFromLocalStorage(taskItem){
   let tasks;
   if(localStorage.getItem('tasks')===null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   for(let i=0;i<tasks.length;i++){
      if(taskItem.textContent === tasks[i])
      {
         tasks.splice(i,1);
         break;
      }
   }

   localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(){
   // taskList.innerHTML='';

   //Faster
   while(taskList.firstChild)
   {
      taskList.removeChild(taskList.firstChild);
   }

   //Clear Tasks from LS
   clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
   localStorage.clear();
}

function filterTasks(e){
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach(
      function(task){
         const item = task.firstChild.textContent.toLowerCase();
         if(item.indexOf(text)!=-1)
         {
            task.style.display = 'block';
         }
         else
         {
            task.style.display = 'none';
         }
         // console.log(item);
      }
   );
}