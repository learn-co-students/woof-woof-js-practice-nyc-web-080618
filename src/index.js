document.addEventListener('DOMContentLoaded', () => {

  const dogBar = document.getElementById("dog-bar")
  const dogInfoDiv = document.getElementById("dog-info")
  const filterButton = document.getElementById("good-dog-filter")

  Adapter.getPups(
  ).then(data =>{

    data.forEach((pup)=>{

      new_pup_obj = new Pup(pup)
      dogBar.innerHTML += new_pup_obj.renderName()
    })
  })


  document.addEventListener("click", span_click)

  function span_click(){
    if (event.target.className === "pup-span"){
       let pupToDisplayId = parseInt(event.target.id)
       let pupToDisplay = pup_store.find((pup)=>{
        return pup.id === pupToDisplayId
       })
       dogInfoDiv.innerHTML = pupToDisplay.renderFull()
    }else if (event.target.className === "good-button"){
      let selectedDogId = parseInt(event.target.dataset.id)
      let selectedDog = pup_store.find((pup)=>{
       return pup.id === selectedDogId
      })

     if (selectedDog.isGoodDog === true){
       selectedDog.isGoodDog = false
     }else{
       selectedDog.isGoodDog = true
     }

     Adapter.patchDog(selectedDogId, selectedDog.isGoodDog
     ).then(response => response.json())
      .then(data => {
        document.querySelector(".good-button").innerText = selectedDog.isGood()
      })
    }
  }

  filterButton.addEventListener("click", filter)

  function filter(){
    if (event.target.innerText === "Filter good dogs: OFF"){
      dogBar.innerHTML = ""
      Adapter.getPups(
      ).then(data =>{

        data.forEach((pup)=>{

          new_pup_obj = new Pup(pup)
          if (new_pup_obj.isGoodDog === true){
          dogBar.innerHTML += new_pup_obj.renderName()
        }
        })
      })
      event.target.innerText = "Filter good dogs: ON"




    }else{
      dogBar.innerHTML = ""
      Adapter.getPups(
      ).then(data =>{

        data.forEach((pup)=>{

          new_pup_obj = new Pup(pup)
          dogBar.innerHTML += new_pup_obj.renderName()
        })
      })
      event.target.innerText = "Filter good dogs: OFF"
    }



  }

})
