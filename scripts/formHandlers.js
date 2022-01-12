import { utils } from './utils.js';
import { MARITAL_STATUS } from './constants.js';
import { DomElementSelector } from './domElementSelector.js';
import { AnimationHandlers } from './animationHandlers.js';
export const FormHandlers = {
  handleSubmit: (event) => {
    event.preventDefault();
    const formElements = document.forms.form.elements;
    const { hasWhiteSpaces, hasEmptyFields } = utils;
    if (hasWhiteSpaces(formElements) || hasEmptyFields(formElements)) return;
    AnimationHandlers.handleFormCompletion();
  },
  handleChangeMaritalStatus: (event) => {
    const maritalStatusValue = event.target.value;
    const isMarriedSelected = maritalStatusValue === MARITAL_STATUS.married;
    const isUnmarriedSelected = maritalStatusValue === MARITAL_STATUS.unmarried;

    if (isMarriedSelected) FormHandlers.handleSelectMarried();
    if (isUnmarriedSelected) FormHandlers.handleSelectUnmarried();
  },
  handleSelectMarried: () => {
    DomElementSelector.getSpouseName().disabled = false;
  },
  handleSelectUnmarried: () => {
    const spousename = DomElementSelector.getSpouseName();
    spousename.value = '';
    spousename.disabled = true;
  },
};
