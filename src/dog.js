allDogs = [];
class Dog {
  constructor(dogObj){
    this.id = dogObj.id;
    this.name = dogObj.name;
    this.isGoodDog = dogObj.isGoodDog;
    this.image = dogObj.image;
    allDogs.push(this);
  }
  renderName(){
    return `
      <span class="dog-btn" data-id="${this.id}">${this.name}</span>
    `
  }
  renderDetail(){
    if (this.isGoodDog) {
      return `
      <img src="${this.image}" alt="">
      <h2>${this.name}</h2>
      <button type="button" name="button" class="good-bad-btn" data-id="${this.id}">Good Dog!</button>
      `
    } else {
      return `
      <img src="${this.image}" alt="">
      <h2>${this.name}</h2>
      <button type="button" name="button" class="good-bad-btn" data-id="${this.id}">Bad Dog!</button>
      `
    }
  }
}
