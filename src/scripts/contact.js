const contact = {
  contactBuilder(contactObject){
    let contactContainer = document.createElement("article");
    let contactName = document.createElement("h1");
    contactName.textContent = contactObject.name;
    let contactNumber = document.createElement("p");
    contactNumber.textContent = contactObject.number;
    let contactAddress = document.createElement("p");
    contactAddress.textContent = contactObject.address;

    contactContainer.appendChild(contactName);
    contactContainer.appendChild(contactNumber);
    contactContainer.appendChild(contactAddress);

    return contactContainer
  }
}
export default contact