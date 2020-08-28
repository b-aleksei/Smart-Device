import createFocusTrap from '../vendor/focus-trap.min';

const mainContainer = document.querySelector('.feedback');
const openForm = document.querySelector('.nav__btn');
const overlay = document.querySelector('.feedback__overlay');
let container = document.querySelector('.feedback__wrap');
if (!container) {
  container = document.body;
}
const inputName = document.querySelector('input[name=name]');
const inputPhone = document.querySelector('input[name=phone]');
const btnClose = document.querySelector('.feedback__btn');
const modalTitle = document.querySelector('.feedback__wrap > h2');
const modalText = document.querySelector('.feedback__wrap > p');
const modalBtn = document.querySelector('button[type=submit]');
const templateTitle = document.querySelector('#tmp1');
const templateText = document.querySelector('#tmp2');
const templateButton = document.querySelector('#tmp3');
let modalTitleInitialValue;
let modalTextInitialValue;
let modalBtnInitialValue;
const body = document.body;

const initModal = function () {
  if (modalTitle && templateTitle) {
    modalTitleInitialValue = modalTitle.textContent;
    modalTitle.textContent = templateTitle.textContent;
  }
  if (modalText && templateText) {
    modalTextInitialValue = modalText.textContent;
    modalText.textContent = templateText.textContent;
  }
  if (modalBtn && templateButton) {
    modalBtnInitialValue = modalBtn.textContent;
    modalBtn.textContent = templateButton.textContent;
  }
};

const deactivateForm = function () {
  focusTrapOne.deactivate();
};

const returnInitialValue = function () {
  if (modalTitle && modalText && modalBtn) {
    modalTitle.textContent = modalTitleInitialValue;
    modalText.textContent = modalTextInitialValue;
    modalBtn.textContent = modalBtnInitialValue;
  }
};


let focusTrapOne = createFocusTrap(container, {
  initialFocus: inputName,
  fallbackFocus: inputPhone,
  escapeDeactivates: true,
  clickOutsideDeactivates: true,
  onActivate() {
    initModal();
    if (overlay) {
      overlay.classList.add('js');
    }
    //  для предотвращения скрола
    body.dataset.scrollY = self.pageYOffset;
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add('body-lock');
    if (btnClose) {
      btnClose.addEventListener('click', deactivateForm);
    }
  },
  onDeactivate() {
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
    if (overlay) {
      overlay.classList.remove('js');
    }
    returnInitialValue();
    if (btnClose) {
      btnClose.removeEventListener('click', deactivateForm);
    }
  },
});

if (openForm) {
  openForm.addEventListener('click', function () {
    if (mainContainer) {
      mainContainer.classList.remove('op', 'tr');
    }
    focusTrapOne.activate();
  });
}

export {deactivateForm};
