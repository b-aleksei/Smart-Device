const regExpName = /^[\s-]+$|^\s*-+|[^A-Za-zА-Яа-я\-.\s']+/;
const errorSign = document.querySelector('#tmp5');
const errorEmpty = document.querySelector('#tmp6');

const checkValidity = function (input) {
  if (!input.validity.valid) {
    input.parentElement.classList.remove('form__valid');
    input.parentElement.classList.add('form__invalid');
  } else {
    input.parentElement.classList.remove('form__invalid');
    input.parentElement.classList.add('form__valid');
  }
};

const checkValue = function (input) {
  input.setCustomValidity('');
  if (input.name === 'name') {

    if (input.value === '' && errorEmpty) {
      input.setCustomValidity(errorEmpty.textContent);
    }

    if (regExpName.test(input.value) && errorSign) {
      input.setCustomValidity(errorSign.textContent);
    }
  }

  if (input.name === 'phone') {
    let phoneLength = input.value.replace(/\D/g, '').length;
    let messageError = 'Длина номера менее 11 цифр, сейчас: ' + phoneLength;
    if (phoneLength < 11) {
      input.setCustomValidity(messageError);
    }
  }
  checkValidity(input);
};

export default checkValue;
