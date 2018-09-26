document.addEventListener("DOMContentLoaded", () => {
  const dogBar = document.querySelector("#dog-bar");
  const dogInfo = document.querySelector("#dog-info");
  const filterBtn = document.querySelector("#good-dog-filter");


  fetch("http://localhost:3000/pups")
  .then(response => response.json())
  .then(jsonObj =>
    dogBar.innerHTML = jsonObj.map((dogObj) => {
    let newDog = new Dog(dogObj);
    return newDog.renderName()
  }).join(""))

  document.addEventListener("click", () => {
    if (event.target.className === "dog-btn") {
      let dogId = parseInt(event.target.dataset.id);
      let clickedDog = allDogs.find((dog) => dog.id === dogId);
      dogInfo.innerHTML = clickedDog.renderDetail();
    }
  })

  document.addEventListener("click", () => {
    if (event.target.className === "good-bad-btn" && filterBtn.innerText === "Filter good dogs: ON") {
      let dogId = parseInt(event.target.dataset.id);
      let clickedDog = allDogs.find((dog) => dog.id === dogId);
      clickedDog.isGoodDog = !clickedDog.isGoodDog;
      if (clickedDog.isGoodDog) {
        event.target.innerText = "Good Dog!";
      } else {
        event.target.innerText = "Bad Dog!";
      }
      let goodDogs = allDogs.filter((dog) => dog.isGoodDog === true);
      dogBar.innerHTML = goodDogs.map((dog) => dog.renderName()).join("")
    }
    else if (event.target.className === "good-bad-btn"){
      let dogId = parseInt(event.target.dataset.id);
      let clickedDog = allDogs.find((dog) => dog.id === dogId);
      clickedDog.isGoodDog = !clickedDog.isGoodDog;
      if (clickedDog.isGoodDog) {
        event.target.innerText = "Good Dog!";
      } else {
        event.target.innerText = "Bad Dog!";
      }

    }
  })

  filterBtn.addEventListener("click", () => {
    if (filterBtn.innerText === "Filter good dogs: OFF") {
      filterBtn.innerText = "Filter good dogs: ON";
      let goodDogs = allDogs.filter((dog) => dog.isGoodDog === true);
      dogBar.innerHTML = goodDogs.map((dog) => dog.renderName()).join("")
    } else {
      filterBtn.innerText = "Filter good dogs: OFF";
      dogBar.innerHTML = allDogs.map((dog) => dog.renderName()).join("")
    }
  })

})
