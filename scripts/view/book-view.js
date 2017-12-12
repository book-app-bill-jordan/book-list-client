let bookView = {};

bookView.initIndexPage = function() {
    $('.container').hide()
    $('.book-view').show()
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
}

Document.ready(Book.fetchAll(bookView.initIndexPage))