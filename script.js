const myForm = document.querySelector('form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myZip = document.querySelector('#zip');
const myPassword = document.querySelector('#password');
const myConfirm = document.querySelector('#confirm');
let passwordMatches = false;

myForm.addEventListener('submit', (e) => {
  e.preventDefault;
  if (!myForm.checkValidity() || !passwordMatches) {
    checkFormValidity();
  }
  if (myForm.checkValidity && passwordMatches) {
    document.querySelectorAll('form>fieldset>p').textContent = '';
    document.querySelector('#final-result').textContent =
      'Successfully submitted!';
    myForm.reset();
  }
});

function checkFormValidity() {
  const checkName = () => {
    if (!myName.checkValidity()) {
      if (myName.validity.tooShort) {
        document.querySelector('#name-text').textContent =
          'Name must consist of more than three characters!';
      } else if (myName.validity.valueMissing) {
        document.querySelector('#name-text').textContent =
          'Please fill the name field!';
      }
    } else {
      document.querySelector('#name-text').textContent = '';
    }
  };

  const checkEmail = () => {
    if (!myEmail.checkValidity()) {
      if (myEmail.validity.typeMismatch) {
        document.querySelector('#email-text').textContent =
          'Invalid email format!';
      } else if (myEmail.validity.valueMissing) {
        document.querySelector('#email-text').textContent =
          'Please fill the email field!';
      }
    } else {
      document.querySelector('#email-text').textContent = '';
    }
  };
  const checkZip = () => {
    if (!myZip.checkValidity()) {
      if (myZip.validity.patternMismatch) {
        document.querySelector('#zip-text').textContent =
          'Invalid zip code format';
      } else if (myZip.validity.valueMissing) {
        document.querySelector('#zip-text').textContent =
          'Please fill the zip code field!';
      }
    } else {
      document.querySelector('#zip-text').textContent = '';
    }
  };
  const checkPassword = () => {
    if (!myPassword.checkValidity()) {
      if (myPassword.validity.tooShort) {
        document.querySelector('#password-text').textContent =
          'Enter a stronger password with at least 5 characters/digits';
      } else if (myPassword.validity.valueMissing) {
        document.querySelector('#password-text').textContent =
          'Please enter a new password';
      }
    } else {
      document.querySelector('#password-text').textContent = '';
    }
  };
  const checkConfirmPassword = () => {
    checkPassword();
    if (myPassword.checkValidity()) {
      if (myConfirm.validity.valueMissing) {
        document.querySelector('#confirm-text').textContent =
          'Please confirm your password!';
      } else if (myPassword.value !== myConfirm.value) {
        document.querySelector('#confirm-text').textContent =
          "Password does't match!";
      } else if (myPassword.value === myConfirm.value) {
        document.querySelector('#confirm-text').textContent = '';
        passwordMatches = true;
      }
    }
  };

  checkName();
  checkEmail();
  checkZip();
  checkConfirmPassword();
}
