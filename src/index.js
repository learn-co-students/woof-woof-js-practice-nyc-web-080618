document.addEventListener("DOMContentLoaded", () => {


      const displayPuppyView = document.getElementById('dog-bar')
      const displayDetailsOfPuppy = document.getElementById('dog-info')
      //debugger
      // creating the initia puppies
      Adapter.getPups()
        .then(function(myPuppies) {
          myPuppies.forEach(function(puppy) {
            let newPuppy = new Dog(puppy)
            displayPuppyView.innerHTML += newPuppy.render()
          })
        })

      displayPuppyView.addEventListener('click', (event) => {
        if (event.target.nodeName === 'SPAN') {
          let puppyToDisplay = Dog.findPuppyById(event.target.id)
          displayDetailsOfPuppy.innerHTML = puppyToDisplay.displayDetailsOfPuppy()
        }


      })
      displayDetailsOfPuppy.addEventListener('click', (event) => {
        if (event.target.nodeName === "BUTTON") {
          let puppyToDisplay = Dog.findPuppyById(event.target.id)
          if (puppyToDisplay.isGoodDog === true) {
            Adapter.updateToBadPuppies(puppyToDisplay)
              .then(function(dog) {
                let dogToDisplay = Dog.findPuppyById(dog.id)
               dogToDisplay.isGoodDog = false
               //debugger
                displayDetailsOfPuppy.innerHTML = dogToDisplay.displayDetailsOfPuppy()
              })
          } else {
            Adapter.updateToGoodPuppies(puppyToDisplay)
              .then(function(dog) {
              //  debugger
                let dogToDisplay = Dog.findPuppyById(dog.id)
                dogToDisplay.isGoodDog = true
                displayDetailsOfPuppy.innerHTML = dogToDisplay.displayDetailsOfPuppy()
              })
          }
        }
      })


      })
