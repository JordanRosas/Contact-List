import contactCollection from "./contactCollection"
import contactList from "./contactList"

const eventListener = {
  saveUserContact(){
    let userContactContainer = document.querySelector(".contactsContainer")
    userContactContainer.innerHTML = " ";

    const name = document.querySelector("#contacts_name").value
    const number = document.querySelector("#contacts_number").value
    const address = document.querySelector("#contacts_address").value

    let contactObject = {
      name:name,
      number:number,
      address:address
    }
    contactCollection.postNewEntry(contactObject)
        contactList.contactDisplay();
  }
}
export default eventListener