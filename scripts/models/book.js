// var __API_URL__ = 'https://bo-jv-booklist.herokuapp.com';
// var app = app || {};
var __API_URL__ = 'http://localhost:3000';


// (function(module) {
function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

Book.all = []

Book.loadAll = rows => {
    rows.sort((a,b) => b.title - a.title)

    Book.all = rows.map(x => new Book(x))
}

Book.fetchAll = callback => {
    console.log("Working");
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)
}

Book.fetchOne = callback => {
  $.get(`${__API_URL__}/api/v1/books:id`)
  .then()
  .then(callback)
  .catch(errorCallback)
  ctx.body.title = title
}

function errorCallback(err) {
    console.log(err);
    errorView.initErrorPage(err);
}
//     module.Book = Book;
// });(app)
