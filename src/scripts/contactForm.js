const contactForm = {
  contactEntryForm(){
    let userForm =
    `<fieldset>
      <label for = "contacts_name">Name:</label>
      <input type = "text" id = "contacts_name" name = "contacts_name" autofocus>
    </fieldset>
    <fieldset>
      <label for = "contacts_number">Number:</label>
      <input type = "text" id = "contacts_number" name = "contacts_number" autofocus>
    </fieldset>
    <fieldset>
      <label for = "contacts_address>Address:</label>
      <input type = "text" id = "contacts_address" name = "contacts_address" autofocus>
    </fieldset>

    <button type = "button" id = "save_contact">Save Contact</button>`

    let documentArticle = document.querySelector(".formContainer");
    documentArticle.innerHTMl = userForm;
  }
}
export default contactForm