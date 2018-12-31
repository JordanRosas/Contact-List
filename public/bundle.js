(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contact = {
  contactHTML(value) {
    let HTML = `
    <article>
      <h3>Name: ${value.name}</h3>
      <p>Phone Number: ${value.number}</p>
      <p>Address: ${value.address}</p>
    </article>
      `;
    let test = document.createElement("article");
    test.innerHTML = HTML;
    return test;
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
  getContactList() {
    return fetch("http://localhost:8088/contact").then(response => response.json());
  },

  saveContact(contactToSave) {
    return fetch("http://localhost:8088/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactToSave)
    });
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

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactForm = {
  createForm() {
    let inputForm = `
        <article>
            <fieldset>
                <label for="contact_name">Name:</label>
                <input id="contact_name" name="contact_name" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="contact_number">Number:</label>
                <input id="contact_number" name="contact_number" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="contact_address">Address:</label>
                <input id="contact_address" name="contact_address" type="text" autofocus />
            </fieldset>
            <button class="btn contact_save">Save Contact</button>
        </article>
        `;
    let displayContainer = document.querySelector(".output");
    displayContainer.innerHTML = inputForm;
    displayContainer;
  },

  buttonClick() {
    const name = document.querySelector("#contact_name").value;
    const number = document.querySelector("#contact_number").value;
    const address = document.querySelector("#contact_address").value;
    const contactObject = {
      name: name,
      number: number,
      address: address
    };

    _contactCollection.default.saveContact(contactObject).then(function () {
      _contactList.default.getAllContacts();
    });
  } // location.reload(true);


};
var _default = contactForm;
exports.default = _default;

},{"./contactCollection":2,"./contactList":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact"));

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactList = {
  getAllContacts() {
    _contactCollection.default.getContactList().then(allContacts => {
      let contactFragment = document.createDocumentFragment();
      allContacts.forEach(contactIteration => {
        let contactHTML2 = _contact.default.contactHTML(contactIteration);

        contactFragment.appendChild(contactHTML2);
      });
      let contactListArticle = document.querySelector(".contactList");

      while (contactListArticle.firstChild) {
        contactListArticle.removeChild(contactListArticle.firstChild);
      }

      contactListArticle.appendChild(contactFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList"));

var _contactForm = _interopRequireDefault(require("./contactForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_contactForm.default.createForm();

_contactList.default.getAllContacts();

let saveButton = document.querySelector(".contact_save");
saveButton.addEventListener("click", _contactForm.default.buttonClick);

},{"./contactForm":3,"./contactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNDQSxNQUFNLE9BQU8sR0FBRztBQUNkLEVBQUEsV0FBVyxDQUFDLEtBQUQsRUFBUTtBQUNqQixRQUFJLElBQUksR0FBSTs7a0JBRUUsS0FBSyxDQUFDLElBQUs7eUJBQ0osS0FBSyxDQUFDLE1BQU87b0JBQ2xCLEtBQUssQ0FBQyxPQUFROztPQUo5QjtBQU9FLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBWmEsQ0FBaEI7ZUFnQmUsTzs7Ozs7Ozs7OztBQ2hCZixNQUFNLGlCQUFpQixHQUFHO0FBQ3hCLEVBQUEsY0FBYyxHQUFHO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVDLEdBSnVCOztBQUt4QixFQUFBLFdBQVcsQ0FBRSxhQUFGLEVBQWlCO0FBQzFCLFdBQU8sS0FBSyxDQUFDLCtCQUFELEVBQWtDO0FBQzVDLE1BQUEsTUFBTSxFQUFFLE1BRG9DO0FBRTVDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGbUM7QUFLNUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxhQUFmO0FBTHNDLEtBQWxDLENBQVo7QUFPRDs7QUFidUIsQ0FBMUI7ZUFlZSxpQjs7Ozs7Ozs7Ozs7QUNoQmY7O0FBQ0E7Ozs7QUFHQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLFVBQVUsR0FBRztBQUNULFFBQUksU0FBUyxHQUNaOzs7Ozs7Ozs7Ozs7Ozs7O1NBREQ7QUFrQkEsUUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUF2QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsU0FBakIsR0FBNkIsU0FBN0I7QUFDQSxJQUFBLGdCQUFnQjtBQUVuQixHQXhCZTs7QUEwQmhCLEVBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MsS0FBckQ7QUFDQSxVQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsRUFBMEMsS0FBekQ7QUFDQSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsS0FBM0Q7QUFFQSxVQUFNLGFBQWEsR0FBRztBQUNsQixNQUFBLElBQUksRUFBRSxJQURZO0FBRWxCLE1BQUEsTUFBTSxFQUFFLE1BRlU7QUFHbEIsTUFBQSxPQUFPLEVBQUU7QUFIUyxLQUF0Qjs7QUFNSiwrQkFBa0IsV0FBbEIsQ0FBOEIsYUFBOUIsRUFDQyxJQURELENBQ08sWUFBWTtBQUNuQiwyQkFBWSxjQUFaO0FBQ0MsS0FIRDtBQUlILEdBekNtQixDQTBDaEI7OztBQTFDZ0IsQ0FBcEI7ZUErQ2UsVzs7Ozs7Ozs7Ozs7QUNsRGY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGNBQWMsR0FBRztBQUNiLCtCQUFrQixjQUFsQixHQUNDLElBREQsQ0FDTSxXQUFXLElBQUk7QUFDbkIsVUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXRCO0FBRUYsTUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixnQkFBZ0IsSUFBSTtBQUN0QyxZQUFJLFlBQVksR0FBRyxpQkFBUSxXQUFSLENBQW9CLGdCQUFwQixDQUFuQjs7QUFDQSxRQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixZQUE1QjtBQUNELE9BSEQ7QUFLQSxVQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQXpCOztBQUNBLGFBQU8sa0JBQWtCLENBQUMsVUFBMUIsRUFBc0M7QUFDbEMsUUFBQSxrQkFBa0IsQ0FBQyxXQUFuQixDQUErQixrQkFBa0IsQ0FBQyxVQUFsRDtBQUNIOztBQUNELE1BQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsZUFBL0I7QUFLQyxLQWxCRDtBQW1CSDs7QUFyQmlCLENBQXBCO2VBd0JlLFc7Ozs7OztBQzVCZjs7QUFDQTs7OztBQUlBLHFCQUFZLFVBQVo7O0FBQ0EscUJBQVksY0FBWjs7QUFFQSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxxQkFBWSxXQUFqRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5jb25zdCBjb250YWN0ID0ge1xyXG4gIGNvbnRhY3RIVE1MKHZhbHVlKSB7XHJcbiAgICBsZXQgSFRNTCA9IGBcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8aDM+TmFtZTogJHt2YWx1ZS5uYW1lfTwvaDM+XHJcbiAgICAgIDxwPlBob25lIE51bWJlcjogJHt2YWx1ZS5udW1iZXJ9PC9wPlxyXG4gICAgICA8cD5BZGRyZXNzOiAke3ZhbHVlLmFkZHJlc3N9PC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgICBgXHJcbiAgICAgIGxldCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcclxuICAgICAgdGVzdC5pbm5lckhUTUwgPSBIVE1MO1xyXG4gICAgICByZXR1cm4gdGVzdFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJcclxuY29uc3QgY29udGFjdENvbGxlY3Rpb24gPSB7XHJcbiAgZ2V0Q29udGFjdExpc3QoKSB7XHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RcIilcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgfSxcclxuICBzYXZlQ29udGFjdCAoY29udGFjdFRvU2F2ZSkge1xyXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0VG9TYXZlKVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb247IiwiaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcclxuaW1wb3J0IGNvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCI7XHJcblxyXG5cclxuY29uc3QgY29udGFjdEZvcm0gPSB7XHJcbiAgICBjcmVhdGVGb3JtKCkge1xyXG4gICAgICAgIGxldCBpbnB1dEZvcm0gPVxyXG4gICAgICAgIGBcclxuICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfbmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfbmFtZVwiIG5hbWU9XCJjb250YWN0X25hbWVcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdF9udW1iZXJcIj5OdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfbnVtYmVyXCIgbmFtZT1cImNvbnRhY3RfbnVtYmVyXCIgdHlwZT1cInRleHRcIiBhdXRvZm9jdXMgLz5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RfYWRkcmVzc1wiPkFkZHJlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3RfYWRkcmVzc1wiIG5hbWU9XCJjb250YWN0X2FkZHJlc3NcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNvbnRhY3Rfc2F2ZVwiPlNhdmUgQ29udGFjdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICBgXHJcbiAgICAgICAgbGV0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcclxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGlucHV0Rm9ybTtcclxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBidXR0b25DbGljaygpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0X25hbWVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0X251bWJlclwiKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0X2FkZHJlc3NcIikudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGNvbnRhY3RDb2xsZWN0aW9uLnNhdmVDb250YWN0KGNvbnRhY3RPYmplY3QpXHJcbiAgICAudGhlbiAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29udGFjdExpc3QuZ2V0QWxsQ29udGFjdHMoKTtcclxuICAgIH0pXHJcbn1cclxuICAgIC8vIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm07XHJcbiIsIlxyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCJcclxuaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcclxuXHJcbmNvbnN0IGNvbnRhY3RMaXN0ID0ge1xyXG4gIGdldEFsbENvbnRhY3RzKCkge1xyXG4gICAgICBjb250YWN0Q29sbGVjdGlvbi5nZXRDb250YWN0TGlzdCgpXHJcbiAgICAgIC50aGVuKGFsbENvbnRhY3RzID0+IHtcclxuICAgICAgICBsZXQgY29udGFjdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcblxyXG4gICAgICBhbGxDb250YWN0cy5mb3JFYWNoKGNvbnRhY3RJdGVyYXRpb24gPT4ge1xyXG4gICAgICAgIGxldCBjb250YWN0SFRNTDIgPSBjb250YWN0LmNvbnRhY3RIVE1MKGNvbnRhY3RJdGVyYXRpb24pO1xyXG4gICAgICAgIGNvbnRhY3RGcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0SFRNTDIpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGNvbnRhY3RMaXN0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdExpc3RcIilcclxuICAgICAgd2hpbGUgKGNvbnRhY3RMaXN0QXJ0aWNsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBjb250YWN0TGlzdEFydGljbGUucmVtb3ZlQ2hpbGQoY29udGFjdExpc3RBcnRpY2xlLmZpcnN0Q2hpbGQpXHJcbiAgICAgIH1cclxuICAgICAgY29udGFjdExpc3RBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3RGcmFnbWVudCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3Q7IiwiaW1wb3J0IGNvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCJcclxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcclxuXHJcblxyXG5cclxuY29udGFjdEZvcm0uY3JlYXRlRm9ybSgpO1xyXG5jb250YWN0TGlzdC5nZXRBbGxDb250YWN0cygpO1xyXG5cclxubGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3Rfc2F2ZVwiKTtcclxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdEZvcm0uYnV0dG9uQ2xpY2spOyJdfQ==
