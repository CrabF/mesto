export class Card {
  constructor (templateSelector, name, link, openPreviewCard) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._openPreviewCard = openPreviewCard;
    this._view = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
    this._likeButton = this._view.querySelector('.photo-gallery__like-button')
  }

  render() {
    const imageCard = this._view.querySelector('.photo-gallery__image');
    const titleCard = this._view.querySelector('.photo-gallery__description');
    this._insertContent(imageCard, titleCard);
    this._setEventListeners(imageCard);
    return this._view;
  }

  _insertContent(imageCard, titleCard) {
    imageCard.src = this._link;
    imageCard.alt = this._name;
    titleCard.textContent = this._name;
  }

  _setEventListeners(imageCard) {
    this._likeButton.addEventListener('click',()=> this._likeCard());
    const deleteCardButtons = this._view.querySelector('.photo-gallery__remove-button');
    deleteCardButtons.addEventListener('click',()=> this._deleteCard());
    imageCard.addEventListener('click', ()=>{
      this._openPreviewCard({
        name: this._name,
        link: this._link
      });
      });
  }

   _deleteCard(){
    this._view.remove();
    this._view = null;
  }

   _likeCard() {
    this._likeButton.classList.toggle('photo-gallery__like-button_active');
  }
}