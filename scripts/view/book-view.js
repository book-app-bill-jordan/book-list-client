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
  $('#update-button').on('click' , function(event) {
        bookview.initUpdateFormPage(ctx)
    })
}

bookView.initCreateFormPage = () => {
    resetView();
    $('#form-view').show();
    $('#book-submit').on('click', function(event) {
        event.preventDefault();
        let book = new Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            isbn: $('#book-isbn').val(),
            image_url: $('#book-url').val(),
            description: $('#book-description').val(),
        });
        Book.create(book)
    });
}

bookView.initUpdateFormPage = (ctx) => {
   resetView();
//    console.log(ctx)
//    $('update-form-view').show();
//    $('#update-book-title').val(),
//    $('#update-book-author').val(),
//    $('#update-book-isbn').val(),
//    $('#update-book-url').val(),
//    $('#update-book-description').val(),
   $('update-form').on('submit', function(event) {
       event.preventDefault();
       let book = new Book({
        title: $('#book-title').val(),
        author: $('#book-author').val(),
        isbn: $('#book-isbn').val(),
        image_url: $('#book-url').val(),
        description: $('#book-description').val(),
        })
   Book.prototype.update(book)
    })
}