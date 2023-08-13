//Новая реализация попапа через template
//


















// const popup = document.getElementById('popup').content;

// const popupEditProfile = popup.cloneNode(true);
























//Открытие и закрытие попапа
//
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

//Рендер всех карточек
//
const initialCards = [
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
const cardsGallery = document.querySelector('.photo-gallery');

const cardsTemplate = document.getElementById('cards').content;

function render(){
  initialCards.forEach(renderCard);
}

function renderCard(item) {
  const cardsContent = cardsTemplate.cloneNode(true);
  const imageCard = cardsContent.querySelector('.photo-gallery__image');
  const titleCard = cardsContent.querySelector('.photo-gallery__description');
  titleCard.textContent = item.name;
  imageCard.src = item.link; 
  cardsGallery.append(cardsContent); 
}

render();

//Кнопка удаления
//
const deleteCardButtons = document.querySelectorAll('.photo-gallery__remove-button');

deleteCardButtons.forEach(function(item){
  item.addEventListener('click', deleteCard);
});

function deleteCard(evt){
  const evtTarget = evt.target; 
  const a = evtTarget.closest('.photo-gallery__item');
  a.remove();
}

//Кнопка like
//
const likeCardButton = document.querySelectorAll('.photo-gallery__like-button');

likeCardButton.forEach(function(item){
  item.addEventListener('click', likeCard);
});

function likeCard(evt) {
  const evtTarget = evt.target;
  evtTarget.classList.toggle('photo-gallery__like-button_active');
}

//Кнопка добавления карточки
//
// const addCardButton = document.querySelector('.profile__add-button');
// addCardButton.addEventListener('click', );

// function addCard(){

// }

//Скопируем попап и изменим его текст
//

// const copyPopup = popup.content.cloneNode(true);
// console.log(copyPopup)

// const copyPopup = document.querySelector('.popup');