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
    console.log(ctx)
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

Book.update = function(ctx, callback) {
    $.ajax({
        url: `${__API_URL__}/api/v1/books/${ctx.book_id}`,
        method: 'PUT',
        data: {
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            image_url: this.image_url,
            description: this.description
        }
    })
}
function errorCallback(err) {
    console.log(err);
    errorView.initErrorPage(err);
}
//     module.Book = Book;
// });(app)
