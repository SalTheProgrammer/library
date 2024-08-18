/* --- */

//Initiate an empty library
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addNewBook () {
  
}

function addBookToLibrary(Book) {
  myLibrary.push(Book)
}

const container = document.querySelector('.cards-container');

function displayBooks () {
  for (let i = 0; i < myLibrary.length; i++) {
    //console.log(myLibrary[i].title);
    const card = document.createElement('div');
    const pTitle = document.createElement('p'); 
    const pAuthor = document.createElement('p'); 
    const pPages = document.createElement('p'); 
    const pRead = document.createElement('p'); 

    card.className = "card";
    container.appendChild(card);
    pTitle.innerText = 'Title : ' +  myLibrary[i].title; 
    pAuthor.innerText = 'Author : ' +  myLibrary[i].author;
    pPages.innerText = 'No. of Pages : ' + myLibrary[i].pages;
    pRead.innerText = 'Read : ' + myLibrary[i].read;
    card.append(pTitle, pAuthor, pPages, pRead);

  }
}

const book1 = new Book("To Kill A Mockingbird", "Harper Lee", 336, false); 
const book2 = new Book("Murder on The Orient Express", "Agatha Christie", 288, true); 

addBookToLibrary(book1); 
//addBookToLibrary(book2);

displayBooks();

//---- open and close add book form----
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



/* ---- chatgpt stuff ---

let Library = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "Moby Dick", author: "Herman Melville", pages: 635 }
];

const bookList = document.getElementById('book-list');
const addBookButton = document.getElementById('add-book-button');
const bookDialog = document.getElementById('book-dialog');
const okButton = document.getElementById('ok-button');
const cancelButton = document.getElementById('cancel-button');

// Function to display books in the list
function displayBooks() {
  bookList.innerHTML = '';
  Library.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
      bookList.appendChild(li);
  });
}

// Show the dialog
addBookButton.addEventListener('click', () => {
  bookDialog.style.display = 'block';
});

// Hide the dialog and clear input fields
function hideDialog() {
  bookDialog.style.display = 'none';
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

// OK button functionality to add the book
okButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value, 10);

  if (title && author && pages) {
      Library.push({ title, author, pages });
      displayBooks();
      hideDialog();
  } else {
      alert('Please fill in all fields.');
  }
});

// Cancel button functionality
cancelButton.addEventListener('click', hideDialog);

// Initial display of books
displayBooks();
*/