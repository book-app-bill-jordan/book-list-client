let bookView = {};

Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}

bookView.initIndexPage = function() {
    resetView();
    $('#book-list').empty();
    $('#book-list').show();
    $('.book-view').show();
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    $('.book-stats').text(Book.all.length);
}

bookView.initDetailPage = function(ctx) {
    console.log(ctx)
    // resetView(); use this!
//   console.log('inside detail page');
//    console.log(ctx)
  $('.container').hide();
  $('#detail-view').show();
  $('#update-delete').show();
  $('.book-detail').empty();
  var template = Handlebars.compile($('#book-detail-template').text());
//   console.log(template(ctx))
  $('#detail-view').append(template(ctx));
//   return template(ctx);
  $('#delete-button').on('click' , function(event) {
     
      
      Book.prototype.destroy(ctx);
    });
}

// bookView.initAddForm = function() {
//     // $('.container').hide();
//     $('#form-view').show();
// }
// $('#new-form').on('submit', bookView.create)

bookView.initCreateFormPage = () => {
    resetView();
    $('#form-view').show();
    $('#new-form').on('submit', function(event) {
        event.preventDefault();
        let book = new Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            authorUrl: $('#book-url').val(),
            category: $('#article-category').val(),
            description: $('#book-description').val(),
        });
        Book.create(book)
    });
}

