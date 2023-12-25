import { Popup } from './popup.js';
export class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector);
    this.image = this.popup.querySelector('.popup-card__image');
    this.title = this.popup.querySelector('.popup-card__title');
    this.setEventListeners()
  }

  open(title, src) {
    super.open();
    this.image.src = src;
    this.title.textContent = title;
    this.title.alt = title;
  }
}