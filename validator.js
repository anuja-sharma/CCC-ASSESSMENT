function validateBook(book) {
    if (!(book instanceof Book)) {
        throw new Error("Invalid book object");
    }
}

function validateSearchCriteria(criteria) {
    const validCriteria = ["title", "author", "publicationYear"];
    if (!validCriteria.includes(criteria)) {
        throw new Error("Invalid search criteria");
    }
}

module.exports = {
    validateBook,
    validateSearchCriteria
};
