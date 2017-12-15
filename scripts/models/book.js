// var __API_URL__ = 'https://bo-jv-booklist.herokuapp.com';
// var app = app || {};
var __API_URL__ = 'http://localhost:3000';


// (function(module) {
function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

Book.all = []

function resetView() {
    $('.container').hide();
}
Book.loadAll = rows => {
    console.log(rows)
    rows.sort((a,b) => b.title - a.title)

    Book.all = rows.map(x => new Book(x))
}

Book.fetchAll = callback => {
    console.log("fetchall");
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)
}

Book.fetchOne = (ctx, callback) => {
    // console.log(ctx)
  $.get(`${__API_URL__}/api/v1/books/${ctx.params.id}`)
//   .then(console.log('inside fetchone'))
//   .then(data => console.log(data))
  .then(data => ctx.bookObj = data[0])
  .then(callback)
  .catch(errorCallback)
}

Book.create = book => {
    $.post(`${__API_URL__}/api/v1/books`, book)
        .then(() => page('/'))
        .catch(errorCallback);
}

Book.destroy = function(ctx, callback) {
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${ctx.book_id}`,
      method: 'DELETE'
    })
    .then(() => page('/'))
    .catch(errorCallback);
}

Book.update = function(ctx, id) {
    // console.log(ctx)
    console.log(id)
    $.ajax({
        url: `${__API_URL__}/api/v1/books/${id}`,
        method: 'PUT',
        data: {
            title: ctx.title,
            author: ctx.author,
            isbn: ctx.isbn,
            image_url: ctx.image_url,
            description: ctx.description
        }
    })
    .then(() => page('/'))
    .catch(errorCallback);
}

Book.find = function (book, callback) {
    console.log(book, callback)
    $.get(`${__API_URL__}/api/v1/books/find`, book)
    .then(Book.loadAll)
    .then(bookView.initSearchResultsPage)
    .catch(errorCallback)
}
function errorCallback(err) {
    console.log(err);
    errorView.initErrorPage(err);
}

Book.findOne = function (isbn) {
    $.get(`${__API_URL__}/api/v1/books/find/:isbn`, isbn)
    .then(Book.create)
    .then(callback)
    .catch(errorCallback)
}
//     module.Book = Book;
// });(app)
