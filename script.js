let myLibrary = [];

const form = document.getElementById('form');
const formContainer = document.querySelector('.form-container');
const button = document.getElementById('add');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
    formContainer.style.display = 'flex';
});

form.addEventListener('submit', addBook);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(event) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('yes').checked;
    read = (read === true) ? 'Yes' : 'No';

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addToList(title, author, pages, read);

    form.reset();
    formContainer.style.display = 'none';
    event.preventDefault();
}

function addToList(title, author, pages, read) {
    const row = document.createElement('div');
    row.classList.add('row');
    content.appendChild(row);
    
    let elements = [4];
    for (let  i = 0; i < 4; i++) {
        elements[i] = document.createElement('p');
        elements[i].textContent = arguments[i];

        row.appendChild(elements[i]);
    }
}