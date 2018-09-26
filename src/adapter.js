class Adapter{

  static getPups(){
    return fetch("http://localhost:3000/pups"
  ).then(response => response.json())

  }

  static patchDog(id, user_isGoodDog){
    return fetch(`http://localhost:3000/pups/${id}`,
      {method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            isGoodDog: user_isGoodDog
          })
    })

  }



}
