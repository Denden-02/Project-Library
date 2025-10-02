Project Library:
FROM THE INSTRUCTION PAGE:
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

FOR Dialog BOX:
- Click "New Book" button to open dialog box (w/ form)
- Dialog box type: Modal (because of showModal() method);
- Also closed by attaching listener .close() to cancel button
- Fill out the form, all input have "name" that will be saved as variables on backends
- Try extracting the data form:{} after submitting

Form data looks like this on httpbin.org:
"form": {
    "age": "31", 
    "first_name": "Dan", 
    "last_name": "Rasay"
  }, 

  - OR try getting the value inputted after pressing the button with element.value

  - after clicking 'OK', run an event handler that will extract all book form data into the array library to post into the table

  - after extracting all inputted data > create a newBook Object that will be added to the Array library

ORGANIZED TRAIN OF THOUGHTS:
<!-- - Fix radio buttons NOT adding the selected option properly to the table -->

- Assign the necessary event handlers to the page (clicks, submit)
- Extract form data after submitting the form dialog box
  - make function that extracts the form data
  - using constructor: new FormData()
  - punch each key:value pair into one bookinfo
  - add the crypto.randomUUID() as a unique book ID
- put book info into an array (library)
- cycle into the library and get the recent book addition 
- then put the recent added book into the table
- Add a button to remove a book row and data 

//fixed: submitting behavior after clicking `cancel`
//fixed: values not resetting after clicking `new book`


