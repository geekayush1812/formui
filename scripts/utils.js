import { MARITAL_STATUS } from './constants.js';

export const utils = {
  hasWhiteSpaces: (formElements) => {
    const { firstname, lastname, spousename, maritalstatus } = formElements;
    const { hasWhiteSpace, alertForWhiteSpaceAndFocus } = utils;
    if (hasWhiteSpace(firstname)) {
      alertForWhiteSpaceAndFocus(firstname, 'firstname');
      return true;
    }
    if (hasWhiteSpace(lastname)) {
      alertForWhiteSpaceAndFocus(lastname, 'lastname');
      return true;
    }
    const isMarriedFieldSelected =
      maritalstatus.value === MARITAL_STATUS.married;
    if (isMarriedFieldSelected && hasWhiteSpace(spousename)) {
      alertForWhiteSpaceAndFocus(spousename, 'spouse name');
      return true;
    }
    return false;
  },
  hasEmptyFields: (formElements) => {
    const {
      firstname,
      lastname,
      otherdetails,
      gender,
      maritalstatus,
      spousename,
    } = formElements;
    const { isEmpty, alertForEmptyFieldAndFocus } = utils;

    if (isEmpty(firstname)) {
      alertForEmptyFieldAndFocus(firstname, 'enter', 'firstname');
      return true;
    }
    if (isEmpty(lastname)) {
      alertForEmptyFieldAndFocus(lastname, 'enter', 'lastname');
      return true;
    }
    if (isEmpty(gender)) {
      alert('Please select gender');
      return true;
    }
    if (isEmpty(maritalstatus)) {
      alert('Please select marital status');
      return true;
    }
    const isMarriedFieldSelected =
      maritalstatus.value === MARITAL_STATUS.married;
    if (isMarriedFieldSelected && isEmpty(spousename)) {
      alertForEmptyFieldAndFocus(spousename, 'enter', 'spouse name');
      return true;
    }
    if (isEmpty(otherdetails)) {
      alertForEmptyFieldAndFocus(otherdetails, 'enter', 'other details');
      return true;
    }
    return false;
  },
  alertForWhiteSpaceAndFocus: (element, fieldName) => {
    alert(`${fieldName} should not contain any whitespaces`);
    element.focus();
  },
  alertForEmptyFieldAndFocus: (element, prefix, fieldName) => {
    alert(`Please ${prefix} ${fieldName}`);
    element.focus();
  },
  isEmpty: (field) => {
    return field.value == '';
  },
  hasWhiteSpace: (field) => {
    return field.value.startsWith(' ') || field.value.endsWith(' ');
  },
  pickObjectKeys: (object, ...keys) => {
    const pickedKeysObject = {};
    for (let i = 0; i < keys.length; i++) {
      if (object.hasOwnProperty(keys[i])) {
        pickedKeysObject[keys[i]] = object[keys[i]];
      }
    }
    return pickedKeysObject;
  },
};
