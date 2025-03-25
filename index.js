function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);

      console.log("5th Book in the Series:", books[4]);

      //  Calculate the total number of pages in all books
      const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
      console.log("Total Number of Pages:", totalPages);
      
      // Display total pages on the webpage
      displayTotalPages(totalPages);
    })
    .catch((error) => console.error("Error fetching books:", error));
}

// Function to render books in the DOM
function renderBooks(books) {
  const main = document.querySelector("main");

  books.forEach((book, index) => {
    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<h2>${book.name}</h2><p>Pages: ${book.numberOfPages}</p>`;

    // Highlight the 5th book in red
    if (index === 4) {
      bookInfo.style.color = "red";
      bookInfo.innerHTML += " <strong>(5th Book!)</strong>";
    }

    main.appendChild(bookInfo);
  });
}

//  Fetch the 1031st character and log it
function fetchCharacter1031() {
  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((character) => console.log("1031st Character:", character))
    .catch((error) => console.error("Error fetching character:", error));
}

//  Display total pages on the webpage
function displayTotalPages(totalPages) {
  const main = document.querySelector("main");
  const totalPagesElement = document.createElement("h3");
  totalPagesElement.textContent = `Total Pages in All Books: ${totalPages}`;
  totalPagesElement.style.color = "blue"; // Make it stand out
  main.appendChild(totalPagesElement);
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  fetchCharacter1031();
});
