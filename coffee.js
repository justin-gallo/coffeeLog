//Basic object code referenced from The Odin Project's book object example. 
function Book(title, author, pageCount, readStatus) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.readStatus = readStatus
}

Book.prototype.info = function() {
    if (this.readStatus === false) {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, not read yet`;
    } else if (this.readStatus === true) {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, already read`;
    }
}

const gameOfThrones = new Book('A Game of Thrones', 'George R. R. Martin', 500, false);

console.log(gameOfThrones.info());
console.log(gameOfThrones.constructor);