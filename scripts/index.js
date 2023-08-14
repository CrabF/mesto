//Новая реализация попапа через template
//
// 1.скопировать действующий попап
// 2. заменить название, вставить плейсхолдеры
// 3. изменить название кнопки
// 4. отчистить инпуты
// 5. инпуты принимают имя и ссылку
// 6. имя и ссылка отрисовывает новую карточку
// 7. карточка вставляется в конец существующих


// const popup = document.getElementById('popup').content;

// const popupEditProfile = popup.cloneNode(true);



//Открытие и закрытие попапа
//
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit');
const closeButton = popup.querySelector('.popup__close');

// function openPopup(){
//   popup.classList.add('popup_opened');
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileDescription.textContent;
// };

function closePopup() { 
  popup.classList.remove('popup_opened');
  formElement.reset();
};

editButton.addEventListener('click', function(){
  openPopup2('Редактировать профиль', 'Имя', 'Специальность', 'Сохранить', handleFormSubmit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

closeButton.addEventListener('click', closePopup);

//Кнопка открытия попапа добавления карточки
//
const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', function(){
  openPopup2('Новое место', 'Название', 'Ссылка на картинку', 'Создать', addCard);
});


function openPopup2(title, placeholder1, placeholder2, button, submitHandler){
  const titlePopup = popup.querySelector('.popup__title');
  titlePopup.textContent = title;
  const nameInput = popup.querySelector('#name');
  nameInput.placeholder = placeholder1;
  const linkInput = popup.querySelector('#job');
  linkInput.placeholder = placeholder2;
  const saveButton = popup.querySelector('.popup__save-button');
  saveButton.textContent = button;
  popup.classList.add('popup_opened');
  formElement.addEventListener('submit', submitHandler);
}


let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function addCard(evt) {
  evt.preventDefault();
  renderCard({name:nameInput.value,link:jobInput.value}, false);
  formElement.removeEventListener('submit', addCard);
  closePopup();
}



function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  formElement.removeEventListener('submit', handleFormSubmit);
  closePopup();
}

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

function renderCard(item, append = true) {
  const cardsContent = cardsTemplate.cloneNode(true);
  const imageCard = cardsContent.querySelector('.photo-gallery__image');
  const titleCard = cardsContent.querySelector('.photo-gallery__description');
  titleCard.textContent = item.name;
  imageCard.src = item.link;
  const likeCardButton = cardsContent.querySelector('.photo-gallery__like-button');
  likeCardButton.addEventListener('click', likeCard);
  if (append){
    cardsGallery.append(cardsContent);
  } else {
    cardsGallery.prepend(cardsContent);
  }
};

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
// const likeCardButton = document.querySelectorAll('.photo-gallery__like-button');

// likeCardButton.forEach(function(item){
//   item.addEventListener('click', likeCard);
// });

function likeCard(evt) {
  const evtTarget = evt.target;
  evtTarget.classList.toggle('photo-gallery__like-button_active');
}