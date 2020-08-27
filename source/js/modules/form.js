import createFocusTrap from '../vendor/focus-trap.min';

const openForm = document.querySelector('.nav__btn');
const overlay = document.querySelector('.feedback__overlay');
const container = overlay.querySelector('.feedback__wrap');
const inputName = container.querySelector('input[name=name]');
const inputPhone = container.querySelector('input[name=phone]');
const btnClose = container.querySelector('.feedback__btn');
const modalTitle = container.querySelector('h2');
const modalText = container.querySelector('p');
const modalBtn = container.querySelector('button');
const modalTitleInitialValue = modalTitle.textContent;
const modalTextInitialValue = modalText.textContent;
const modalBtnInitialValue = modalBtn.textContent;
const body = document.body;
const templateTitle = document.querySelector('#tmp1').textContent;
const templateText = document.querySelector('#tmp2').textContent;
const templateButton = document.querySelector('#tmp3').textContent;

const initModal = function () {
  modalTitle.textContent = templateTitle;
  modalText.textContent = templateText;
  modalBtn.textContent = templateButton;
};

const deactivateForm = function () {
  focusTrapOne.deactivate();
};

const returnInitialValue = function () {
  modalTitle.textContent = modalTitleInitialValue;
  modalText.textContent = modalTextInitialValue;
  modalBtn.textContent = modalBtnInitialValue;
};


let focusTrapOne = createFocusTrap(container, {
  initialFocus: inputName,
  fallbackFocus: inputPhone,
  escapeDeactivates: true,
  clickOutsideDeactivates: true,
  onActivate() {
    initModal();
    overlay.classList.add('js');
    //  для предотвращения скрола
    body.dataset.scrollY = self.pageYOffset;
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add('body-lock');
    btnClose.addEventListener('click', deactivateForm);
  },
  onDeactivate() {
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
    overlay.classList.remove('js');
    returnInitialValue();
    btnClose.removeEventListener('click', deactivateForm);
  },
});

if (openForm) {
  openForm.addEventListener('click', function () {
    focusTrapOne.activate();
  });
}

export {deactivateForm};
