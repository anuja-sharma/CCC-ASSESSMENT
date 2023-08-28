const Book = require('./bookFactory');
const Library = require('./library');
const bookData = require('./bookData');

function searchBooksByAuthor(library, author) {
    const searchedBooks = library.searchBook("author", author);

    if (searchedBooks.length === 0) {
        throw new Error(`Book not found by ${author}`);
    }

    return searchedBooks;
}

function updateBook(library, title, updatedDetails) {
    const searchedBooks = library.searchBook("title", title);

    if (searchedBooks.length === 0) {
        throw new Error(`Book not found by title: ${title}`);
    }

    searchedBooks[0].updateBookDetails(updatedDetails);
}

try {
    const library = new Library();

    bookData.forEach(data => {
        const book = new Book(data.title, data.author, data.publicationYear);
        library.addBook(book);
    });

    const authorToSearch = "Vishnu Sharma";
    const searchedBooks = searchBooksByAuthor(library, authorToSearch);

    searchedBooks.forEach(book => console.log(book.getBookDetails()));

    console.log("Total books in the library:", library.totalBooks());

    const titleToUpdate = "Panchatantra";
    const updatedDetails = {
        author: "Updated Author",
        publicationYear: 2000
    };

    updateBook(library, titleToUpdate, updatedDetails);

    const updatedBook = library.searchBook("title", titleToUpdate)[0];
    console.log("Updated book details:", updatedBook.getBookDetails());
} catch (error) {
    console.error("An error occurred:", error);
}
