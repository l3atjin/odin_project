// Exercise
// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

function Book(title, author, numPages, readBook) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readBook = readBook;

  this.info = () => {
    return `${this.title} by ${this.author}, ${numPages} pages, ${readBook ? "read" : "not read yet"}`;
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
console.log(Object.getPrototypeOf(theHobbit));