
class Dog {
  constructor(json){
    this.id = json.id
    this.name = json.name
    this.isGoodDog = json.isGoodDog
    this.image = json.image
    Dog.all.push(this)
  }


  render(){
    let value = `<span id="${this.id}">${this.name}</span>`
    return value;
  }

  displayDetailsOfPuppy(){
    if(this.isGoodDog === true){
      var dogStatus = "Is good dog!"
    } else {
      var dogStatus = "Is bad dog!"
    }
    let value =
    `<h2>${this.name}</h2><br>
    <img src="${this.image}"><br>
    <button id=${this.id}>${dogStatus}!</button>
    `
    return value
  }




  static findPuppyById(id){
    return Dog.all.find((dog) => {
      return dog.id == id
    })
  }
}

Dog.all = []
