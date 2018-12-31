(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contact = {
  contactBuilderFromJson(contactObject) {
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
    return contactContainer;
  }

};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contactCollection = {
  obtainEntries() {
    return fetch("http://localhost:8088/contact").then(response => response.json());
  },

  postNewEntry(newEntry) {
    return fetch("http://localhost:8088/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    }).then(response => response.json());
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contactForm = {
  contactEntryForm() {
    let userForm = `<fieldset>
      <label for = "contacts_name">Name:</label>
      <input type = "text" id = "contacts_name" name = "contacts_name" autofocus>
    </fieldset>
    <fieldset>
      <label for = "contacts_number">Number:</label>
      <input type = "text" id = "contacts_number" name = "contacts_number" autofocus>
    </fieldset>
    <fieldset>
      <label for = "contacts_address">Address:</label>
      <input type = "text" id = "contacts_address" name = "contacts_address" autofocus>
    </fieldset>

    <button type = "button" id = "save_contact" value = "Refresh Page" onClick = "history.go(0)">Save Contact</button>`;
    let documentArticle = document.querySelector(".userFormContainer");
    documentArticle.innerHTML = userForm;
  }

};
var _default = contactForm;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

var _contact = _interopRequireDefault(require("./contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactList = {
  displayContact() {
    _contactCollection.default.obtainEntries().then(allResponses => {
      let contactDocumentFragment = document.createDocumentFragment();
      allResponses.forEach(eachEntries => {
        let contactHTML = _contact.default.contactBuilderFromJson(eachEntries);

        console.log(contactHTML);
        contactDocumentFragment.appendChild(contactHTML);
      });
      let ContactDocOutput = document.querySelector(".contactsContainer");
      ContactDocOutput.appendChild(contactDocumentFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventListener = {
  saveUserContact() {
    let userContactContainer = document.querySelector(".contactsContainer");
    userContactContainer.innerHTML = " ";
    const name = document.querySelector("#contacts_name").value;
    const number = document.querySelector("#contacts_number").value;
    const address = document.querySelector("#contacts_address").value;
    let contactObject = {
      name: name,
      number: number,
      address: address
    };

    _contactCollection.default.postNewEntry(contactObject);

    _contactList.default.contactDisplay();
  }

};
var _default = eventListener;
exports.default = _default;

},{"./contactCollection":2,"./contactList":4}],6:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

var _contactList = _interopRequireDefault(require("./contactList"));

var _eventListener = _interopRequireDefault(require("./eventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_contactForm.default.contactEntryForm();

let saveContactButton = document.getElementById("save_contact");
saveContactButton.addEventListener("click", _eventListener.default.saveUserContact);

_contactList.default.displayContact();

},{"./contactForm":3,"./contactList":4,"./eventListener":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXIuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLE9BQU8sR0FBRztBQUNkLEVBQUEsc0JBQXNCLENBQUMsYUFBRCxFQUFlO0FBQ25DLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBdkI7QUFDQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosR0FBMEIsYUFBYSxDQUFDLElBQXhDO0FBQ0EsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLEdBQTRCLGFBQWEsQ0FBQyxNQUExQztBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixHQUE2QixhQUFhLENBQUMsT0FBM0M7QUFFQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLFdBQTdCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixhQUE3QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsV0FBakIsQ0FBNkIsY0FBN0I7QUFFQSxXQUFPLGdCQUFQO0FBQ0Q7O0FBZmEsQ0FBaEI7ZUFpQmUsTzs7Ozs7Ozs7OztBQ2pCZixNQUFNLGlCQUFpQixHQUFHO0FBQ3hCLEVBQUEsYUFBYSxHQUFFO0FBQ2IsV0FBTyxLQUFLLENBQUMsK0JBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQsR0FKdUI7O0FBTXhCLEVBQUEsWUFBWSxDQUFDLFFBQUQsRUFBVTtBQUNwQixXQUFPLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUM1QyxNQUFBLE1BQU0sRUFBQyxNQURxQztBQUU1QyxNQUFBLE9BQU8sRUFBQztBQUNOLHdCQUFpQjtBQURYLE9BRm9DO0FBSzVDLE1BQUEsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZjtBQUx1QyxLQUFsQyxDQUFMLENBT04sSUFQTSxDQU9ELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQVBYLENBQVA7QUFRRDs7QUFmdUIsQ0FBMUI7ZUFpQmUsaUI7Ozs7Ozs7Ozs7QUNqQmYsTUFBTSxXQUFXLEdBQUc7QUFDbEIsRUFBQSxnQkFBZ0IsR0FBRTtBQUNoQixRQUFJLFFBQVEsR0FDWDs7Ozs7Ozs7Ozs7Ozt1SEFERDtBQWdCQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixRQUE1QjtBQUNEOztBQXBCaUIsQ0FBcEI7ZUFzQmUsVzs7Ozs7Ozs7Ozs7QUN0QmY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGNBQWMsR0FBRTtBQUNkLCtCQUFrQixhQUFsQixHQUNDLElBREQsQ0FDTSxZQUFZLElBQUk7QUFDcEIsVUFBSSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBOUI7QUFDQSxNQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFdBQVcsSUFBSTtBQUNsQyxZQUFJLFdBQVcsR0FBRyxpQkFBUSxzQkFBUixDQUErQixXQUEvQixDQUFsQjs7QUFDQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtBQUNBLFFBQUEsdUJBQXVCLENBQUMsV0FBeEIsQ0FBb0MsV0FBcEM7QUFDRCxPQUpEO0FBS0EsVUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7QUFDQSxNQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLHVCQUE3QjtBQUNELEtBVkQ7QUFXRDs7QUFiaUIsQ0FBcEI7ZUFlZSxXOzs7Ozs7Ozs7OztBQ2xCZjs7QUFDQTs7OztBQUVBLE1BQU0sYUFBYSxHQUFHO0FBQ3BCLEVBQUEsZUFBZSxHQUFFO0FBQ2YsUUFBSSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBM0I7QUFDQSxJQUFBLG9CQUFvQixDQUFDLFNBQXJCLEdBQWlDLEdBQWpDO0FBRUEsVUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQXREO0FBQ0EsVUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTFEO0FBQ0EsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDLEtBQTVEO0FBRUEsUUFBSSxhQUFhLEdBQUc7QUFDbEIsTUFBQSxJQUFJLEVBQUMsSUFEYTtBQUVsQixNQUFBLE1BQU0sRUFBQyxNQUZXO0FBR2xCLE1BQUEsT0FBTyxFQUFDO0FBSFUsS0FBcEI7O0FBS0EsK0JBQWtCLFlBQWxCLENBQStCLGFBQS9COztBQUNJLHlCQUFZLGNBQVo7QUFDTDs7QUFoQm1CLENBQXRCO2VBa0JlLGE7Ozs7OztBQ3JCZjs7QUFDQTs7QUFDQTs7OztBQUVBLHFCQUFZLGdCQUFaOztBQUNBLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBeEI7QUFDQSxpQkFBaUIsQ0FBQyxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsdUJBQWMsZUFBMUQ7O0FBQ0EscUJBQVksY0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGNvbnRhY3QgPSB7XHJcbiAgY29udGFjdEJ1aWxkZXJGcm9tSnNvbihjb250YWN0T2JqZWN0KXtcclxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBsZXQgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmplY3QubmFtZTtcclxuICAgIGxldCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5udW1iZXI7XHJcbiAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5hZGRyZXNzO1xyXG5cclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0Q29udGFpbmVyXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJjb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcclxuICBvYnRhaW5FbnRyaWVzKCl7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdFwiKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIH0sXHJcblxyXG4gIHBvc3ROZXdFbnRyeShuZXdFbnRyeSl7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdFwiLCB7XHJcbiAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkobmV3RW50cnkpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29sbGVjdGlvbjsiLCJjb25zdCBjb250YWN0Rm9ybSA9IHtcclxuICBjb250YWN0RW50cnlGb3JtKCl7XHJcbiAgICBsZXQgdXNlckZvcm0gPVxyXG4gICAgYDxmaWVsZHNldD5cclxuICAgICAgPGxhYmVsIGZvciA9IFwiY29udGFjdHNfbmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiY29udGFjdHNfbmFtZVwiIG5hbWUgPSBcImNvbnRhY3RzX25hbWVcIiBhdXRvZm9jdXM+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgICA8bGFiZWwgZm9yID0gXCJjb250YWN0c19udW1iZXJcIj5OdW1iZXI6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiY29udGFjdHNfbnVtYmVyXCIgbmFtZSA9IFwiY29udGFjdHNfbnVtYmVyXCIgYXV0b2ZvY3VzPlxyXG4gICAgPC9maWVsZHNldD5cclxuICAgIDxmaWVsZHNldD5cclxuICAgICAgPGxhYmVsIGZvciA9IFwiY29udGFjdHNfYWRkcmVzc1wiPkFkZHJlc3M6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiY29udGFjdHNfYWRkcmVzc1wiIG5hbWUgPSBcImNvbnRhY3RzX2FkZHJlc3NcIiBhdXRvZm9jdXM+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgaWQgPSBcInNhdmVfY29udGFjdFwiIHZhbHVlID0gXCJSZWZyZXNoIFBhZ2VcIiBvbkNsaWNrID0gXCJoaXN0b3J5LmdvKDApXCI+U2F2ZSBDb250YWN0PC9idXR0b24+YFxyXG5cclxuICAgIGxldCBkb2N1bWVudEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJGb3JtQ29udGFpbmVyXCIpO1xyXG4gICAgZG9jdW1lbnRBcnRpY2xlLmlubmVySFRNTCA9IHVzZXJGb3JtO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybSIsImltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSB7XHJcbiAgZGlzcGxheUNvbnRhY3QoKXtcclxuICAgIGNvbnRhY3RDb2xsZWN0aW9uLm9idGFpbkVudHJpZXMoKVxyXG4gICAgLnRoZW4oYWxsUmVzcG9uc2VzID0+IHtcclxuICAgICAgbGV0IGNvbnRhY3REb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBhbGxSZXNwb25zZXMuZm9yRWFjaChlYWNoRW50cmllcyA9PiB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3RIVE1MID0gY29udGFjdC5jb250YWN0QnVpbGRlckZyb21Kc29uKGVhY2hFbnRyaWVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY3RIVE1MKVxyXG4gICAgICAgIGNvbnRhY3REb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIVE1MKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgQ29udGFjdERvY091dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdHNDb250YWluZXJcIilcclxuICAgICAgQ29udGFjdERvY091dHB1dC5hcHBlbmRDaGlsZChjb250YWN0RG9jdW1lbnRGcmFnbWVudClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0IiwiaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcclxuaW1wb3J0IGNvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCJcclxuXHJcbmNvbnN0IGV2ZW50TGlzdGVuZXIgPSB7XHJcbiAgc2F2ZVVzZXJDb250YWN0KCl7XHJcbiAgICBsZXQgdXNlckNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RzQ29udGFpbmVyXCIpXHJcbiAgICB1c2VyQ29udGFjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIiBcIjtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0c19uYW1lXCIpLnZhbHVlXHJcbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RzX251bWJlclwiKS52YWx1ZVxyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdHNfYWRkcmVzc1wiKS52YWx1ZVxyXG5cclxuICAgIGxldCBjb250YWN0T2JqZWN0ID0ge1xyXG4gICAgICBuYW1lOm5hbWUsXHJcbiAgICAgIG51bWJlcjpudW1iZXIsXHJcbiAgICAgIGFkZHJlc3M6YWRkcmVzc1xyXG4gICAgfVxyXG4gICAgY29udGFjdENvbGxlY3Rpb24ucG9zdE5ld0VudHJ5KGNvbnRhY3RPYmplY3QpXHJcbiAgICAgICAgY29udGFjdExpc3QuY29udGFjdERpc3BsYXkoKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lciIsImltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXHJcbmltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9jb250YWN0TGlzdFwiXHJcbmltcG9ydCBldmVudExpc3RlbmVyIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJcIlxyXG5cclxuY29udGFjdEZvcm0uY29udGFjdEVudHJ5Rm9ybSgpO1xyXG5sZXQgc2F2ZUNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVfY29udGFjdFwiKTtcclxuc2F2ZUNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXIuc2F2ZVVzZXJDb250YWN0KVxyXG5jb250YWN0TGlzdC5kaXNwbGF5Q29udGFjdCgpOyJdfQ==
