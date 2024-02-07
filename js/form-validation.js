const emailInput = document.querySelector('.inputEmail');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(emailInput.value)) {
    emailInput.style.borderColor = 'green';
  } else {
    emailInput.style.borderColor = 'red';
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click',() => {
  let modal = document.getElementById('form-modal');
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  
  let closeBtn = modal.querySelector('.form-modal__btn-close');
  closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = 'visible';
  });

  window.addEventListener('keydown', (btn) => {
      if (btn.key === "Escape") {
          modal.classList.remove('open');
          document.body.style.overflow = 'visible';
      }
  });

  const modalBox = modal.querySelector('.form-modal__box');
  modalBox.addEventListener('click', (event) => {
      event._isClickWithInModal = true;
  });
  modal.addEventListener('click', (event) => {
      if (event._isClickWithInModal) return;
      modal.classList.remove('open');
      document.body.style.overflow = 'visible';
  });
})