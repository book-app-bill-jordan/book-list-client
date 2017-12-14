'use strict';

page('/', ctx => Book.fetchAll(bookView.initIndexPage));
page('/books/new', ctx => bookView.initCreateFormPage(ctx));
page('/books/:id', ctx => Book.fetchOne(ctx, bookView.initDetailPage));

page();
