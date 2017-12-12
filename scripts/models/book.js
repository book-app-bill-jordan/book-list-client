// var __API_URL__ = 'https://bo-jv-booklist.herokuapp.com';
var __API_URL__ = 'localhost:3000';

function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}
Book.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}
Book.all = []

Book.loadAll = rows => {
    rows.sort((a,b) => b.title - a.title)

    Book.all = rows.map(x => new Book(x))
}

Book.fetchAll = callback => {
    console.log("Working");
    $.get(`${__API_URL__}/api/v1/books`)
    .then(results => {
        console.log(results);
      Book.loadAll(results);
      callback();
    })
    .catch(errorCallback(err))
}
