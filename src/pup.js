pup_store = []

class Pup{
  constructor(pupObj){
    this.id = pupObj.id
    this.name = pupObj.name
    this.isGoodDog = pupObj.isGoodDog
    this.image = pupObj.image
    pup_store.push(this)
  }

  isGood(){
    if(this.isGoodDog===true){
      return ("Good Dog!")
    }else{
      return ("Bad Dog!")
    }

  }


  renderName(){
    return (`
      <span class='pup-span' id=${this.id}>${this.name}</span>
      `)
  }



  renderFull(){
    return (`
    <img src=${this.image}>
    <h2>${this.name}</h2>
    <button data-id=${this.id} class="good-button">${this.isGood()}</button>
      `)



  }

} //end class
