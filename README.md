Project Library:
-GitHub repository on Project: Library
-Make 1 array variable for book storage & 1 Book constructor to make the book data
-1 function take arguments of the book info
-Book contains: name of the book, author, number of pages, "read or not" status
- each book has unique ID generated from crypto.randomUUID()

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

-Function that loops into an array to DISPLAY each book on web page (table or own "card")

- Add a “New Book” button 
	- leads into a form which takes book info inputs
	- books are displayed on page (thru tables or card after submitting)
-Add a remove button on each book (navigated using the unique user ID)
-Add a button to changed the "read" status
