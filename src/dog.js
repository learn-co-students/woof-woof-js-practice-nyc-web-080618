class Dog{
  constructor(dogJson){
    this.id = dogJson.id
    this.name = dogJson.name
    this.isGoodDog = dogJson.isGoodDog
    this.image = dogJson.image
    Dog.all.push(this);
  }

  render(){
    let goodDog = this.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
    return(
      `
      <img src=${this.image}>
      <h2>${this.name}</h2>
      <button class="good-dog" id="dog-${this.id}">${goodDog}</button>
      `
    )
  }

  static find(id){
    //You can create functions that will make your lives easier
    //I use this to search through my instances and operate on them
    return Dog.all.find((dog) => {
      return dog.id == id
    })
  }

  static getGoodBoys(){
    return Dog.all.filter( dog => {
      return dog.isGoodDog === true
    })
  }

}

Dog.all = []
