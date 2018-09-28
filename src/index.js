document.addEventListener("DOMContentLoaded", function(event) {

const apiCall = `http://localhost:3000/pups`
const dogBar = document.getElementById('dog-bar')
const dogInfo = document.getElementById('dog-info')
let allPups= {};
let pupCounter = 0
const dogBtn = document.getElementById('good-dog-filter')


   function isGood(dog){
  return dog.isGoodDog === true ?  "Good Dog!" :  "Bad Dog!"
}
fetch(apiCall)
.then(r=> r.json())
.then(data=> data.forEach(function(pup){
  pupCounter ++
    allPups[pupCounter] = pup
  let pupBar = document.createElement('span')
    pupBar.setAttribute('id', `${pupCounter}`)
  pupBar.innerText = pup.name
// console.log(pupBar)
// const dogBar = document.getElementById('dog-bar')
dogBar.appendChild(pupBar)
}))
//



  dogBar.addEventListener('click', function(event){
    console.log(event.target.id)
    let x = event.target.id
    doggy = allPups[x]

    dogInfo.innerHTML = `<img src=${doggy.image} >

    <h2>${doggy.name} </h2>

    <button id=btn${doggy.id}> ${isGood(doggy)}  </button>  `

    let dogBtn = document.getElementById(`btn${doggy.id}`)
    dogBtn.addEventListener('click', function(event){
      console.log(dogBtn)
      let text = dogBtn.innerText
      console.log(text)

       return dogBtn.innerText === 'Good Dog!'? dogBtn.innerText = 'Bag Dog!' : dogBtn.innerText = 'Good Dog!'

       fetch(`http://localhost:3000/pups/${doggy.id}`), {
         method: "PATCH", // *GET, POST, PUT, DELETE, etc.
                headers: {
                "Content-Type": "application/json; charset=utf-8",

               body: JSON.stringify({isGoodDog: text })
              }
            }
         })
       })


    let filterBtn = document.getElementById('good-dog-filter')




      filterBtn.addEventListener('click', function (event){
      if (filterBtn.innerText === 'Filter good dogs: OFF') {
        console.log('DESTROY DOGS')
        let doggySpan = document.querySelectorAll('span')
        let allElements=[];
        doggySpan.forEach(function(element) {
          allElements.push(allPups[element.id])
        });
      return  filterBtn.innerText='Filter good dogs: ON'

    }
      else{
        return  filterBtn.innerText='Filter good dogs: OFF'
      }

    })

  })
