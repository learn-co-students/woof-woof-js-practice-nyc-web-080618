
class Dog {
  constructor(obj) {
    this.name = obj.name
    this.isGoodDog = obj.isGoodDog
    this.image = obj.image
    this.id = obj.id
    Dog.all.push(this)
  }

  static find(id){
    return Dog.all.find((dog) => {
      return dog.id == id
    })
  }

} //end of class
  Dog.all = []
