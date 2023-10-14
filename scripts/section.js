export class Section{
  constructor({items, renderer}, selector) {  
    this.items = items;
    this.renderer = renderer;
    this.section = document.querySelector(selector);
  }

  renderItems() {
    this.items.forEach((item) => {
      const renderedItem = this.renderer(item);
      this.section.append(renderedItem)
    });
  }

  addItem(element) {
    this.section.prepend(element)
  }
}