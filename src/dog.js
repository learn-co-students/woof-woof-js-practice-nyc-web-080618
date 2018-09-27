class Dog {

  static filter(){
    Dog.all.filter(dog => dog.isGoodDog === true)
  }

  constructor(dogObj) {
    this.id = dogObj.id;
    this.name = dogObj.name;
    this.isGoodDog = dogObj.isGoodDog;
    this.image = dogObj.image;
    Dog.all.push(this)
  }

  render() {
    return `<span class="dog-bar" onclick="detail()">${this.name}</span>`
  }

  info(){
    if(this.isGoodDog === true){
      return `<div class="dog-info">
      <img src=${this.image} class="dog-info" alt="${this.name}">
      <h3>${this.name}</h3>
      <button id="good-${this.id}">Good Dog!</button>
      </div>`
    } else {
      return `<div class="dog-info">
      <img src=${this.image} class="dog-info" alt="${this.name}">
      <h3>${this.name}</h3>
      <button id="good-${this.id}">Bad Dog!</button>
      </div>`
    }
  }


}

Dog.all = [];
