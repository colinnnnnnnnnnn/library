let myLibrary = [];

const form = document.getElementById('form');
const formContainer = document.querySelector('.form-container');
const add = document.getElementById('add');
const content = document.querySelector('.content');

add.addEventListener('click', () => {
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

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    updateDisplay();

    form.reset();
    formContainer.style.display = 'none';
    event.preventDefault();
}

function updateDisplay() {
    content.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        content.appendChild(row);

        const title = document.createElement('p');
        title.textContent = myLibrary[i].title;
        row.appendChild(title);

        const author = document.createElement('p');
        author.textContent = myLibrary[i].author;
        row.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;
        row.appendChild(pages);

        const read = document.createElement('p');
        read.textContent = (myLibrary[i].read === true) ? 'Yes' : 'No';
        row.appendChild(read);

        
        let parent = row.parentNode;
        let index = Array.prototype.indexOf.call(parent.children, row);
    
        const readButton = document.createElement('button');
        readButton.textContent = 'Read';
        const remove = document.createElement('button');
        remove.textContent = 'Remove';
    
        readButton.addEventListener('click', () => {
            changeRead(index);
        });
    
        remove.addEventListener('click', () => {
            removeBook(index);
        });
    
        row.appendChild(remove);
        row.appendChild(readButton);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateDisplay();
}

function changeRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    updateDisplay();
}

console.log(myLibrary);