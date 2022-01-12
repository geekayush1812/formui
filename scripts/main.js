import { DomElementSelector } from './domElementSelector.js';
import { FormHandlers } from './formHandlers.js';

DomElementSelector.getForm().addEventListener(
  'submit',
  FormHandlers.handleSubmit
);
DomElementSelector.getMaritalStatus().addEventListener(
  'change',
  FormHandlers.handleChangeMaritalStatus
);
