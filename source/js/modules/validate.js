import onFocusPhoneInput from '../helpers/phoneMask';
import checkValue from '../helpers/checkValidity';
import modal from '../helpers/modal';
import {deactivateForm} from './form';

const overlay = document.querySelector('.feedback__overlay');
const forms = document.querySelectorAll('form');

const initValidation = (input) => {
  if (input.name === 'phone') {
    input.addEventListener('focus', onFocusPhoneInput);
  }
  if (input.name === 'name') {
    input.addEventListener('input', function ({target}) {
      checkValue(target);
    });
  }
};

const onSubmit = function (e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputs = form.querySelectorAll('input[data-validate]');

  if (inputs.length) {

    inputs.forEach((input) => {
      localStorage.setItem(input.name, input.value);
      input.parentElement.classList.remove('form__valid');
    });
  }

  if (overlay.classList.contains('js')) {
    deactivateForm();
    setTimeout(() => modal.activate());
  } else {
    modal.activate();
  }
  setTimeout(() => form.reset());
};

if (forms.length) {

  forms.forEach(function (form) {
    const inputs = form.querySelectorAll('input[data-validate]');

    if (inputs.length) {

      inputs.forEach((input) => {
        let value = localStorage.getItem(input.name);
        if (value) {
          input.value = value;
        }
        initValidation(input);
      });
    }
    form.addEventListener('submit', onSubmit);
  });
}
