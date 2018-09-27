document.addEventListener('DOMContentLoaded', () => {

//step 1, 2
  const dogBar = document.getElementById('dog-bar')
  fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(dogData => {
      dogBar.innerHTML = dogData.map(dog => {
        let newDog = new Dog(dog);
        return newDog.renderName();
      }).join("")
    })

//step 3
  const dogInfo = document.getElementById('dog-info')
  dogBar.addEventListener("click", (event) => {
    if (event.target.className === "dog-span"){
      let dogId = Number(event.target.dataset.name.split("-")[1]);
      let dogObj = allDogs.find(dog => dog.id === dogId);
      dogInfo.innerHTML = dogObj.renderMoreInfo()
    }
  })

//step 4
  dogInfo.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON"){
      let dogId = Number(event.target.id.split('-')[1]);
      let dogObj = allDogs.find(dog => dog.id === dogId);
      dogObj.isGoodDog = !dogObj.isGoodDog;
      fetch(`http://localhost:3000/pups/${dogId}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          isGoodDog: dogObj.isGoodDog
        })
      }).then(response => response.json())

      const goodOrBad = document.getElementById(`isGood-${dogId}`)
      if (goodOrBad.innerText === "Bad Dog!"){
        goodOrBad.innerText = "Good Dog!"
      } else {
        goodOrBad.innerText = "Bad Dog!";
      }

      if (goodDogFilter.innerText === "Filter good dogs: ON"){
        let updatedNewDogs = allDogs.filter(dog => dog.isGoodDog === true);
        dogBar.innerHTML = updatedNewDogs.map(dog => dog.renderName()).join("");
      }
    }
  })

//step 5
  const goodDogFilter = document.getElementById('good-dog-filter')
  goodDogFilter.addEventListener("click", (event) => {
    if (goodDogFilter.innerText === "Filter good dogs: OFF"){
      goodDogFilter.innerText = "Filter good dogs: ON";
      let targetDogs = allDogs.filter(dog => dog.isGoodDog === true);
      dogBar.innerHTML = targetDogs.map(dog => {return dog.renderName()}).join("");
    } else {
      goodDogFilter.innerText = "Filter good dogs: OFF";
      dogBar.innerHTML = allDogs.map(dog => {return dog.renderName()}).join("");
    }
  })





})
