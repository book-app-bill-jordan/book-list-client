let bookView = {};

Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}

bookView.initIndexPage = function() {
    console.log('inside initindexpage')
    // $('.container').hide()
    // $('#form-view').hide();
    $('.book-view').show()
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    $('.book-stats').text(Book.all.length);
}

bookView.initDetailPage = function(ctx) {
  console.log('inside detail page');
  console.log(ctx)
  $('.container').hide();
  $('#detail-view').show();
  var template = Handlebars.compile($('#book-detail-template').text());
  console.log(template(ctx))
  $('#detail-view').append(template(ctx));
//   return template(ctx);
}

// bookView.initAddForm = function() {
//     // $('.container').hide();
//     $('#form-view').show();
// }
$('#new-form').on('submit', bookView.create)

bookView.create = () => {
    console.log('inside create')
    let book;
    // $('#articles').empty();
  
    book = new Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      authorUrl: $('#book-url').val(),
      category: $('#article-category').val(),
      description: $('#book-description').val(),
    });
    $('.book-list').append(book.toHtml());
};
// Document.ready(Book.fetchAll(bookView.initIndexPage))

$(function() {
    Book.fetchAll(bookView.initIndexPage);
})
