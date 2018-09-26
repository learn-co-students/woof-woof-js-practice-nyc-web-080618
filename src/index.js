document.addEventListener('DOMContentLoaded', () => {
  const dogBar = document.getElementById('dog-bar')
  const dogInfo = document.getElementById('dog-info')
  const goodDogFilter = document.getElementById('good-dog-filter')

  Adapter.getDogs()
  .then(dogJsons => {
    dogJsons.forEach( dogJson => {
      let dog = new Dog(dogJson)
      dogBar.innerHTML += `<span class="dog-span" id="dog-span-${dog.id}">${dog.name}</span>`
    })
  }) // end Adapter.getDogs().then


  dogBar.addEventListener('click', event => {
    if(event.target.className === 'dog-span'){
      const dogId = event.target.id.split('-')[2]
      const dog = Dog.find(dogId);
      displayDog(dog);
    }
  }) // dogbar AEL click

  dogInfo.addEventListener('click', event => {
    if(event.target.className === 'good-dog'){
      const dogId = event.target.id.split('-')[1]
      let dog = Dog.find(dogId);
      Adapter.editDog(dog).then( dogJson => {
        Object.assign(dog, dogJson)
        displayDog(dog)
      })
    }
  }) // dogInfo AEL click

  goodDogFilter.addEventListener('click', event => {
    const filterText = event.target.innerText.split(': ')[1]
    const newFilterText = filterText === 'OFF' ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'
    event.target.innerText = newFilterText
    if(filterText === 'OFF'){
      // we originally clicked to turn it on so do the ON task
      const goodDogs = Dog.getGoodBoys();
      dogBar.innerHTML = ""
      goodDogs.forEach(dog => {
        dogBar.innerHTML += `<span class="dog-span" id="dog-span-${dog.id}">${dog.name}</span>`
      })
    } else {
      dogBar.innerHTML = ""
      Dog.all.forEach( dog => {
        dogBar.innerHTML += `<span class="dog-span" id="dog-span-${dog.id}">${dog.name}</span>`
      })
    }
  }) // goodDogFilter AEL click
});

function displayDog(dog){
  const dogInfo = document.getElementById('dog-info')
  dogInfo.innerHTML = dog.render()
}
