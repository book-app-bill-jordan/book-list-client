'use strict';

page('/', ctx => Book.fetchAll(bookView.initIndexPage));
page('/books/new', ctx => bookView.initCreateFormPage(ctx));
page('/books/find', ctx => bookView.initSearchFormPage(ctx, bookView.initSearchResultsPage));
page('/books/:id', ctx => Book.fetchOne(ctx, bookView.initDetailPage));
page('/books/find/:isbn', ctx => Book.findOne(ctx, bookView.initIndexPage))

page();
