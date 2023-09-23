export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'
};

export class FormValidator {
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._submitButton = formElement.querySelector(options.submitButtonSelector);
  }

  enableValidation() {
    this._disableButton();
    this._setEventListener();
  }

  _setEventListener() {
    const inputs = this._formElement.querySelectorAll(this._options.inputSelector);
    this._formElement.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      this._disableButton();
    })
    inputs.forEach((input)=>{
      input.addEventListener('input', ()=>{
      this._validateInput(input);
      })
    })
  }

   _validateInput(input){
    const isInputValid = input.validity.valid;
    const textError = this._formElement.querySelector(`#${input.name}-error`);
    if (!isInputValid) {
      this._showError(input, textError);
    } else {
      this._hideError(input, textError);
    }
    if (!this._formElement.checkValidity()) {
      this._disableButton()
    } else {
      this._enableButton()
    }
  }

  _disableButton() {
    this._submitButton.classList.add(this._options.inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true)
  }

  _enableButton() {
    this._submitButton.classList.remove(this._options.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled')
  }

  _showError(input, textError) {
    input.classList.add(this._options.inputErrorClass);
    textError.classList.add(this._options.errorClass);
    textError.textContent = input.validationMessage;
  }

  _hideError(input, textError) {
    input.classList.remove(this._options.inputErrorClass);
    textError.classList.remove(this._options.errorClass);
    textError.textContent = input.validationMessage;
  }
}