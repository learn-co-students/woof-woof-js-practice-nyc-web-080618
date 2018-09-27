class Adapter {

  static getPups(){
      return fetch('http://localhost:3000/pups')
        .then((resp) => resp.json())
    }

    static updateToBadPuppies(puppy){
      return fetch(`http://localhost:3000/pups/${puppy.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        isGoodDog: false
      })
    }).then(resp => resp.json())
    }

    static updateToGoodPuppies(puppy){
      return fetch(`http://localhost:3000/pups/${puppy.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        isGoodDog: true
      })
    }).then(resp => resp.json())
    }




}
