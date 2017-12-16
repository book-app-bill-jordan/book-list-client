'use strict';

page('/', ctx => Book.fetchAll(bookView.initIndexPage));
page('/books/new', ctx => bookView.initCreateFormPage(ctx));
page('/books/find', ctx => bookView.initSearchFormPage(ctx, bookView.initSearchResultsPage));
page('/books/:id', ctx => Book.fetchOne(ctx, bookView.initDetailPage));
page('/books/find/:isbn', ctx => Book.findOne(ctx, bookView.initIndexPage))
// page('/books/admin', adminView.initAdminPage)
// page('/books/:book_id/update', (ctx, next) => Book.fetchOne(ctx, next), bookView.initUpdateFormPage(ctx))

page();
// page('/books/:book_id/update'
    // , (ctx,  next) => Book.fetchOne(ctx, next)
    // , ctx => bookView.initUpdateFormPage(ctx)
