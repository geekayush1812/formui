export const DomElementSelector = {
  getForm: () => document.querySelector('#form'),
  getMaritalStatus: () => document.querySelector('#maritalstatus'),
  getSpouseName: () => document.querySelector('#spousename'),
  getFormContainer: () => document.querySelector('.formContainer'),
  getHeading: () => document.querySelector('h1'),
  getInputContainer: () => document.querySelectorAll('.inputContainer'),
  getActionButtonContainer: () =>
    document.querySelector('.actionButtonContainer'),
};
