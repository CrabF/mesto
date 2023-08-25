function enableValidation(options) {
  const forms = document.querySelectorAll(options.formSelector);
  forms.forEach(function(formElement) {
    setEventListener(formElement);
  })
}

function setEventListener(formElement) {
  const inputs = formElement.querySelectorAll('.popup__text');
  inputs.forEach(function(input){
    input.addEventListener('input', function(){
      validateInput(input, formElement);
    })
  })
}

function validateInput(input, formElement){
  const isInputValid = input.validity.valid;
  const textError = formElement.querySelector(`#${input.name}-error`);
  const button = formElement.querySelector('.popup__save-button');
  if (!isInputValid) {
    showError(input, textError);
  } else {
    hideError(input, textError);
  }
  if (!formElement.checkValidity()) {
    disableButton(button)
  } else {
    enableButton(button)
  }
}

function showError(input, textError) {
  input.classList.add('popup__text_error');
  textError.classList.add('popup__error_visible');
  textError.textContent = input.validationMessage;
}

function hideError(input, textError) {
  input.classList.remove('popup__text_error');
  textError.classList.remove('popup__error_visible');
  textError.textContent = input.validationMessage;
}

function enableButton(button) {
  button.classList.remove('popup__save-button_disabled');
}

function disableButton(button) {
  button.classList.add('popup__save-button_disabled');
}

function resetForm(formElement) {
  const inputs = formElement.querySelectorAll('.popup__text');
  const button = formElement.querySelector('.popup__save-button');
  enableButton(button);
  inputs.forEach(function(input){
    const textError = formElement.querySelector(`#${input.name}-error`);
    hideError(input, textError);
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'
});