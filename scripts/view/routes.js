'use strict';

// page('/', Book.fetchAll(bookView.initIndexPage));
page('/api/v1/books/add', taskView.initAddForm());
page('/api/v1/books/:id', ctx => Book.fetchOne(ctx, Book.initDetailPage));

page();
