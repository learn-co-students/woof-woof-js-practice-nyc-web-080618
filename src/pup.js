const allPups = []
class Pup{
  constructor({id,name,isGoodDog,image}){
    this.id = id
    this.name = name
    this.isGoodDog = isGoodDog
    this.image = image
    allPups.push(this)
  }

  renderDogBar(){
    return `<span data-id=${this.id}>${this.name}</span>`
  }

  renderDogInfo(){
    let isGoodDog = ""
    if(this.isGoodDog){
      isGoodDog = 'Good Dog!'
    }else{
      isGoodDog = 'Bad Dog'
    }
    return `<img src=${this.image}>
    <h2>${this.name}</h2><button id='is-good-dog' data-id='${this.id}'>${isGoodDog}</button>`
  }

  static filterGoodPups(){
    return allPups.filter(pup => pup.isGoodDog === true)
  }
}
