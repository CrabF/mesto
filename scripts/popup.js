export class Popup{
  constructor(selector) {
    this.popup = document.querySelector(selector);
  }
  
  open() {
    this.popup.classList.add('popup_opened');
    this.setEventListeners()
  }

  close() {
    this.popup.classList.remove('popup_opened');
    this.buttonClosePopup.removeEventListener('click', this.rem.bind(this))
  }
    

  _handleEscClose(evt) {
    if (this.popup.classList.contains('popup_opened') && evt.key === 'Escape') {
      this.close();
    }
  }
 
   rem() {
    this.close()
  }

  setEventListeners() {
    this.buttonClosePopup = this.popup.querySelector('.close-button');
    this.buttonClosePopup.addEventListener('click', this.rem.bind(this))
    this.popup.addEventListener('click', (evt)=>{
      if (evt.target.classList.contains('popup_opened')){
        this.close();
      }
    })
    document.addEventListener('keydown', (evt)=>{
      this._handleEscClose(evt)
    });
  }
}