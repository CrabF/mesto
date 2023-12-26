import '../pages/index.css';
import { Card } from '../scripts/card.js'
import { UserInfo } from '../scripts/userInfo.js';
import { Section } from '../scripts/section.js';
import { PopupWithImage } from '../scripts/popupWithImage.js';
import { PopupWithForm } from '../scripts/popupWithForm.js';

//Глобальные переменные
export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error_visible'
};

const flowerRoute = new URL('../images/photo-gallery/tramTracks.jpg', import.meta.url);
const snowCover = new URL('../images/photo-gallery/whiteTree.jpg', import.meta.url);
const Magnolia = new URL('../images/photo-gallery/magnolia.jpg', import.meta.url);
const sky = new URL('../images/photo-gallery/cloudyEvening.jpg', import.meta.url);
const breakfast = new URL('../images/photo-gallery/horse.jpg', import.meta.url);
const plateau = new URL('../images/photo-gallery/alone.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Цветущий маршрут',
    link: flowerRoute
  },
  {
    name: 'Снежное покрывало',
    link: snowCover
  },
  {
    name: 'Магнолия',
    link: Magnolia
  },
  {
    name: 'Небо города',
    link: sky
  },
  {
    name: 'Завтрак',
    link: breakfast
  },
  {
    name: 'Плато Лаго-Наки',
    link: plateau
  }
];

//Открытие и закрытие попапа редактирования
//

const editButton = document.querySelector('.profile__edit');
const profileInput = document.querySelector('#editPopup #name');
const descriptionInput = document.querySelector('#editPopup #job');

const userInfo = new UserInfo({selectorName: '.profile__name', selectorDescription: '.profile__description'});
editButton.addEventListener('click', ()=>{  
  popupEditOpened.open();
  const {name, description} = userInfo.getUserInfo();
  profileInput.value = name;
  descriptionInput.value = description;
});

const popupEditOpened = new PopupWithForm('#editPopup', (formData)=> {
  userInfo.setUserInfo({name: formData.personalName, description: formData.qualification});
  popupEditOpened.close();
})

//Открытие и закрытие попапа добавления карточки
//

const popupAddCardOpened = new PopupWithForm('#popupAddCard', (formData)=>{
  const newCard = createCard(formData.cardTitle, formData.cardLink);
  cardsSection.addItem(newCard.render());
}) 
const buttonAddCard = document.querySelector('.profile__add-button');

buttonAddCard.addEventListener('click', ()=>{
  popupAddCardOpened.open();
})

//Открытие и закрытие попапа просмотра карточки
//

const openPopupWithImage = new PopupWithImage('#previewPopup');

function handleCardClick(item) {
  openPopupWithImage.open(item.name, item.link);
}

//Создание карточек
//

function createCard(name, link){
  return new Card('#cards', name, link, handleCardClick) 
}

const cardsSection = new Section({
  items: initialCards, 
  renderer: item => createCard(item.name, item.link).render()
  }, '.photo-gallery')

cardsSection.renderItems();