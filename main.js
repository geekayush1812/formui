const form = document.querySelector('#form');
const maritalStatus = document.querySelector('#maritalstatus');
const spousename = document.querySelector('#spousename');

const MARITAL_STATUS = {
  married: 'married',
  unmarried: 'unmarried',
};
const doMaritalStatusActionOn = {
  married: onMarriedSelected,
  unmarried: onUnmarriedSelected,
};

form.addEventListener('submit', onSubmitForm);
maritalStatus.addEventListener('change', onMaritalStatusChanged);

function onSubmitForm(e) {
  e.preventDefault();
  const formElements = document.forms.form.elements;
  const anyWhiteSpaceOrEmptyFieldExists =
    !checkForWhiteSpaces(formElements) || !checkForEmptyFields(formElements);
  if (anyWhiteSpaceOrEmptyFieldExists) {
    return;
  }
  animateAndShowSuccessMessage();
}
function onMaritalStatusChanged(e) {
  const targetFieldValue = e.target.value;
  doMaritalStatusActionOn[targetFieldValue]();
}

function onMarriedSelected() {
  spousename.disabled = false;
}
function onUnmarriedSelected() {
  spousename.value = '';
  spousename.disabled = true;
}
function checkForEmptyFields(formElements) {
  if (isfieldEmpty(formElements.firstname)) {
    alert('Please enter firstname');
    formElements.firstname.focus();
    return;
  }
  if (isfieldEmpty(formElements.lastname)) {
    alert('Please enter lastname');
    formElements.lastname.focus();
    return;
  }

  if (isfieldEmpty(formElements.gender)) {
    alert('Please select gender');
    return;
  }
  if (isfieldEmpty(formElements.maritalstatus)) {
    alert('Please select marital status');
    return;
  }
  if (formElements.maritalstatus.value === MARITAL_STATUS.married) {
    if (isfieldEmpty(formElements.spousename)) {
      alert('Please enter spouse name');
      formElements.spousename.focus();
      return;
    }
  }
  if (isfieldEmpty(formElements.otherdetails)) {
    alert('Please enter otherdetails');
    formElements.otherdetails.focus();
    return;
  }

  return true;
}
function checkForWhiteSpaces(formElements) {
  if (isThereAnyWhiteSpaceIn(formElements.firstname)) {
    alert('firstname should not contain any whitespaces');
    formElements.firstname.focus();
    return;
  }
  if (isThereAnyWhiteSpaceIn(formElements.lastname)) {
    alert('lastname should not contain any whitespaces');
    formElements.lastname.focus();
    return;
  }

  if (formElements.maritalstatus.value === MARITAL_STATUS.married) {
    if (isThereAnyWhiteSpaceIn(formElements.spousename)) {
      alert('spouse name should not contain any whitespaces');
      formElements.spousename.focus();
      return;
    }
  }
  return true;
}

function isfieldEmpty(field) {
  return field.value == '';
}
function isThereAnyWhiteSpaceIn(element) {
  return element.value.startsWith(' ') || element.value.endsWith(' ');
}
function fadeOut({ h1, inputContainer, actnBtnContainer }) {
  h1.classList.add('fade-out');
  inputContainer.forEach((con) => {
    con.classList.add('fade-out');
  });
  actnBtnContainer.classList.add('fade-out');
}
function shrinkAndFill({ formContainer }) {
  formContainer.classList.add('shrink-and-fill');
}
function addThankYouElement({ formContainer }) {
  const template = `
      <div class='thankyou-container'>
        <h3>Thank you</h3>
      </div>
    `;
  formContainer.insertAdjacentHTML('beforeend', template);
}

function animateAndShowSuccessMessage() {
  const formContainer = document.querySelector('.form-container');
  const h1 = document.querySelector('h1');
  const inputContainer = document.querySelectorAll('.input-container');
  const actnBtnContainer = document.querySelector('.action-btn-container');

  fadeOut({ h1, inputContainer, actnBtnContainer });
  shrinkAndFill({ formContainer });
  const animationTime = 1800;
  setTimeout(() => addThankYouElement({ formContainer }), animationTime);
}
