class Adapter {
  static getDogs(){
    return fetch("http://localhost:3000/pups")
    .then((resp)=> resp.json())
  }

  static editDog(Obj){
    console.log(Obj);
    return fetch(`http://localhost:3000/pups/${Obj.id}`, {
       method: 'PATCH',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(Obj)
    }).then(resp => resp.json())
  }
}
