function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // return fetch("https://anapioficeandfire.com/api/books")
  // .then(resp => {return resp.json})
  // .then(data => {renderBooks(data)});
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error("Error fetching books:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
