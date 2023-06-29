let myLibrary = [];

const form = document.getElementById('form');
const formContainer = document.querySelector('.form-container');
const button = document.getElementById('add');

button.addEventListener('click', () => {
    formContainer.style.display = 'flex';
});

form.addEventListener('submit', addBook);

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBook(event) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('yes').checked;
    let book = new Book(title, author, read);
    myLibrary.push(book);

    console.log(myLibrary[0]);

    form.reset();
    formContainer.style.display = 'none';
    event.preventDefault();
}


