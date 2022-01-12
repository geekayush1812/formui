import { DomElementSelector } from './domElementSelector.js';

export const AnimationHandlers = {
  handleFormCompletion: () => {
    const formContainer = DomElementSelector.getFormContainer();
    const heading = DomElementSelector.getHeading();
    const inputContainer = DomElementSelector.getInputContainer();
    const actionButtonContainer = DomElementSelector.getActionButtonContainer();

    AnimationHandlers.fadeOut({
      heading,
      inputContainer,
      actionButtonContainer,
    });
    AnimationHandlers.shrinkAndFill({ formContainer });
    formContainer.addEventListener('transitionend', (e) => {
      if (e.propertyName == 'max-height') {
        AnimationHandlers.addThankYouElement({ formContainer });
      }
    });
  },
  fadeOut: ({ heading, inputContainer, actionButtonContainer }) => {
    heading.classList.add('fadeOut');
    inputContainer.forEach((element) => {
      element.classList.add('fadeOut');
    });
    actionButtonContainer.classList.add('fadeOut');
  },
  shrinkAndFill: ({ formContainer }) => {
    formContainer.classList.add('shrinkAndFill');
  },
  addThankYouElement: ({ formContainer }) => {
    const template = `
      <div class='thankyouContainer'>
        <h3>Thank you</h3>
      </div>
    `;
    formContainer.insertAdjacentHTML('beforeend', template);
  },
};
