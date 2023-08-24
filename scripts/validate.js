// включение валидации вызовом enableValidation
// все настройки передаются при вызове

function enableValidation(options) {
  const forms = document.querySelectorAll(options.formSelector);

  forms.forEach(function(item) {
    const inputs = item.querySelectorAll(options.inputSelector);
    const button = item.querySelector(options.submitButtonSelector);
    inputs.forEach(function(input){
      input.addEventListener('input', function(evt){
        validateInput(evt, options)
      })
    })
  })
}

function validateInput(evt, options){
  const targetInput = evt.target;
  const textError = evt.target.nextElementSibling;
  if (!targetInput.validity.valid) {
    targetInput.classList.add(options.inputErrorClass);
    textError.classList.add(options.errorClass);
    textError.textContent = targetInput.validationMessage;
  } else {
    targetInput.classList.remove(options.inputErrorClass);
    textError.classList.remove(options.errorClass);
  }
}




enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'   //text errro//
});

