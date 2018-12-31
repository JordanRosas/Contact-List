const contactCollection = {
  obtainEntries(){
    return fetch("http://localhost:8088/contact")
    .then(response => response.json())
  },

  postNewEntry(newEntry){
    return fetch("http://localhost:8088/contact", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(newEntry)
    })
    .then(response => response.json())
  }
}
export default contactCollection;