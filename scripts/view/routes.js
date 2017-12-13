'use strict';

// page('/', Book.fetchAll(bookView.initIndexPage));
// page('/tasks/add', ctx => app.taskView.initAddForm(ctx));
page('/api/v1/books/:id', ctx => Book.fetchOne(ctx, Book.initDetailPage));

page();
