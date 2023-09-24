import {FormValidator} from './formValidator.js'
import {Card} from './card.js'

//Глобальные переменные
export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
  {
    name: 'Цветущий маршрут',
    link: './images/photo-gallery/tramTracks.jpg'
  },
  {
    name: 'Снежное покрывало',
    link: './images/photo-gallery/whiteTree.jpg'
  },
  {
    name: 'Магнолия',
    link: './images/photo-gallery/magnolia.jpg'
  },
  {
    name: 'Небо города',
    link: './images/photo-gallery/cloudyEvening.jpg'
  },
  {
    name: 'Завтрак',
    link: './images/photo-gallery/horse.jpg'
  },
  {
    name: 'Плато Лаго-Наки',
    link: './images/photo-gallery/alone.jpg'
  }
];

function closePopup(popup) { 
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', handleClickOverlay);
  document.removeEventListener('keydown', handleClosePopupByEscape)
};

function handleClickOverlay(evt){
  if (evt.target.classList.contains('popup')){
    closePopup(evt.target);
  }
}

function handleClosePopupByEscape(evt){
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup){
  popup.classList.add('popup_opened');
  popup.addEventListener('click', handleClickOverlay);
  document.addEventListener('keydown', handleClosePopupByEscape)
}
//Открытие и закрытие попапа редактирования
//

const editPopup = document.querySelector('#editPopup');
const editButton = document.querySelector('.profile__edit');
const formEditElement = editPopup.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('#name');
const jobInput = formEditElement.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const buttonClosePopupProfile = editPopup.querySelector('.close-button');


editButton.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(editPopup);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(editPopup);
}

formEditElement.addEventListener('submit', handleEditFormSubmit);

buttonClosePopupProfile.addEventListener('click', function(){
  closePopup(editPopup);
});

//Открытие и закрытие попапа добавления карточки
//

const popupAddCard = document.querySelector('#popupAddCard');
const buttonAddCard = document.querySelector('.profile__add-button');
const formAddCardElement = popupAddCard.querySelector('.popup__form');
const titleInput = formAddCardElement.querySelector('#title');
const linkInput = formAddCardElement.querySelector('#link');
const buttonClosePopupAddCard = popupAddCard.querySelector('.close-button');

buttonAddCard.addEventListener('click', function(){
  openPopup(popupAddCard);
})

formAddCardElement.addEventListener('submit', function(evt){
  evt.preventDefault();
  const newCard = createCard(titleInput.value, linkInput.value);
  cardsGallery.prepend(newCard.render());
  formAddCardElement.reset();
  closePopup(popupAddCard);
});

buttonClosePopupAddCard.addEventListener('click', function(){
  closePopup(popupAddCard);
});

//Открытие и закрытие попапа просмотра карточки
//

const previewPopup = document.querySelector('#previewPopup');
const previewPopupImage = previewPopup.querySelector('.popup-card__image');
const previewPopupTitle = previewPopup.querySelector('.popup-card__title');
const buttonClosePreviewPopup = previewPopup.querySelector('.close-button');
buttonClosePreviewPopup.addEventListener('click', function(){
  closePopup(previewPopup);
});

function openPreviewCard(item) { 
  previewPopupImage.src = item.link;
  previewPopupImage.alt = item.name;
  previewPopupTitle.textContent = item.name;
  openPopup(previewPopup);
};

const cardsGallery = document.querySelector('.photo-gallery');

//Создание карточек 
function createCard(name, link){
  return new Card('#cards', name, link, openPreviewCard)
}

initialCards.forEach((item)=>{
  const newCard = createCard(item.name, item.link);
  cardsGallery.append(newCard.render());
})

//Валидация карточек
const formElements = document.querySelectorAll('.popup__form');
formElements.forEach((form)=>{
  const classValidate = new FormValidator(formSelectors, form);
  classValidate.enableValidation();
})