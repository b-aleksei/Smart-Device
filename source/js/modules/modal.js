import createFocusTrap from '../vendor/focus-trap.min';

let overlay = document.querySelector('.feedback__overlay');
let container = overlay.querySelector('.feedback__wrap');
let inputName = container.querySelector('input[name=name]');
let inputPhone = container.querySelector('input[name=phone]');
// let btnClose = document.querySelector('.modal__close');
const body = document.body;

let focusTrapOne = createFocusTrap(container, {
  initialFocus: inputName,
  fallbackFocus: inputPhone,
  escapeDeactivates: true,
  // clickOutsideDeactivates: true,
  onActivate() {
    overlay.classList.add('js');
    //  для предотвращения скрола
    body.dataset.scrollY = self.pageYOffset;
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add('body-lock');
    /*    btnClose.addEventListener('click', function () {
      focusTrapOne.deactivate();
    }, {once: true});*/
  },
  onDeactivate() {
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
    overlay.classList.remove('js');
  },
});

export default focusTrapOne;
