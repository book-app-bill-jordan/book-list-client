let errorView = {};

errorView.initErrorPage(err) {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').html('');
    var template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));

}

function errorCallback(err) {
    console.log(err);
    errorView.initErrorPage(err);
}