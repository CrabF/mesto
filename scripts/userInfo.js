export class UserInfo{
  constructor({selectorName, selectorDescription}) {
    this.profileName = document.querySelector(selectorName);
    this.profileDescription = document.querySelector(selectorDescription);
  }

  getUserInfo() {
   return {name: this.profileName.textContent, description: this.profileDescription.textContent}
  }

  setUserInfo({name, description}) {
    this.profileName.textContent = name; 
    this.profileDescription.textContent = description;
  }
}