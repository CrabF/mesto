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

// // теперь картинки можно импортировать,
// // вебпак добавит в переменные правильные пути
// const jordanImage = new URL('./images/jordan.jpg', import.meta.url);
// const jamesImage = new URL('./images/james.jpg', import.meta.url);
// const bryantImage = new URL('./images/bryant.jpg', import.meta.url)

// const whoIsTheGoat = [
//   // меняем исходные пути на переменные
//   { name: 'Michael Jordan', link: jordanImage },
//   { name: 'Lebron James', link: jamesImage },
//   { name: 'Kobe Bryant', link: bryantImage },
// ];

export const initialCards = [
  {
    name: 'Цветущий маршрут',
    link: '../images/photo-gallery/tramTracks.jpg'
  },
  {
    name: 'Снежное покрывало',
    link: '../images/photo-gallery/whiteTree.jpg'
  },
  {
    name: 'Магнолия',
    link: '../images/photo-gallery/magnolia.jpg'
  },
  {
    name: 'Небо города',
    link: '../images/photo-gallery/cloudyEvening.jpg'
  },
  {
    name: 'Завтрак',
    link: '../images/photo-gallery/horse.jpg'
  },
  {
    name: 'Плато Лаго-Наки',
    link: '../images/photo-gallery/alone.jpg'
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