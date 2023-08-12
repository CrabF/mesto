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
