class Book{
   constructor(title,author,isbn)
   {
      this.title=title;
      this.author=author;
      this.isbn=isbn;
   }
}

class UI{
   addBookToList(book){
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

   showAlert(msg,className){
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

   deleteBook(target){
      if(target.className === 'delete') {
         target.parentElement.parentElement.remove();
      }
   }

   clearFields(){
      document.getElementById('title').value="";
      document.getElementById('author').value="";
      document.getElementById('isbn').value="";
   }
}


//Local Storage Class

class Store {
   static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
         books=[];
      }
      else{
         books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
   }

   static displayBooks() {
      const books = Store.getBooks();

      books.forEach(function(book){
         const ui = new UI;

         //Add book to list
         ui.addBookToList(book);
      });
   }

   static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books',JSON.stringify(books));
   }

   static removeBook(isbn) {
      const books = Store.getBooks();

      books.forEach(function(book,index){
         if(book.isbn === isbn)
         {
            books.splice(index,1);
         }
      });

      localStorage.setItem('books',JSON.stringify(books));
   }
}

//dom load again

document.addEventListener('DOMContentLoaded', Store.displayBooks);


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

      //add to local storage
      Store.addBook(book);
      //static method no need to instantiate

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

   //Remove from local Storage
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
   //Show delete alerts
   ui.showAlert('Book Removed!','success');

   e.preventDefault();
});