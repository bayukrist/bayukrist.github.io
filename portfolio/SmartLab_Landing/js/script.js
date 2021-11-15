$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').css('color', 'white');
        $(this).css('color', '#F8CD4F');
    });

    $('.navbar-brand').click(function () {
        $('.nav-link').css('color', 'white');
    });
});


function logIn() {
    let userEmail = document.querySelector('#inputEmail0').value;
    let userPass = document.querySelector('#inputPassword0').value;
    if (!userEmail || !userPass) {
        window.alert('Please enter your email and password !');
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error',
            text: 'Please enter your email and password !',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        window.location.href = 'indexDashboard.html';
    }
}