  document.addEventListener("DOMContentLoaded",()=>{
    const dogBar=document.getElementById('dog-bar')
    const dogInfo=document.getElementById('dog-info')
    const goodDogFilter=document.getElementById('good-dog-filter')

    let filter=false
      fetch("http://localhost:3000/pups")
      .then(r=>r.json())
      .then(data=>{
         data.forEach(obj=>{
           let newDog=new Dog(obj)
         })
         dogBar.innerHTML=Dog.render_span(filter)
       })//render all the header area

     dogBar.addEventListener("click",e=>{
       if (e.target.className=="detail") {
         const dog=Dog.find_by_id(e.target.id)
         dogInfo.innerHTML=dog.render_detail()
       }// show all the detail
     })
       dogInfo.addEventListener("click",e=>{
         if (e.target.name==="button") {
           const dog=Dog.find_by_id(e.target.dataset.id)
           const url=`http://localhost:3000/pups/${dog.id}`
            fetch(url,{
             method:"PATCH",
             headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
             },
             body:JSON.stringify({isGoodDog:!dog.isGoodDog})
           }).then(res=>res.json())
           .then(data=>{
             dog.isGoodDog=data.isGoodDog
             dogInfo.innerHTML=dog.render_detail()})
         }
       })// edit good dog

      goodDogFilter.addEventListener('click',e=>{
        filter=!filter
        goodDogFilter.innerText=filter?"Filter good dogs: ON":"Filter good dogs: OFF"
        dogBar.innerHTML=Dog.render_span(filter)
      })//filter good dogs


   })
