'use strict';

page('/', ctx => Book.fetchAll(bookView.initIndexPage));
page('/books/new', ctx => bookView.initCreateFormPage(ctx));
page('/books/:id', ctx => Book.fetchOne(ctx, bookView.initDetailPage));
// page('/books/admin', adminView.initAdminPage)
// page('/books/:book_id/update', (ctx, next) => Book.fetchOne(ctx, next), bookView.initUpdateFormPage(ctx))
page();
// page('/books/:book_id/update'
    // , (ctx,  next) => Book.fetchOne(ctx, next)
    // , ctx => bookView.initUpdateFormPage(ctx)
