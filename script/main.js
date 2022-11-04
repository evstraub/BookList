let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
function displayBooksOnPage() {
  const books = document.querySelector(".books");
}
myLibrary.forEach((myLibrary) => {
  const card = document.createElement(".div");
  card.classList.add(".card");
  books.appendChild(card);
  for (let key in myLibrary) {
    console.log(`${key}: ${myLibrary[key]}`);
    const para = document.createElement("p");
    para.textContent = `${key}: ${myLibrary[key]}`;
    card.appendChild(para);
  }
});
//"Fire & Blood",
//"A Game of Thrones",
// "A Clash of Kings",
//"A Storm of Swords",
//"A Dance With Dragons",
addBookToLibrary(
  "Fire & Blood",
  "George R.R. Martin",
  "700 Pages",
  "Not read yet"
);
addBookToLibrary(
  "A Game of Thrones",
  "George R.R. Martin",
  "694 Pages",
  "Not read yet"
);
console.log("End of code array contents", myLibrary);

displayBooksOnPage();
