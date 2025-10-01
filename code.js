let library = new Array();
let data;

function Book(array) {
    this.book = array[0];
    this.author = array[1];
    this.pages = array[2];
    this.status = array[3];
    this.bookId = crypto.randomUUID();
}

// function addBookToLibrary() {
//     let book =  prompt("What's the name of the book? ");
//     let author = prompt("Who's the author of this book? ");
//     let pages = prompt("How many pages does this book have? ");
//     let status = prompt("Have your already read this book or not? ")

//     let newBook = new Book(book,author,pages,status);
//     library.push(newBook);
// }

function addBookFormInfoToLibrary() {
    let book = document.body.querySelector("input#book").value;
    let author = document.body.querySelector("input#author").value;
    let pages = document.body.querySelector("input#pages").value;
    let status = document.body.querySelector("input[type='radio']").value;
    console.log(status);
    let newBook = new Book(book,author,pages,status);
    library.push(newBook);
    library.forEach(addBookToTable);
}

function addBookToTable(objItem, index) {
    if (index == library.length-1) {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("data-bookId", objItem.bookId)
        let tdBook = document.createElement("td");
        tdBook.innerText = objItem.book;
        let tdAuthor = document.createElement("td");
        tdAuthor.innerText = objItem.author;
        let tdPages = document.createElement("td");
        tdPages.innerText = objItem.pages;
        let tdStatus = document.createElement("td");
        tdStatus.innerText = objItem.status;

        tableRow.appendChild(tdBook);
        tableRow.appendChild(tdAuthor);
        tableRow.appendChild(tdPages);
        tableRow.appendChild(tdStatus);

        let table = document.body.querySelector(".table");
        table.appendChild(tableRow);
    }
}

// Assign AddEventListeners to necessary elements;
let newBookBtn = document.body.querySelector("#new-book");
let dialogBox = document.body.querySelector(".dialog"); // manage eventlistener of dialog (i.e. "close" event);

let dialogOk = document.body.querySelector("button#ok");
let dialogCancel = document.body.querySelector("button#cancel");
let form = document.body.querySelector("form");
// RUNTIME
// addBookToLibrary();

newBookBtn.addEventListener("click", () => dialogBox.showModal());
dialogCancel.addEventListener("click", () => dialogBox.close());

// dialogOk.addEventListener("click", addBookFormInfoToLibrary)

function extractFormData(evt) {
    data = new FormData(evt.currentTarget);
    // console.log(evt.currentTarget);
    // console.log(data);
    let array = [];
    
    for (let input of data.entries()) {
        // input would be an array of entries "[inputkey, inputvalue] defined by an underlying index on each pair thanks to the .entries() iterator"
        array.push(input[1]); //meaning the value of the name [name, value]
    }

    let newBook = new Book(array);
    library.push(newBook);
    library.forEach(addBookToTable);
}

form.addEventListener("submit", extractFormData);
//TO GIT ADD; make sure function is working


 








