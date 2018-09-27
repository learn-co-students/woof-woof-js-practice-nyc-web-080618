document.addEventListener('DOMContentLoaded', () => {
  const dogBar = document.getElementById('dog-bar')
  const dogInfoDiv = document.getElementById('dog-info')
  const dogFilterDiv = document.getElementById("filter-div")
  let dogFilter = "true"

  Adapter.getDogs()
  .then((json) => {
    json.forEach((dogJson) => {
      let dog = new Dog(dogJson)
        dogBar.innerHTML += `
          <span name="eachDog" id= ${dogJson.id}> '${dogJson.name}</span>`
    }) // end forEach
  }) //end then statement

  dogBar.addEventListener('click', (event) => {
    const dogId = parseInt(event.target.id)
    const dogObj = Dog.find(dogId)
    let goodDogString = ""
    if (dogObj.isGoodDog){
      goodDogString = "Good Dog!"
    } else {
      goodDogString = "Bad Dog!"
    }
    dogInfoDiv.innerHTML = `
    <img src="${dogObj.image}">
    <h2>${dogObj.name}</h2>
    <button id= "${dogId}button">${goodDogString}</button>
    `
  }) //end of dogbar Event Listener

  dogInfoDiv.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON"){
      let dogId = parseInt(event.target.id)
      const dogObj = Dog.find(dogId)
      dogObj.isGoodDog = !(dogObj.isGoodDog)
      let goodDogString = ""

      if (dogObj.isGoodDog){
        goodDogString = "Good Dog!"
      } else {
        goodDogString = "Bad Dog!"
      }

      dogInfoDiv.innerHTML = `
      <img src="${dogObj.image}">
      <h2>${dogObj.name}</h2>
      <button id= "${dogId}button">${goodDogString}</button>
      `
      Adapter.editDog(dogObj)
    }

  }) //end of good dog listener
  dogFilterDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON'){
      dogBar.innerHTML = ""
      dogFilter = !(dogFilter)
      console.log(dogFilter);
      if (dogFilter === true){
        Adapter.getDogs()
        .then((json) => {
          json.forEach((dogJson) => {
              dogBar.innerHTML += `
                <span name="eachDog" id= ${dogJson.id}> '${dogJson.name}</span>`
          }) // end forEach
        }) //end then statement
      } else {
        Adapter.getDogs()
        .then((json) => {
          json.forEach((dogJson) => {
            if (dogJson.isGoodDog){
              dogBar.innerHTML += `
                <span name="eachDog" id= ${dogJson.id}> '${dogJson.name}</span>`
              }
          }) // end forEach
        }) //end then statement
      }
    }


  }) //end dogfilter event listener

}) //end of DOM event listener
