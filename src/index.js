document.addEventListener('DOMContentLoaded', () => {
  const dogBar = document.getElementById('dog-bar')
  const dogInfo = document.getElementById('dog-info')
  const filterDog = document.getElementById('good-dog-filter')

  Adapter.getDogs().then((el) => {
    dogBar.innerHTML = el.map(dogObj => {
      let dog = new Dog(dogObj)
      return dog.render()
    }).join("")
  })



  filterDog.addEventListener('click', (event)=> {
    if(event.target.innerText === "Filter good dogs: OFF"){
      event.target.innerText = "Filter good dogs: ON"
      Adapter.getDogs().then((el) => {
        dogBar.innerHTML = el.filter(allDog => allDog.isGoodDog === true).map(dogObj => {
          let dog = new Dog(dogObj)
          return dog.render()
        }).join("")
      })
    } else {
      event.target.innerText = "Filter good dogs: OFF"
      Adapter.getDogs().then((el) => {
        dogBar.innerHTML = el.map(dogObj => {
          let dog = new Dog(dogObj)
          return dog.render()
        }).join("")
      })
    }
  })




  dogInfo.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON"){
      const targetDog = Dog.all.find(dog => `good-${dog.id}` === event.target.id)
      const targetId = targetDog.id
      // event.target.innerText = !targetDog.isGoodDog
      targetDog.isGoodDog = !targetDog.isGoodDog
      Adapter.editDogs(targetDog, targetId)
      .then(updateDog => {
        let targetButton = document.getElementById(`good-${targetId}`)
        if(updateDog.isGoodDog === true){
          targetButton.innerText = "Good Dog!"
        } else {
          targetButton.innerText = "Bad Dog!"
        }
      })



    }




  })





})

  function detail(){
    const dogInfo = document.getElementById('dog-info')
    targetName = event.target.innerText
    targetDog = Dog.all.find(dog => dog.name === targetName)
    dogInfo.innerHTML = targetDog.info();

  }
