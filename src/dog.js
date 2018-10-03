allDogs = []

class Dog {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
    this.good = obj.isGoodDog
    this.image = obj.image
    allDogs.push(this)
  }

  static findById(dogId) {
    return allDogs.find(dog => dog.id == dogId)
  }

  render() {
    return `<span data-id=${this.id}>${this.name}</span>`
  }

  renderDetail() {
    return (`
      <img src="${this.image}">
      <h2>${this.name}</h2>
      <button data-id=${this.id} id="good-bad">${this.goodOrBad()} </button>`)
  }

  goodOrBad() {
    if (this.good) return "Good Dog!"
    else return "Bad Dog!"
  }

  toggleGoodOrBad(dog) {
    return this.good ? this.good = false : this.good = true
  }




}