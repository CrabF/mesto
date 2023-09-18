function enableValidation(options) {
  const forms = document.querySelectorAll(options.formSelector);
  forms.forEach(function(formElement) {
    const button = formElement.querySelector(options.submitButtonSelector);
    disableButton(options, button);
    setEventListener(options, formElement, button);
  })
}

function setEventListener(options, formElement, button) {
  const inputs = formElement.querySelectorAll(options.inputSelector);
  formElement.addEventListener('submit', function(evt){
    evt.preventDefault();
    disableButton(options, button);
  })
  inputs.forEach(function(input){
    input.addEventListener('input', function(){
      validateInput(options, formElement, input, button);
    })
  })
}

function validateInput(options, formElement, input, button){
  const isInputValid = input.validity.valid;
  const textError = formElement.querySelector(`#${input.name}-error`);
  if (!isInputValid) {
    showError(options, input, textError);
  } else {
    hideError(options, input, textError);
  }
  if (!formElement.checkValidity()) {
    disableButton(options, button)
  } else {
    enableButton(options, button)
  }
}

function showError(options, input, textError) {
  input.classList.add(options.inputErrorClass);
  textError.classList.add(options.errorClass);
  textError.textContent = input.validationMessage;
}

function hideError(options, input, textError) {
  input.classList.remove(options.inputErrorClass);
  textError.classList.remove(options.errorClass);
  textError.textContent = input.validationMessage;
}

function enableButton(options, button) {
  button.classList.remove(options.inactiveButtonClass);
  button.removeAttribute('disabled')
}

function disableButton(options, button) {
  button.classList.add(options.inactiveButtonClass);
  button.setAttribute('disabled', true)
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'
});