class Adapter {

  static getDogs() {
    return fetch('http://localhost:3000/pups')
      .then((respond) => respond.json())
    }

  static editDogs(dogObj, dogId) {
    return fetch(`http://localhost:3000/pups/${dogId}`, {
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(dogObj)
    }).then(resp => resp.json())
  }

}
