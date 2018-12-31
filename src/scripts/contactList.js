import contactCollection from "./contactCollection"
import contact from "./contact"

const contactList = {
  displayContact(){
    contactCollection.obtainEntries()
    .then(allResponses => {
      let contactDocumentFragment = document.createDocumentFragment();
      allResponses.forEach(eachEntries => {
        let contactHTML = contact.contactBuilderFromJson(eachEntries)
        console.log(contactHTML)
        contactDocumentFragment.appendChild(contactHTML)
      })
      let ContactDocOutput = document.querySelector(".contactsContainer")
      ContactDocOutput.appendChild(contactDocumentFragment)
    })
  }
}
export default contactList