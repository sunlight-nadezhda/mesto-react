(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=(a(11),a(2)),o=a.p+"static/media/logo-white.03b78ada.svg",l=a(0);var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("a",{href:"index.html",target:"_self",className:"logo",children:Object(l.jsx)("img",{src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})})},p=a(5),d=a(6),h=new(function(){function e(t){Object(p.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._headers.authorization}}).then(this._getResponseData)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._headers.authorization}}).then(this._getResponseData)}},{key:"sendLinkAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then(this._getResponseData)}},{key:"addLike",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers,body:JSON.stringify({likes:t})}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then(this._getResponseData)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status)))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"1e5f7c98-03ad-4c6e-8333-1ab219b8293f","Content-Type":"application/json"}});var m=function(e){return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"button element__trash"}),Object(l.jsxs)("div",{className:"element__info",children:[Object(l.jsx)("h2",{className:"element__title",children:e.card.name}),Object(l.jsxs)("div",{className:"element__likes",children:[Object(l.jsx)("button",{type:"button","aria-label":"\u041b\u0430\u0439\u043a\u043d\u0443\u0442\u044c",className:"button element__like-button"}),Object(l.jsx)("span",{className:"element__like-counter","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432",children:e.card.likes.length})]})]})]})};var _=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(""),o=Object(r.a)(i,2),u=o[0],p=o[1],d=s.a.useState(""),_=Object(r.a)(d,2),b=_[0],j=_[1],f=s.a.useState([]),O=Object(r.a)(f,2),x=O[0],v=O[1];return s.a.useEffect((function(){Promise.all([h.getUserInfo(),h.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];c(a.name),j(a.avatar),p(a.about),v(n)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__avatar-edit",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(b,")")}}),Object(l.jsxs)("div",{className:"profile__about",children:[Object(l.jsx)("h1",{className:"profile__name",children:n}),Object(l.jsx)("p",{className:"profile__metier",children:u}),Object(l.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"button profile__edit-button",onClick:e.onEditProfile})]}),Object(l.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"button profile__add-button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{"aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043c\u0435\u0441\u0442\u0430\u043c\u0438",children:Object(l.jsx)("ul",{className:"elements",children:x.map((function(t){return Object(l.jsx)(m,{card:t,onCardClick:e.onShowImage},t._id)}))})})]})};var b=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9\xa02020 Mesto Russia"})})};var j=function(e){function t(t){"Escape"===t.key&&e.onClose()}return s.a.useEffect((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}})),Object(l.jsx)("div",{className:"overlay popup popup_type_".concat(e.name).concat(e.isOpen?" popup_opened":""),onClick:function(t){t.target===t.currentTarget&&e.onClose()},children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(l.jsx)("form",{className:"popup__form",name:e.name,noValidate:!0,children:e.children})]})})};var f=function(e){function t(t){"Escape"===t.key&&e.onClose()}return s.a.useEffect((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}})),Object(l.jsx)("div",{className:"overlay popup popup_type_show-image".concat(e.card.link&&e.card.name?" popup_opened":""),onClick:function(t){t.target===t.currentTarget&&e.onClose()},children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_show-image",children:[Object(l.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(l.jsxs)("figure",{className:"figure",children:[Object(l.jsx)("img",{src:e.card.link,alt:e.card.name,className:"figure__image"}),Object(l.jsx)("figcaption",{className:"figure__caption",children:e.card.name})]})]})})};var O=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(r.a)(c,2),o=i[0],p=i[1],d=Object(n.useState)(!1),h=Object(r.a)(d,2),m=h[0],O=h[1],x=Object(n.useState)({}),v=Object(r.a)(x,2),g=v[0],N=v[1];function k(){O(!1),s(!1),p(!1),N({})}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)(u,{}),Object(l.jsx)(_,{onEditProfile:function(){s(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){O(!0)},onShowImage:function(e){N(e)}}),Object(l.jsx)(b,{})]}),Object(l.jsxs)(j,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:a,onClose:k,children:[Object(l.jsxs)("label",{className:"popup__form-field",children:[Object(l.jsx)("input",{type:"text",name:"input-name-profile",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_name-profile",id:"input-name-profile",required:!0,minLength:"2",maxLength:"40"}),Object(l.jsx)("span",{className:"popup__input-error input-name-profile-error"})]}),Object(l.jsxs)("label",{className:"popup__form-field",children:[Object(l.jsx)("input",{type:"text",name:"input-metier-profile",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_metier-profile",id:"input-metier-profile",required:!0,minLength:"2",maxLength:"200"}),Object(l.jsx)("span",{className:"popup__input-error input-metier-profile-error"})]}),Object(l.jsx)("button",{type:"submit",className:"popup__save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(l.jsxs)(j,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",isOpen:o,onClose:k,children:[Object(l.jsxs)("label",{className:"popup__form-field",children:[Object(l.jsx)("input",{type:"text",name:"input-name-add-card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_name-card",id:"input-name-add-card",required:!0,minLength:"2",maxLength:"30"}),Object(l.jsx)("span",{className:"popup__input-error input-name-add-card-error"})]}),Object(l.jsxs)("label",{className:"popup__form-field",children:[Object(l.jsx)("input",{type:"url",name:"input-link-add-card",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_link-card",id:"input-link-add-card",required:!0}),Object(l.jsx)("span",{className:"popup__input-error input-link-add-card-error"})]}),Object(l.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_inactive",disabled:!0,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]}),Object(l.jsxs)(j,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:m,onClose:k,children:[Object(l.jsxs)("label",{className:"popup__form-field",children:[Object(l.jsx)("input",{type:"url",name:"input-link-edit-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",className:"popup__input popup__input_type_link-avatar",id:"input-link-edit-avatar",required:!0}),Object(l.jsx)("span",{className:"popup__input-error input-link-edit-avatar-error"})]}),Object(l.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_inactive",disabled:!0,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]}),Object(l.jsx)(j,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",children:Object(l.jsx)("button",{type:"submit",className:"popup__save-button",children:"\u0414\u0430"})}),Object(l.jsx)(f,{card:g,onClose:k})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.c5431d88.chunk.js.map