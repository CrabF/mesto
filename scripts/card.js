// Массив данных карточек
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

// Класс карточек

export class Card {
  constructor (templateSelector, name, link, openPreviewCard) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._openPreviewCard = openPreviewCard;
  }

  render(container) {
    this._view = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
    const imageCard = this._view.querySelector('.photo-gallery__image');
    const titleCard = this._view.querySelector('.photo-gallery__description');
    this._insertContent(imageCard, titleCard);
    container.prepend(this._view);
    this._setEventListeners(imageCard);
    return this._view;
  }

  _insertContent(imageCard, titleCard) {
    imageCard.src = this._link;
    imageCard.alt = this._name;
    titleCard.textContent = this._name;
  }

  _setEventListeners(imageCard) {
    const likeCardButton = this._view.querySelector('.photo-gallery__like-button');
    likeCardButton.addEventListener('click', this._likeCard);
    const deleteCardButtons = this._view.querySelector('.photo-gallery__remove-button');
    deleteCardButtons.addEventListener('click', this._deleteCard);
    imageCard.addEventListener('click', ()=>{
      this._openPreviewCard({
        name: this._name,
        link: this._link
      });
      });
  }

   _deleteCard(evt){
    const evtTarget = evt.target; 
    evtTarget.closest('.photo-gallery__item').remove();
  }

   _likeCard(evt) {
    const evtTarget = evt.target;
    evtTarget.classList.toggle('photo-gallery__like-button_active');
  }
}