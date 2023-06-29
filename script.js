let myLibrary = [];

const form = document.getElementById('form');
form.addEventListener('submit', newBook);

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function newBook(event) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('yes').checked;
    let book = new Book(title, author, read);
    myLibrary.push(book);

    event.preventDefault();
}


