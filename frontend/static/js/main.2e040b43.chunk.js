(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{192:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),s=n.n(o),c=n(77),i=n.n(c),r=n(17),u=(n(89),n(10)),l=n(2),p=n(5),d=n(8),j=n(83),h=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return Object(a.jsx)(p.b,{path:n.path,children:function(){return n.loggedIn?Object(a.jsx)(t,Object(d.a)({},n)):Object(a.jsx)(p.a,{to:n.redirect})}})};var b=function(e){var t=s.a.useState(!1),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.jsxs)("header",{className:o?"header header_reverse":"header",children:[Object(a.jsx)("div",{className:"header__logo",children:!0===e.loggedIn&&Object(a.jsx)("button",{className:o?"header__button-menu header__button-menu_opened":"header__button-menu",type:"checkbox",onClick:function(){c(!o)}})}),Object(a.jsx)("div",{className:e.loggedIn?o?"header__container-opened":"header__container header__container-mobile":"header__container",children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{path:"/sign-in",children:Object(a.jsx)(r.b,{className:"header__navlink",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(p.b,{path:"/sign-up",children:Object(a.jsx)(r.b,{className:"header__navlink",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsxs)(p.b,{path:"/",children:[Object(a.jsx)("p",{className:o?"header__user header__user_menu-opened":"header__user",children:e.userEmail}),Object(a.jsx)("button",{className:o?"header__navlink header__navlink_menu-opened header__navlink_signout":"header__navlink header__navlink_signout",type:"submit",onClick:function(t){t.preventDefault(),c(!1),e.onSignOut()},children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]})},_=s.a.createContext();var m=function(e){var t=s.a.useContext(_),n=e.card.owner._id===t._id,o="element__trash-button ".concat(n?"":"element__trash-button-disabled"),c=e.card.likes.some((function(e){return e._id===t._id})),i="element__like-button ".concat(c?"element__like-button_active":"");return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{onClick:function(){e.onCardClick(e.card)},className:"element__image",alt:e.card.name,src:e.card.link}),Object(a.jsxs)("div",{className:"element__group",children:[Object(a.jsx)("p",{className:"element__text",children:e.card.name}),Object(a.jsx)("button",{onClick:function(){e.onCardLike(e.card)},type:"button",className:i,children:Object(a.jsx)("p",{className:"element__like-counter",children:e.likeCounter})})]}),Object(a.jsx)("button",{onClick:function(){e.onConfirm(e.card)},type:"button",className:o})]})};var f=function(e){var t=s.a.useContext(_);return Object(a.jsxs)("main",{className:e.profile,children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatar-image",alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:"".concat(t.avatar)}),Object(a.jsx)("button",{type:"button",onClick:e.onEditAvatar,className:"profile__avatar-update-button"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__info-group",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button",id:"edit-profile"})]}),Object(a.jsx)("p",{className:"profile__description",children:t.about})]}),Object(a.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__add-button",id:"add-card"})]}),Object(a.jsx)("section",{className:"elements",id:"elements",children:e.cards.map((function(t){return Object(a.jsx)(m,{card:t,onCardClick:e.onCardClick,likeCounter:t.likes.length,onCardLike:e.onCardLike,onConfirm:e.onConfirm},t._id)}))})]})},O=(new Date).getFullYear();var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",O," Mesto Russia"]})})};var v=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.card&&"popup_opened"),id:e.name,children:[Object(a.jsxs)("div",{className:"popup__image-container",children:[Object(a.jsx)("img",{className:"popup__image",alt:e.card.name,src:"".concat(e.card.link)}),Object(a.jsx)("p",{className:"popup__image-description",children:e.card.name}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:e.onClose,className:"popup__overlay popup__overlay_for-image"})]})};var g=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.name,children:[Object(a.jsxs)("form",{onSubmit:e.onSubmit,className:"popup__form",name:e.name,noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__form-heading",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button",children:e.buttonText}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:e.onClose,className:"popup__overlay"})]})};var C=function(e){var t=s.a.useContext(_),n=s.a.useState(""),o=Object(l.a)(n,2),c=o[0],i=o[1],r=s.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1],j=s.a.useState(""),h=Object(l.a)(j,2),b=h[0],m=h[1];return s.a.useEffect((function(){i(t.name),d(t.about)}),[t]),s.a.useEffect((function(){i(t.name),d(t.about),m("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[e.isOpen]),Object(a.jsxs)(g,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:b,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),m("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateUser({name:c,about:p})},children:[Object(a.jsx)("input",{onChange:function(e){i(e.target.value)},value:c||"",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",className:"popup__input popup__input_name",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"name-input-error"}),Object(a.jsx)("input",{onChange:function(e){d(e.target.value)},value:p||"",type:"text",name:"about",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"200",className:"popup__input popup__input_description",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"about-input-error"})]})};var N=function(e){var t=s.a.useRef(),n=s.a.useState(""),o=Object(l.a)(n,2),c=o[0],i=o[1];return s.a.useEffect((function(){t.current.value="",i("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[e.isOpen]),Object(a.jsxs)(g,{name:"edit-avatar-profile",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:c,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),i("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(a.jsx)("input",{ref:t,defaultValue:"",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_source",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"avatar-input-error"})]})};var k=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),o=n[0],c=n[1],i=s.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1],d=s.a.useState(""),j=Object(l.a)(d,2),h=j[0],b=j[1];return s.a.useEffect((function(){c(""),p(""),b("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}),[e.isOpen]),Object(a.jsxs)(g,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:h,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),b("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onAddPlace({name:o,link:u})},children:[Object(a.jsx)("input",{onChange:function(e){c(e.target.value)},value:o,type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",className:"popup__input popup__input_title",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"title-input-error"}),Object(a.jsx)("input",{onChange:function(e){p(e.target.value)},value:u,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_source",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"source-input-error"})]})};var y=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),o=n[0],c=n[1];return s.a.useEffect((function(){c("\u0414\u0430")}),[e.isOpen]),Object(a.jsx)(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:o,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),c("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onConfirm()}})},S=n(14),w=n(40),E=w.a().shape({email:w.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441").required("Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),password:w.b().min(6,"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(20,"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d")});var A=function(e){return Object(a.jsx)(S.c,{initialValues:{email:"",password:""},validationSchema:E,onSubmit:function(t){!function(t){e.onAuthorization({email:t.email,password:t.password})}(t)},render:function(e){var t=e.errors;return Object(a.jsxs)(S.b,{className:"sign__form",noValidate:!0,children:[Object(a.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)(S.a,{type:"email",name:"email",placeholder:"Email",className:"sign__input"}),t.email&&Object(a.jsx)("span",{className:"sign__input_error",children:t.email}),Object(a.jsx)(S.a,{type:"password",autoComplete:"on",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"sign__input"}),t.password&&Object(a.jsx)("span",{className:"sign__input_error",children:t.password}),Object(a.jsx)("button",{className:t.password||t.email?"sign__button sign__button_disabled":"sign__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}})};var T=function(e){return Object(a.jsx)(S.c,{initialValues:{email:"",password:""},validationSchema:E,onSubmit:function(t){!function(t){e.onRegistration({email:t.email,password:t.password})}(t)},render:function(e){var t=e.errors;return Object(a.jsxs)(S.b,{className:"sign__form",noValidate:!0,children:[Object(a.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)(S.a,{type:"email",name:"email",placeholder:"Email",className:"sign__input"}),t.email&&Object(a.jsx)("span",{className:"sign__input_error",children:t.email}),Object(a.jsx)(S.a,{type:"password",autoComplete:"on",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"sign__input"}),t.password&&Object(a.jsx)("span",{className:"sign__input_error",children:t.password}),Object(a.jsx)("button",{className:t.password||t.email?"sign__button sign__button_disabled":"sign__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(r.b,{to:"/sign-in",className:"sign__button_dark",type:"button",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}})},D=n.p+"static/media/tooltip-ok.e004e6e7.svg",L=n.p+"static/media/tooltip-fail.471086c8.svg";var U=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:[Object(a.jsxs)("div",{className:"popup-tooltip__container",children:[Object(a.jsx)("img",{className:"popup__icon",src:e.tooltipState.state?D:L,alt:e.tooltipState.alt}),Object(a.jsx)("h2",{className:"popup__message",children:e.tooltipState.text}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup-tooltip__close-button"})]}),Object(a.jsx)("div",{onClick:e.onClose,className:"popup__overlay"})]})},I=n(3),P=n(4),z=new(function(){function e(t){Object(I.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(P.a)(e,[{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return t._getResponseData(e)}))}},{key:"updateUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return n._getResponseData(e)}))}},{key:"updateUserAvatar",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify({avatar:e.avatar})}).then((function(e){return n._getResponseData(e)}))}},{key:"getCards",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return t._getResponseData(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify({})}).then((function(e){return n._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.disLikeCard(e):this.likeCard(e)}},{key:"likeCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)})}).then((function(e){return n._getResponseData(e)}))}},{key:"disLikeCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:Object(d.a)(Object(d.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)})}).then((function(e){return n._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://api.kiprin.students.nomoredomains.icu/",headers:{"Content-Type":"application/json"}}),R="https://api.kiprin.students.nomoredomains.icu/";var B={register:function(e){return fetch("".concat(R,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return e.ok?e.json():e.status}))},authorize:function(e){return fetch("".concat(R,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return e.ok?e.json():e.status}))},checkToken:function(e){return fetch("".concat(R,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.status}))}};var J=function(){var e=Object(p.g)(),t=s.a.useState(!1),n=Object(l.a)(t,2),o=n[0],c=n[1];function i(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");B.checkToken(t).then((function(t){401===t?console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435!"):(c(!0),w(t.data.email),e.push("/"))}))}}s.a.useEffect((function(){i()}),[]);var r=s.a.useState([]),d=Object(l.a)(r,2),j=d[0],m=d[1],O=s.a.useState(""),g=Object(l.a)(O,2),S=g[0],w=g[1],E=s.a.useState(""),D=Object(l.a)(E,2),L=D[0],I=D[1];s.a.useEffect((function(){z.getUserInfo().then((function(e){I(e)})).then((function(){M("content")})).catch((function(e){alert(e)}))}),[]);var P=s.a.useState([]),R=Object(l.a)(P,2),J=R[0],q=R[1];s.a.useEffect((function(){z.getCards().then((function(e){q(e)})).catch((function(e){alert(e)}))}),[]);var V=s.a.useState("content content-disabled"),G=Object(l.a)(V,2),H=G[0],M=G[1],F=s.a.useState(!1),Y=Object(l.a)(F,2),K=Y[0],Q=Y[1],W=s.a.useState(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=s.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],oe=s.a.useState(!1),se=Object(l.a)(oe,2),ce=se[0],ie=se[1],re=s.a.useState(!1),ue=Object(l.a)(re,2),le=ue[0],pe=ue[1],de=s.a.useState(""),je=Object(l.a)(de,2),he=je[0],be=je[1],_e=s.a.useState(""),me=Object(l.a)(_e,2),fe=me[0],Oe=me[1];function xe(){Q(!0)}function ve(){Q(!1),$(!1),ae(!1),ie(!1),pe(!1),be(""),Oe("")}return Object(a.jsxs)(_.Provider,{value:L,children:[Object(a.jsx)(b,{loggedIn:o,userEmail:S,onSignOut:function(){c(!1),localStorage.removeItem("jwt"),e.push("/sign-in")}}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{path:"/sign-up",children:Object(a.jsx)(T,{onRegistration:function(t){m({state:!1,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),B.register(t).then((function(t){400===t?(Q(!0),console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 \u0438\u0437 \u043f\u043e\u043b\u0435\u0439!")):(m({state:!0,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),xe(),e.push("/sign-in"))})).catch((function(e){console.log(e)}))}})}),Object(a.jsx)(p.b,{path:"/sign-in",children:Object(a.jsx)(A,{onAuthorization:function(e){B.authorize(e).then((function(e){400===e?(xe(),console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439!")):401===e?(xe(),console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d!")):(localStorage.setItem("jwt",e.token),i())})).catch((function(e){console.log(e)}))}})}),Object(a.jsx)(h,{path:"/",redirect:"/sign-in",loggedIn:o,component:f,profile:H,onEditProfile:function(){$(!0)},onEditAvatar:function(){ae(!0)},onAddPlace:function(){ie(!0)},onConfirm:function(e){Oe(e),pe(!0)},cards:J,onCardClick:function(e){be(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));z.changeLikeCardStatus(e._id,t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));q(n)})).catch((function(e){alert(e)}))}})]}),Object(a.jsx)(x,{}),Object(a.jsx)(U,{tooltipState:j,isOpen:K,onClose:ve}),Object(a.jsx)(C,{isOpen:Z,onClose:ve,onUpdateUser:function(e){z.updateUserInfo(e).then((function(e){I(e)})).then((function(){ve()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(N,{isOpen:ne,onClose:ve,onUpdateAvatar:function(e){z.updateUserAvatar(e).then((function(e){I(e)})).then((function(){ve()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(k,{isOpen:ce,onClose:ve,onAddPlace:function(e){z.addCard(e).then((function(e){q([e].concat(Object(u.a)(J)))})).then((function(){ve()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(y,{isOpen:le,onClose:ve,onConfirm:function(){var e;e=fe,z.deleteCard(e).then((function(){var t=J.filter((function(t){return!(t._id===e._id)}));q(t)})).then((function(){ve()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(v,{card:he,onClose:ve})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(J,{})})}),document.getElementById("root"))},89:function(e,t,n){}},[[192,1,2]]]);
//# sourceMappingURL=main.2e040b43.chunk.js.map