import createFocusTrap from '../vendor/focus-trap.min';

const overlay = document.querySelector('.modal');
const container = document.querySelector('.modal__wrap');
const btnClose = document.querySelector('.modal__close');
const body = document.body;

const focusTrapOne = createFocusTrap(container, {
  initialFocus: btnClose,
  fallbackFocus: btnClose,
  escapeDeactivates: true,
  clickOutsideDeactivates: true,
  onActivate() {
    overlay.classList.add('modal--active');
    body.dataset.scrollY = self.pageYOffset; //  для предотвращения скрола
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add('body-lock');
    btnClose.addEventListener('click', function () {
      focusTrapOne.deactivate();
    }, {once: true});
  },
  onDeactivate() {
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
    overlay.classList.remove('modal--active');
  },
});

export default focusTrapOne;
