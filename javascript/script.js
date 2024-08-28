const myLibrary = [
  new Book("The Hobbit", "J.R.R Tolkien", 295, false),
  new Book("Harry Potter", "J.K. Rowling", 400, true),
  new Book("The Fellowship of the Ring", "J.R.R Tolkien", 700, false),
  new Book("The Two Towers", "J.R.R Tolkien", 650, true),
  new Book("The Return of the King", "J.R.R Tolkien", 700, true),
  new Book("The Silmarillion", "J.R.R Tolkien", 1000, true),
  new Book("The Children of Hurin", "Tolos", 150, false)
];



let list = document.getElementById("bookList");

for (i = 0; i < myLibrary.length; i++) {
  let li = document.createElement("li");
  li.innerText = myLibrary[i].title;
  list.appendChild(li);
}

function Book(title, author, numPages, readBook) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readBook = readBook;

  this.info = () => {
    return `${this.title} by ${this.author}, ${numPages} pages, ${readBook ? "read" : "not read yet"}`;
  }
}



function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const numPages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
