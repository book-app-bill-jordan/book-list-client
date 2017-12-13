'use strict';

// page('/api/v1/books/', Book.fetchAll(bookView.initIndexPage));
page('/api/v1/books/new', ctx => bookView.initAddForm(ctx));
page('/books/:id', ctx => Book.fetchOne(ctx, bookView.initDetailPage));

page();
