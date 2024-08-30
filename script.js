// document.getElementById('book-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let author = document.getElementById('author').value;
//     let pages = document.getElementById('pages').value;
//     let genre = document.getElementById('genre').value;
//     let status = document.getElementById('status').value;

//     // Add book to array
//     let book = {
//         title: title,
//         author: author,
//         pages: pages,
//         genre: genre,
//         status: status
//     };

//     bookLibrary.push(book);

//     // Update table
//     updateTable();

//     // Clear form fields
//     document.getElementById('book-form').reset();
// });

// let bookLibrary = [];

// function updateTable() {
//     let tableBody = document.querySelector('#bookList');
//     tableBody.innerHTML = ''; // Clear existing table rows

//     bookLibrary.forEach(function (book, index) {
//         let row = document.createElement('tr');

//         let titleCell = document.createElement('td');
//         titleCell.textContent = book.title;
//         row.appendChild(titleCell);

//         let authorCell = document.createElement('td');
//         authorCell.textContent = book.author;
//         row.appendChild(authorCell);

//         let pagesCell = document.createElement('td');
//         pagesCell.textContent = book.pages;
//         row.appendChild(pagesCell);

//         let genreCell = document.createElement('td');
//         genreCell.textContent = book.genre;
//         row.appendChild(genreCell);

//         // let statusCell = document.createElement('td');
//         // statusCell.textContent = book.status;
//         // row.appendChild(statusCell);

//         tableBody.appendChild(row);
//     });
// }


let bookLibrary = [];



function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(book) {
    bookLibrary.push(book);
    updateLibraryTable();
}

function updateLibraryTable() {
    const tableBody = document.getElementById('bookList');
    tableBody.innerHTML = ''; 

    bookLibrary.forEach((book, index) => {
        const row = document.createElement('tr');

        for (const key in book) {
            const cell = document.createElement('td');
            cell.textContent = book[key];
            row.appendChild(cell);
        }

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            removeBook(index)
        });
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}

function removeBook(index) {
    library.splice(index, 1);
    updateLibraryTable();
}


document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const genre = document.getElementById("genre").value;
    const read = document.querySelector('input[name="status"]:checked').value;

    // Create a new book object
    const newBook = new Book(title, author, pages, genre, read);

    // Add book to library
    addBookToLibrary(newBook);

    // Clear the form
    document.getElementById("book-form").reset();
});