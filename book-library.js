const Book = require('./bookFactory');

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    searchBookBy(criteria, value) {
        return this.books.filter(book => book[criteria] === value);
    }

    totalBooks() {
        return this.books.length;
    }
}

module.exports = Library;
