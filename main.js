const formValidator = (function() {

    const emailField = document.querySelector('#user-email');
    const errorMsg = document.querySelector('.error-msg');
    const submitButton = document.querySelector('#submit-btn');

    const checkEmail = function() {

        errorMsg.removeAttribute('class');
        
        if (!emailField.checkValidity() && emailField.value) {
            
            errorMsg.classList.add('error-format');

        } else {

            emailField.removeAttribute('placeholder');
            errorMsg.classList.add('error-empty');

        }

        console.log(emailField.value);
    }

    submitButton.addEventListener('click', checkEmail);
    emailField.addEventListener('keyup', checkEmail);

})();