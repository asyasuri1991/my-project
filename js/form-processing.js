document.addEventListener('itc.successSendForm', (e) => {
    const el = e.target.closest('.form-container').querySelector('.form-success');
    el.classList.remove('form-success_hide');
  });
  // при клике на .form-success__btn
  document.querySelector('.form-success__btn').addEventListener('click', (e) => {
    const el = e.target.closest('.form-container').querySelector('form');
    const form = ItcSubmitForm.getOrCreateInstance(el);
    form.reset();
    e.target.closest('.form-container').querySelector('.form-success').classList.add('form-success_hide');
  });
  ItcSubmitForm.getOrCreateInstance('form');
  ItcSubmitForm.getOrCreateInstance('form', {
    isCheckValidationOnClient: true, // проверять форму перед отправкой на сервер
    attachMaxItems: 5, // максимальное количество файлов, которые можно добавить к форме
    attachMaxFileSize: 512, // 512 Кбайт - максимальный размер файла
    attachExt: ['jpg', 'jpeg', 'bmp', 'gif', 'png'] // допустимые расширения файлов
  });
  define('HAS_CHECK_CAPTCHA', true);