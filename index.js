
function fetchBooks() {
  //write fetch request to the Game of Thrones 
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  // .then(json => console.log(json)) 
 .then (json => renderBooks(json));
  // .then( json => renderBooks(json));

    }

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h4 = document.createElement('h4')
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
  .then(resp2 => resp2.json())
  // .then(json => console.log(json()))
  .then( json => renderHouses(json))
   .then(json => console.log(json()));
  // h4 = document.createElement('h4')
  // h4.innerHTML = `<h4>${houses[4]}`;
    }

// function renderHouses(json) {
//   const main = document.querySelector('main')
//   json.forEach(houses => {
//     const h5 = document.createElement('h5');
//     h5.innerHTML = `<h5>${houses.name}</h5>`;
//     main.appendChild(h5)
//   })
// }
function renderHouses(json) {
  const main = document.querySelector('main')
  const h5 = document.createElement('h5');
  h5.innerHTML = `<h5>${houses.name[4]}</h5>`;
  // json.forEach(houses => {
  //   const h5 = document.createElement('h5');
  //   h5.innerHTML = `<h5>${houses.name[4]}</h5>`;
  //   main.appendChild(h5)
  }



document.addEventListener('DOMContentLoaded', function() {
  fetchHouses()
})
