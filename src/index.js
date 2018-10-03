document.addEventListener('DOMContentLoaded', () => {
  const dogBar = document.getElementById('dog-bar')
  const dogInfo = document.getElementById('dog-info')
  const dogFilter = document.getElementById('good-dog-filter')


  fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(dogData => {
      dogData.forEach(dogObj => {
        let newDog = new Dog(dogObj)
        dogBar.innerHTML += newDog.render()
      })
    })

  dogBar.addEventListener('click', event => {
    dogId = event.target.dataset.id
    selectedDog = Dog.findById(dogId)
    dogInfo.innerHTML = selectedDog.renderDetail()
  })

  dogInfo.addEventListener('click', event => {
    dogId = event.target.dataset.id
    selectedDog = Dog.findById(dogId)
    selectedDog.toggleGoodOrBad()
    dogInfo.innerHTML = selectedDog.renderDetail()

    fetch(`http://localhost:3000/pups/${selectedDog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        isGoodDog: selectedDog.good
      })
    })
  })

  dogFilter.addEventListener('click', event => {
    if (dogFilter.innerText === "Filter good dogs: OFF") {
      dogFilter.innerText = "Filter good dogs: ON"

      let goodDogs = allDogs.filter(dog => {
        return dog.good === true
      })
      dogBar.innerHTML = null
      goodDogs.forEach(dog => {
        dogBar.innerHTML += dog.render()
      })
    } else if (dogFilter.innerText === "Filter good dogs: ON") {
      dogFilter.innerText = "Filter good dogs: OFF"
      dogBar.innerHTML = null
      allDogs.forEach(dog => {
        dogBar.innerHTML += dog.render()
      })
    }
  })



}) /*end of doc*/