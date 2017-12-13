let bookView = {};

Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}

bookView.initIndexPage = function() {
    console.log('inside initindexpage')
    // $('.container').hide()
    $('.book-view').show()
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    $('.book-stats').text(Book.all.length);
}

bookView.initDetailPage = function(ctx) {
  console.log('inside detail page');
  var template = Handlebars.compile($('#book-list-template').text());
  return template(ctx);
}

// Document.ready(Book.fetchAll(bookView.initIndexPage))

$(function() {
    Book.fetchAll(bookView.initIndexPage);
})
