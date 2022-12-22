console.log('This is ES6 version of Project 2');
class Book {
    constructor(name, author, type, count) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
// class Store {

//     static getBooks() {
//         let book

//         if (localStorage.getItem('book') === null) {
//             book = []
//         } else {
//             book = JSON.parse(localStorage.getItem('book'))
//         }

//         return book
//     }

//     static addBook(book) {
//         const Book = Store.getBooks()
//         book.push(book)
//         localStorage.setItem('book', JSON.stringify(book))
//     }


// }
{/* <a href="#" class="btn btn-danger btn-sm delete" id="delete">Issue</a> */ }

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td>
                            <label for="myCheck">Issue:</label> 
                            <input type="checkbox" id="myCheck" onclick="myFunction()">
                            <script>
                            function myFunction() {
                            var checkBox = document.getElementById("myCheck");
                            var text = document.getElementById("text");
                            if (checkBox.checked == true){
                           text.style.display = "block";
                            } else {
                            text.style.display = "none";
                            }
                              }
                            </script>
                            </td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    return(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td>
                            <label for="myCheck">Issue:</label> 
                            <input type="checkbox" id="myCheck" onclick="myFunction1()">
                            <script>
                            function myFunction1() {
                            var checkBox = document.getElementById("myCheck");
                            var text = document.getElementById("text");
                            if (checkBox.checked == true){
                           text.style.display = "block";
                            } else {
                            text.style.display = "none";
                            }
                              }
                            </script>
                            </td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);

        display.clear();
        display.show('success', 'Your book has been successfully added')
        // Store.addBook(book);
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}

//returning the book

let libraryForm2 = document.getElementById('libraryForm');
libraryForm2.addEventListener('submit1', libraryFormSubmit1);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.return(book);
        display.clear();
       
        display.show('success', 'Your book has been successfully returned');
        // Store.addBook(book);
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot return this book');
    }

    e.preventDefault();
}

//issue book

let libraryForm3 = document.getElementById('tableBody');
libraryForm2.addEventListener('submit3', deleteBook);

//creating local storage

function store() { //stores items in the localStorage
    var name = document.getElementById('bookName').value;
    var author = document.getElementById('Author').value;
   

    const book= {
        brand: name,
        price: author,
    }

    window.localStorage.setItem(key, JSON.stringify(book));
    //converting object to string
}

// function retrieveRecords() { //retrieves items in the localStorage
//     var key = document.getElementById('retrieveKey').value; //gets key from user
//     console.log("retrive records");
//     var records = window.localStorage.getItem(key); //searches for the key in localStorage
//     var paragraph = document.createElement("p");
//     var infor = document.createTextNode(records);
//     paragraph.appendChild(infor);
//     var element = document.getElementById("retrieve");
//     element.appendChild(paragraph);
// }

// function removeItem() { //deletes item from localStorage
//     var key = document.getElementById('removeKey').value; //gets key from user
//     localStorage.removeItem(key) //passes key to the removeItem method
//     console.log("remove items");
// }

// function clearStorage() { //clears the entire localStorage
//     localStorage.clear()
//     console.log("clear records");
// }

window.onload = function () { //ensures the page is loaded before functions are executed.
    document.getElementById("libraryForm").onsubmit = store
    // document.getElementById("clearButton").onclick = clearStorage
    // document.getElementById("removeButton").onclick = removeItem
    // document.getElementById("retrieveButton").onclick = retrieveRecords
}






