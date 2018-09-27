class Dog {
  constructor(dogJson){
    this.id = dogJson.id;
    this.name = dogJson.name;
    this.isGoodDog = dogJson.isGoodDog;
    this.image = dogJson.image;
    allDogs.push(this)
  }

  renderName(){
    return `<span id=span-${this.id} class="dog-span" data-name=dog-${this.id}>${this.name}</span>`
  }

  renderMoreInfo(){
    if (this.isGoodDog === true){
      return `<img src=${this.image}>
      <h2 data-name=name-${this.id}>${this.name}</h2>
      <button id=isGood-${this.id}>Good Dog!</button>
      `
    } else {
      return  `<img src=${this.image}>
      <h2 data-name=name-${this.id}>${this.name}</h2>
      <button id=isGood-${this.id}>Bad Dog!</button>
      `
    }
  }

}
allDogs = [];
