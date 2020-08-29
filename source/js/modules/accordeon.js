const firstCheckbox = document.querySelector('#checkbox-1');
const secondCheckbox = document.querySelector('#checkbox-2');

if (firstCheckbox && secondCheckbox) {
  firstCheckbox.addEventListener('change', function () {
    if (firstCheckbox.checked === true) {
      secondCheckbox.checked = false;
    }
  });

  secondCheckbox.addEventListener('change', function () {
    if (secondCheckbox.checked === true) {
      firstCheckbox.checked = false;
    }
  });
}
