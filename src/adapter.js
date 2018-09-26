class Adapter{
  static getDogs(){
    return fetch('http://localhost:3000/pups')
    .then(res => res.json())
  }

  static editDog(dogObj){
    return fetch(`http://localhost:3000/pups/${dogObj.id}`, {
     method: 'PATCH',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       isGoodDog: !dogObj.isGoodDog
     })
   }).then(resp => resp.json())
  }
}
