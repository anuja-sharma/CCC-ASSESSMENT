const Book = require('./bookFactory');
const Library = require('./library');
const bookData = require('./bookData');

try {
    const library = new Library();

    bookData.forEach(data => {
        const book = new Book(data.title, data.author, data.publicationYear);
        library.addBook(book);
    });

    const searchedBooks = library.searchBookBy("author", `${author} `);
    if (searchedBooks.length === 0) {
        throw new Error(`Book not found by ${author} `);
    }


    console.log("Total books in the library:", library.totalBooks());
} catch (error) {
    console.error("An error occurred:", error);
}
