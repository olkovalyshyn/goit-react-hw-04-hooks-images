(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__136tl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1-aQo","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__nfZ3n"}},12:function(e,a,t){e.exports={Overlay:"Modal_Overlay__Rqq6c",Modal:"Modal_Modal__ovyu3"}},15:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2xbbJ",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1zojJ",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__EGnGS","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__TJLGN"}},17:function(e,a,t){e.exports={Button:"Button_Button__2NOiH"}},23:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(0),c=t.n(n),o=t(3),l=t.n(o),m=(t(23),t(13)),i=t(4),u=t(8),s=(t(24),t(14)),b=t.n(s),h=t(10),g=t.n(h);var _=function(e){var a=e.image,t=e.onOpenModal;return Object(r.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(r.jsx)("img",{onClick:t,src:a.webformatURL,"data-large-img-for-modal":a.largeImageURL,alt:"",className:g.a.ImageGalleryItemImage})})},j=t(15),I=t.n(j);var d=function(e){var a=e.images,t=e.onOpenModal;return Object(r.jsx)("ul",{className:I.a.ImageGallery,children:a.map((function(e){return Object(r.jsx)(_,{image:e,onOpenModal:t},e.id)}))})},O=t(5),f=t.n(O);function p(e){var a=e.onSubmit,t=Object(n.useState)(""),c=Object(i.a)(t,2),o=c[0],l=c[1];return Object(r.jsx)("header",{className:f.a.Searchbar,children:Object(r.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.b.error("Please, input request for search.");l(""),a(o)},children:[Object(r.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(r.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){l(e.currentTarget.value.toLowerCase())}})]})})}var y=t(11),S=t.n(y),v=t(16);function G(){return(G=Object(v.a)(S.a.mark((function e(a,t){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(a,"&page=").concat(t,"&key=19034439-608cc2a9f2617ed99a498289b&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.hits);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={fetchGallery:function(e,a){return G.apply(this,arguments)}},F=t(17),B=t.n(F);var w=function(e){var a=e.onClickButton;return Object(r.jsx)("button",{className:B.a.Button,type:"button",onClick:a,children:"Load more"})},C=t(12),k=t.n(C),L=document.querySelector("#modal-root");function M(e){var a=e.onClose,t=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[]);var c=function(e){"Escape"===e.code&&a()};return Object(o.createPortal)(Object(r.jsx)("div",{className:k.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(r.jsx)("div",{className:k.a.Modal,children:t})}),L)}function N(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),s=l[0],h=l[1],g=Object(n.useState)(1),_=Object(i.a)(g,2),j=_[0],I=_[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),y=f[0],S=f[1],v=Object(n.useState)(!1),G=Object(i.a)(v,2),F=G[0],B=G[1],C=Object(n.useState)({}),k=Object(i.a)(C,2),L=k[0],N=k[1];Object(n.useEffect)((function(){""!==t&&(S(!0),setTimeout((function(){T()}),1e3))}),[t,j]);var T=function(){x.fetchGallery(t,j).then((function(e){h([].concat(Object(m.a)(s),Object(m.a)(e))),I(j)})).finally(S(!1))},E=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),2500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{onSubmit:function(e){c(e),I(1),h([])}}),t&&Object(r.jsx)(d,{images:s,onOpenModal:function(e){B(!0),N(e.target.dataset.largeImgForModal)}}),s.length>0&&Object(r.jsx)(w,{onClickButton:function(){I((function(e){return e+1})),E()}}),y&&Object(r.jsx)(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),F&&Object(r.jsx)(M,{onClose:function(){B(!1)},children:Object(r.jsx)("img",{src:L,alt:""})}),Object(r.jsx)(u.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),r(e),n(e),c(e),o(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),T()},5:function(e,a,t){e.exports={App:"Searchbar_App__1K3Z_",Searchbar:"Searchbar_Searchbar__diZCZ",SearchForm:"Searchbar_SearchForm__8K7Zu",SearchFormButton:"Searchbar_SearchFormButton__25x6X","SearchForm-button":"Searchbar_SearchForm-button__3zTqK",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__yveQe",SearchFormInput:"Searchbar_SearchFormInput__34Ed-","SearchForm-input":"Searchbar_SearchForm-input__20Fud",ImageGallery:"Searchbar_ImageGallery__1OJdd",ImageGalleryItem:"Searchbar_ImageGalleryItem__Wc-28","ImageGalleryItem-image":"Searchbar_ImageGalleryItem-image__1BQWf",Overlay:"Searchbar_Overlay__3B_i8",Modal:"Searchbar_Modal__O8PFb",Button:"Searchbar_Button__3j0zO"}}},[[47,1,2]]]);
//# sourceMappingURL=main.5af2adef.chunk.js.map