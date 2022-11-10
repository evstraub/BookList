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
      "<br>" +
      "<button>delete</button>" +
      "</div>"
    );
  });
  info.innerHTML = details.join("\n");
}
const deleteBtn = document.querySelector("delete");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);
function intakeFormData() {
  let title = document.getElementById("Title").value;
  let author = document.getElementById("Author").value;
  let pages = document.getElementById("Pages").value;
  let read = document.getElementById("Read").value;

  // Break out if form is incomplete or not valid
  if (title == "" || author == "" || pages == "" || read == "") {
    return;
  }

  // Call function to input the book data to array
  addBookToLibrary(title, author, pages, read);

  // Reset the form after successful submission
  document.getElementById("form2").reset();
}

addBookToLibrary("The Glass Hotel", "Emily Stjn Mandell", "301", "Yes");
addBookToLibrary("Blackthongue Thief", "Chris Buelhman", "412", "yes");
addBookToLibrary("It Ends With Us", "Colleen Hoover", "315", "yes");

//console.log(myLibrary);
