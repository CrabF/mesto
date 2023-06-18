const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit');
const closeButton = popup.querySelector('.popup__close');

function openPopup() {
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopup);