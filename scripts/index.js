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
const closeEditButton = editPopup.querySelector('.close-button');


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

closeEditButton.addEventListener('click', function(){
  closePopup(editPopup);
});

//Открытие и закрытие попапа добавления карточки
//

const addCardPopup = document.querySelector('#addCardPopup');
const addCardButton = document.querySelector('.profile__add-button');
const formAddCardElement = addCardPopup.querySelector('.popup__form');
const titleInput = formAddCardElement.querySelector('#title');
const linkInput = formAddCardElement.querySelector('#link');
const closeAddCardButton = addCardPopup.querySelector('.close-button');

addCardButton.addEventListener('click', function(){
  openPopup(addCardPopup);
})

formAddCardElement.addEventListener('submit', function(evt){
  evt.preventDefault();
  const card = renderCard({
    name: titleInput.value,
    link: linkInput.value
  });
  prependCard(card);
  formAddCardElement.reset();
  closePopup(addCardPopup);
});

closeAddCardButton.addEventListener('click', function(){
  closePopup(addCardPopup);
});

//Открытие и закрытие попапа просмотра карточки
//

const previewPopup = document.querySelector('#previewPopup');
const previewPopupImage = previewPopup.querySelector('.popup-card__image');
const previewPopupTitle = previewPopup.querySelector('.popup-card__title');
const previewCardCloseButton = previewPopup.querySelector('.close-button');
previewCardCloseButton.addEventListener('click', function(){
  closePopup(previewPopup);
});

function openPreviewCard(item) { 
  previewPopupImage.src = item.link;
  previewPopupImage.alt = item.name;
  previewPopupTitle.textContent = item.name;
  openPopup(previewPopup);
};

//Рендер всех карточек
//
const cardsGallery = document.querySelector('.photo-gallery');
const cardsTemplate = document.getElementById('cards').content;

function render(){
  initialCards.forEach(function(item){
    const card = renderCard(item);
    prependCard(card);
  });
}

function renderCard(item) {
  const cardsContent = cardsTemplate.cloneNode(true);
  const imageCard = cardsContent.querySelector('.photo-gallery__image');
  const titleCard = cardsContent.querySelector('.photo-gallery__description');
  titleCard.textContent = item.name;
  imageCard.alt = item.name;
  imageCard.src = item.link;
  const likeCardButton = cardsContent.querySelector('.photo-gallery__like-button');
  likeCardButton.addEventListener('click', likeCard);
  const deleteCardButtons = cardsContent.querySelector('.photo-gallery__remove-button');
  deleteCardButtons.addEventListener('click', deleteCard);
  imageCard.addEventListener('click', function(){
    openPreviewCard(item);
  });
  return cardsContent;
};

render();

function prependCard(card){
  cardsGallery.prepend(card)
};

//Кнопка удаления
//
function deleteCard(evt){
  const evtTarget = evt.target; 
  const a = evtTarget.closest('.photo-gallery__item');
  a.remove();
}

//Кнопка like
//

function likeCard(evt) {
  const evtTarget = evt.target;
  evtTarget.classList.toggle('photo-gallery__like-button_active');
}