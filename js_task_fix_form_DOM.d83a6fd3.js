"use strict";var fieldsText=document.querySelectorAll("form input");fieldsText.forEach(function(e){var t=e.getAttribute("name"),l=t[0].toUpperCase()+t.slice(1),r=e.getAttribute("id"),a=document.createElement("label");e.placeholder=l,a.for=r,a.textContent=t,a.className="field-label",e.parentElement.appendChild(a)});
//# sourceMappingURL=js_task_fix_form_DOM.d83a6fd3.js.map
