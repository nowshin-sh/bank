//step 1: add click event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('submit button clicked')
    //step 2: get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const email = document.getElementById('email-input').value;
    //step 3: get passwprd
    const password = document.getElementById('password-input').value;

    //DANGER: DO NOT VERIFY email password on the client side
    //step 4: Verify email and password
    if (email == 'nowshin@gmail.com' && password == 'kolaKhaina') {
        console.log('valid user');
        window.location.href = "bank.html";
    }
    else {
        alert('Invalid username or password');
    }
})