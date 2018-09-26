class Dog{

  constructor(dogJsonObj){
    this.id = dogJsonObj.id,
    this.name = dogJsonObj.name,
    this.isGoodDog = dogJsonObj.isGoodDog,
    this.image = dogJsonObj.image,
    Dog.all.push(this)
  }

  renderDogName(){
    return `
    <span id=${this.id}>
      ${this.name}
    </span>
    `
  }

  renderDogInfo(){
    return `
    <img src="${this.image}">
    <h2>${this.name}</h2>
    <button type="button" class="good-bad" id="change-dog-${this.id}">${this.goodOrBad()}</button>
    `
  }

  toggleGoodBad(){
    if(this.isGoodDog){
      this.isGoodDog = false
    } else {
      this.isGoodDog = true
    }
  }

  goodOrBad(){
    if(this.isGoodDog){
      return "Good Dog!"
    } else {
      return "Bad Dog"
    }
  }
  // 
  // static filterGoodDogs(){
  //   Dog.all.filter((dog)=>{
  //     return dog.isGoodDog === true
  //   })
  // }

}

Dog.all = [];
