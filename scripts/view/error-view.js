let errorView = {};

errorView.initErrorPage = function(err){
    console.log('inside initerrorpage')
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    var template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));

}

