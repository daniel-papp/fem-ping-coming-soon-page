const formValidator = (function() {

    const emailField = document.querySelector('#user-email');
    const submitButton = document.querySelector('#submit-btn');

    const checkEmail = function() {
        
        if (!emailField.checkValidity()) emailField.removeAttribute('placeholder');

    }

    submitButton.addEventListener('click', checkEmail);

})();