const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit');
const closeButton = popup.querySelector('.popup__close');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
  formElement.reset();
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
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

const cardsTemplate = document.getElementById('#cards');
const cardsContent = cardsTemplate.content.cloneNode(true);
cardsContent.querySelector('photo-gallery__image').src='./images/photo-gallery/alone.jpg';
cardsContent.querySelector('photo-gallery__description').textContent = 'Дюк Корморант';

parentNode.append(cardsContent); 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];