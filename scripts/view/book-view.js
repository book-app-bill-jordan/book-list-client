let bookView = {};

$('.icon-menu').on('click', function(){
  $('#dropdown-menu').show();
})

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
  $('.container').hide();
  $('#detail-view').show();
  $('#update-delete').show();
  $('.book-detail').empty();
  var template = Handlebars.compile($('#book-detail-template').text());
  $('#detail-view').append(template(ctx));
  $('#delete-button').on('click' , function(event) {
      Book.destroy(ctx);
    });
  $('#update-button').on('click' , function(event) {
        bookView.initUpdateFormPage(ctx)
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
   $('#update-form-view').show();
   $('#update-book-title').val(`${ctx.title}`);
   $('#update-book-author').val(`${ctx.author}`);
   $('#update-book-isbn').val(`${ctx.isbn}`);
   $('#update-book-url').val(`${ctx.image_url}`);
   $('#update-book-description').val(`${ctx.description}`);
   $('#update-form').on('submit', function(event) {
       event.preventDefault();
       let book = {
        book_id: ctx.book_id,
        title: $('#update-book-title').val(),
        author: $('#update-book-author').val(),
        isbn: $('#update-book-isbn').val(),
        image_url: $('#update-book-url').val(),
        description: $('#update-book-description').val(),
        }
   Book.update(book, book.book_id)
    })
}

bookView.initSearchFormPage = (callback) => {
    resetView();
    $('#search-view').show();
    $('#search-button').on('click', function(event) {
        event.preventDefault();
        let book ={
          title:  $('#title-input').val() || '',
          author:  $('#author-input').val() || '',
          isbn:  $('#isbn-input').val() || '',
        }
        Book.find(book, callback)
    })

}

bookView.initSearchResultsPage = () => {
    $('#search-results').show()
    var template = Handlebars.compile($('#search-list-template').text());
    Book.all.forEach(a => $('#search-results').append(template(a)));
}
