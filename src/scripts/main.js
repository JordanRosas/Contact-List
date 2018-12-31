import contactForm from "./contactForm"
import contactList from "./contactList"
import eventListener from "./eventListener"

contactForm.contactEntryForm();
let saveContactButton = document.getElementById("save_contact");
saveContactButton.addEventListener("click", eventListener.saveUserContact)
contactList.displayContact();