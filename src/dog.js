class Dog {
  constructor(dogObj) {
    this.id = dogObj.id
    this.name = dogObj.name
    this.isGoodDog = dogObj.isGoodDog
    this.image = dogObj.image
    dogArray.push(this)
  }

  renderNameSpan(){
    return `
      <span id="${this.name}" class="dog-btn" data-id="${this.id}">${this.name}</span>
    `
  }

  render() {
    return (
      `<img src=${this.image}>
       <h2>${this.name}</h2>
       <button id="good-bad-btn" data-id="${this.id}">Good Dog!</button>`
    )
  }

 displayDog(dog){
  const dogInfo = document.getElementById('dog-info')
  dogInfo.innerHTML = dog.render()
}

  static find(id) {
    return dogArray.find(function(dog) {
      return dog.id == id
    })
  }


  static isGoodBoy(){
    grabBtn.innerText = "Bad Dog!" && this.isGoodDog == true
  }
}
let dogArray = []
