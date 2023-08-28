class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`;
    }

    updateDetails({ title, author, publicationYear }) {
        if (title) {
            this.title = title;
        }
        if (author) {
            this.author = author;
        }
        if (publicationYear) {
            this.publicationYear = publicationYear;
        }
    }
}

module.exports = Book;
