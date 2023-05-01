let myBooks = [];

function Book(title, author) {
    this.title = title;
    this.author =author;
}

function addBook(title, author) {
    let book = new Book(title, author);
    myBooks.push(book);
}