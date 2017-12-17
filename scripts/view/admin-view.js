let adminView = {};

let password = 5678;

adminView.initAdminPage = function() {
    resetView();
    $('#admin-field').show();
    $('.password-form').on('submit', function() {
        event.preventDefault()
        let token = event.target.passphrase.value
       if ($('#password-input').val() === password) {
           localStorage.setItem('admin', 'true')
       }
    })
}

// adminView.verify = function() {
//     if (!localStorage.token) $('.admin') {
        
//     }
// }