document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(dogData =>
      dogData.map(function(dogObj) {
        let newDog = new Dog(dogObj);
        const dogBar = document.getElementById('dog-bar')
        dogBar.innerHTML += newDog.renderNameSpan()
      })
    )
  const dogInfo = document.getElementById('dog-info')
  document.addEventListener('click', function(event) {
    if (event.target.className === "dog-btn") {
      let dogId = parseInt(event.target.dataset.id);
      let clickedDog = dogArray.find((dog) => dog.id === dogId);
      dogInfo.innerHTML = clickedDog.render();
    }
  })

  document.addEventListener('click', function(event) {
    let grabBtn = document.getElementById('good-bad-btn')
    if (event.target.id === "good-bad-btn" && grabBtn.innerText == "Good Dog!") {
      let dogId = parseInt(event.target.dataset.id);
      console.log(event)
      grabBtn.innerText = "Bad Dog!"
      Dog.isGoodDog == true


    } else {
      let grabBtn = document.getElementById('good-bad-btn')
      grabBtn.innerText = "Good Dog!"
      Dog.isGoodDog == false
    }

  })

  document.addEventListener('click', function(event) {
    const grabBtn = document.getElementById('good-dog-filter')
    const dogBar = document.getElementById('dog-bar')
    if (event.target.id === "good-dog-filter" && grabBtn.innerText == "Filter good dogs: OFF") {
      grabBtn.innerText = "Filter good dogs: ON"
      let goodDogs = dogArray.filter((dog) => dog.isGoodDog === true);
      dogBar.innerHTML = goodDogs.map((dog) => dog.renderNameSpan()).join("")
    } else {
      let grabBtn = document.getElementById('good-dog-filter')
      grabBtn.innerText = "Filter good dogs: OFF"
      dogBar.innerHTML = dogArray.map((dog) => dog.renderNameSpan()).join("")

    }

  })

})
