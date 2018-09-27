const Dog=(()=>{
    const lists=[]
    return class  {
      constructor(obj) {
        this.id=obj.id
        this.name=obj.name
        this.isGoodDog=obj.isGoodDog
        this.image=obj.image
        lists.push(this)
      }

       static find_by_id(id){
         return lists.find(dog=>dog.id==id)
       }

       static render_span(filter){
         let filterlists=filter?lists.filter(dog=>dog.isGoodDog):lists
         return filterlists.map(dog=>{
           return `<span class="detail" id="${dog.id}">${dog.name}</span>`
         }).join("")
       }

       render_detail() {
        let button_text=this.isGoodDog?"Good Dog!":"Bad Dog!"
        return `<img src="${this.image}" alt="">
        <h2>${this.name}</h2>
        <button data-id="${this.id}"type="button" name="button">${button_text}</button>`
        }

    }
  })()
