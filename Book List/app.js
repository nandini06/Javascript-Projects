//In ES5

//Book Constructor

function Book(title,author,isbn){
   this.title = title;
   this.author = author;
   this.isbn = isbn;
}
//UI  Constructor

function UI(){}

UI.prototype.addBookToList = function(book){
   const list = document.getElementById('book-list');
   //Create tr element
   const row = document.createElement('tr');
   //Insert cols
   row.innerHTML= `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="" class ="delete">X</a></td>
      `;

      list.appendChild(row);
}

//Show alert

UI.prototype.showAlert = function(msg,className){
   //Create a div
   const div = document.createElement('div');
   //class name
   div.className=`alert ${className}`;
   //Add text
   div.appendChild(document.createTextNode(msg));
   //Get parent
   const container = document.querySelector('.container');
   const form = document.querySelector('#book-form');
   //insrt alert
   container.insertBefore(div,form);

   //Disapper after 3 s

   setTimeout(function(){
      document.querySelector('.alert').remove();
   },3000);
}

//Delete book
UI.prototype.deleteBook = function(target){
   if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
   }
}

//Clear Fields
UI.prototype.clearFields= function(){
   document.getElementById('title').value="";
   document.getElementById('author').value="";
   document.getElementById('isbn').value="";
}

//Event Listeners

document.getElementById('book-form').addEventListener('submit',function(e){
   //Get form values
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value;

   //Instantiating a book
   const book = new Book(title,author,isbn);

   //Instantiating UI
   const ui = new UI();

   //Validate
   if(title === '' || author ==='' || isbn=== '')
   {
      //Error alert
      ui.showAlert('Please fill the fields!','error');
   }
   else
   {
      //Add book to List 
      ui.addBookToList(book);
      //Show book added
      ui.showAlert('Book Added!','success');

      //Clear fields
      ui.clearFields();
   }

   e.preventDefault();
});


//event listener for delete

document.getElementById('book-list').addEventListener('click',function(e){
   const ui = new UI();
   //Delete Book
   ui.deleteBook(e.target);
   //Show delete alerts
   ui.showAlert('Book Removed!','success');

   e.preventDefault();
});