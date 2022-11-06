let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage();
}
function displayBooksOnPage() {
  const info = document.querySelector("#info");

  let details = myLibrary.map(function (item) {
    return (
      "<div>" +
      "Book: " +
      item.title +
      "<br>" +
      "By: " +
      item.author +
      "<br>" +
      "Pages: " +
      item.pages +
      "<br>" +
      "Read?: " +
      item.read +
      "</div>"
    );
  });
  info.innerHTML = details.join("\n");
}

addBookToLibrary("pepe", "poopo", "2000", "yes");
addBookToLibrary("Blackthongue Thief", "Chris Buelhman", "412", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");

console.log(myLibrary);
