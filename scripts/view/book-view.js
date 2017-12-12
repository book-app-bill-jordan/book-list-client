let bookView = {};
console.log("fdf");
bookView.initIndexPage = function() {
    $('.container').hide()
    $('.book-view').show()
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
}

Document.ready(Book.fetchAll(bookView.initIndexPage))