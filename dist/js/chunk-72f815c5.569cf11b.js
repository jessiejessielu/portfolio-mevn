(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72f815c5"],{"905c":function(t,a,e){"use strict";e("e8fe")},b8fa:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paddsection",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-between"},[e("div",{staticClass:"contact-block1"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-lg-6"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.addContact(a)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"form-group contact-block1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"},domProps:{value:t.contact.name},on:{input:function(a){a.target.composing||t.$set(t.contact,"name",a.target.value)}}}),e("div",{staticClass:"validate"})])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"},domProps:{value:t.contact.email},on:{input:function(a){a.target.composing||t.$set(t.contact,"email",a.target.value)}}}),e("div",{staticClass:"validate"})])]),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.subject,expression:"contact.subject"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"},domProps:{value:t.contact.subject},on:{input:function(a){a.target.composing||t.$set(t.contact,"subject",a.target.value)}}}),e("div",{staticClass:"validate"})])]),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.message,expression:"contact.message"}],staticClass:"form-control",attrs:{rows:"12","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"},domProps:{value:t.contact.message},on:{input:function(a){a.target.composing||t.$set(t.contact,"message",a.target.value)}}}),e("div",{staticClass:"validate"})]),t._m(1)]),t._m(2)])])])])])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"contact-contact"},[e("div",{staticClass:"section-title"},[e("h2",{staticClass:"mb-30"},[t._v("GET IN TOUCH")])]),e("ul",{staticClass:"contact-details"},[e("li",[e("span",[t._v("Email:"),e("a",{attrs:{href:"mailto:jessiejessielu@gmail.com"}},[t._v(" jessiejessielu@gmail.com ")])])]),e("li",[e("span",[t._v("Tel:"),e("a",{attrs:{href:"tel:289-885-5114"}},[t._v("(+1)289 885 5114")])])]),e("li",[e("span",[t._v("Oakville, ON")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-12 mb-3"},[e("div",{staticClass:"error-message"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-12"},[e("button",{staticClass:"btn btn-primary deleteBtn wide"},[t._v("SEND MESSAGE")])])}],i={data:function(){return{contact:{}}},methods:{addContact:function(){var t=this,a="http://localhost:8000/contact/";this.axios.post(a,this.contact).then((function(){t.$router.push({name:"contact"})})),alert("Your message has been sent. Thank You!")}}},o=i,l=(e("905c"),e("2877")),n=Object(l["a"])(o,s,c,!1,null,"57717a8a",null);a["default"]=n.exports},e8fe:function(t,a,e){}}]);
//# sourceMappingURL=chunk-72f815c5.569cf11b.js.map