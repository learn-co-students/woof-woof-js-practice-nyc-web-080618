document.addEventListener("DOMContentLoaded", ()=>{

const dogBar = document.getElementById("dog-bar")
const dogContainer = document.getElementById("dog-info")
const dogFilter = document.getElementById("good-dog-filter")

  //on render, display all dogs
  fetch('http://localhost:3000/pups')
    .then((response)=> {return response.json()})
    .then((dogJsonData)=>{
      console.log(dogJsonData)
      dogJsonData.forEach((dog)=>{
        let doggo = new Dog(dog)
        dogBar.innerHTML += doggo.renderDogName();
      })
    })

  //render dog info on click
  dogBar.addEventListener("click", (event)=>{
    if(event.target.tagName === "SPAN"){
      let dogId = event.target.id
      let doggo = Dog.all.find((dog)=>{
        return dog.id == dogId
      })
      dogContainer.innerHTML = doggo.renderDogInfo()
      const goodBadButton = document.querySelector(".good-bad")
      //toggle good/bad dog on click
      goodBadButton.addEventListener("click", (event)=>{
        console.log(event.target)
        let dogId = event.target.id.split("-")[2]
        console.log(dogId)
        let doggo = Dog.all.find((dog)=>{
          return dog.id == dogId
        })

        //toggle good or bad on object
        console.log(doggo)
        doggo.toggleGoodBad()
        console.log(doggo)

        //send patch request
        fetch(`http://localhost:3000/pups/${dogId}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            isGoodDog: doggo.isGoodDog
          })
        })
        .then((response)=>{return response.json()})
        .then((dogJsonObj)=>{
          dogContainer.innerHTML = doggo.renderDogInfo()
        })
      })
    }
  })

  //filter dogs on/off --- on displays only good dogs == true
  dogFilter.addEventListener("click", (event)=>{
    if(event.target.innerText === "Filter good dogs: OFF"){
      event.target.innerText = "Filter good dogs: ON"
      let goodDogs = Dog.all.filter((dog)=>{
        return dog.isGoodDog === true
      })
      console.log(goodDogs)
      dogBar.innerHTML = null
      goodDogs.forEach((dog)=>{
        dogBar.innerHTML += dog.renderDogName()
      })
    } else if (event.target.innerText === "Filter good dogs: ON"){
      event.target.innerText = "Filter good dogs: OFF"
      dogBar.innerHTML = null
      Dog.all.forEach((dog)=>{
        dogBar.innerHTML += dog.renderDogName()
      })
    }

  })



})
