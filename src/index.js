const dogBar = document.getElementById('dog-bar')
const dogInfo = document.getElementById('dog-info')
const filter = document.getElementById('filter-div')
const URL = 'http://localhost:3000/pups'

document.addEventListener('click', (e) => {
  const pupId = e.target.dataset.id
  const pupObj = allPups.find(pup => pup.id == pupId)
  if (e.target.nodeName === 'SPAN') {
    dogInfo.innerHTML = pupObj.renderDogInfo()
  } else if (e.target.id === 'is-good-dog') {
    if (pupObj.isGoodDog === true) {
      pupObj.isGoodDog = false
    } else {
      pupObj.isGoodDog = true
    }
    fetch(`${URL}/${pupId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json', //i am expecting JSON back
        'Content-Type': 'application/json' //i am sending you JSON
      },
      body: JSON.stringify({ //JSON object with data; in rails this will come through via params
        isGoodDog: pupObj.isGoodDog
      })
    })
    dogInfo.innerHTML = pupObj.renderDogInfo()
  }else if(e.target.id==='good-dog-filter'){
    if(e.target.value === 'off'){
      filter.innerHTML = `<button id="good-dog-filter" value="on">Filter good dogs: ON</button>`
      dogBar.innerHTML = ""
      
    }else{
      filter.innerHTML = `<button id="good-dog-filter" value="off">Filter good dogs: OFF</button>`
    }
  }

})

document.addEventListener('DOMContentLoaded', () => {
  fetch(URL).then(res => res.json()).then(data => {
    data.forEach(pup => {
      const pupObj = new Pup(pup)
      dogBar.innerHTML += pupObj.renderDogBar()
    })
  })
})
