
function fetchBooks() {
  //write fetch request to the Game of Thrones 
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json) )
  .then( json => renderBooks(json));

    }

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h4 = document.createElement('h2')
    h4.innerHTML = `<h4>${book.name}</h4>`
    main.appendChild(h4)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


function fetchHouses() {
  //write fetch request to the Game of Thrones 
  fetch('https://anapioficeandfire.com/api/houses')
  .then(resp => resp.json())
  // .then(json => console.log(json()))
  .then( json => renderHouses(json()));
  // h2 = document.createElement('h2')
  // h2.innerHTML = `<h2>${houses[4]}`;
    }

function renderHouses(json) {
  const main = document.querySelector('main')
  json.forEach(houses => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${houses.name}</h2>`;
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchHouses()
})
