"use strict";(self.webpackChunkauto_rent_ua=self.webpackChunkauto_rent_ua||[]).push([[480],{9149:function(e,s,n){n.d(s,{Z:function(){return Y}});var i=n(2791),t="ListItem_imgBox__8lXsU",r="ListItem_img__koc3o",l="ListItem_btnIcon__rpBl+",a="ListItem_active__xvEKZ",c="ListItem_item__3+qKK",d="ListItem_btn__L2aV7",o="ListItem_title__dZAH+",u="ListItem_titleBox__LazK3",m="ListItem_desc__xxcZ4",p=n(6497),x=n(4420),_=n(4436),h=n(9439),j=n(4164),f="Modal_closeButton__Ya+Ev",g="Modal_modalContent__axM59",v="Modal_modalWrapper__ncah9",N=n(3329),y=document.querySelector("#modal"),F=function(e){var s=e.closeModal,n=e.children,t=(0,i.useCallback)((function(e){"Escape"===e.key&&s()}),[s]);(0,i.useEffect)((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[s,t]);return j.createPortal((0,N.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&s()},className:v,children:(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("button",{className:f,onClick:s,children:(0,N.jsx)("svg",{width:"16",height:"16",children:(0,N.jsx)("use",{xlinkHref:"".concat(_.Z,"#icon-close")})})}),n]})}),y)},L="DetailsForm_card__NUb12",b="DetailsForm_imgBox__lhuC6",k="DetailsForm_img__rsd-g",C="DetailsForm_title__F8p33",I="DetailsForm_description__-qTYf",P="DetailsForm_addTitle__MkV46",D="DetailsForm_accessories__Kf+mY",S="DetailsForm_desc__FZ5ba",w="DetailsForm_titleConditions__bMwL7",M="DetailsForm_rentalConditions__TW5qP",Z="DetailsForm_btn__f35uP",E=n(422),R=function(e){return e.split(",")[1]},K=function(e){return e.split(",")[2]},T=function(e){var s=e.advert,n=s.img,i=s.make,t=s.model,r=s.year,l=s.address,a=s.id,c=s.type,d=s.fuelConsumption,o=s.engineSize,u=s.description,m=s.functionalities,p=s.accessories,x=s.rentalConditions,_=s.rentalPrice,h=s.mileage,j=R(l),f=K(l),g=function(e){return e.split("\n").map((function(e){return e.includes(":")?(0,N.jsxs)("p",{children:[e.split(":")[0],(0,N.jsx)("span",{style:{color:"rgb(52, 112, 255)",fontWeight:"600"},children:e.split(":")[1]})]},(0,E.x0)()):(0,N.jsx)("p",{children:e},(0,E.x0)())}))}(x);return(0,N.jsxs)("div",{className:L,children:[(0,N.jsx)("div",{className:b,children:(0,N.jsx)("img",{className:k,src:n,alt:t,width:"450px"})}),(0,N.jsxs)("p",{className:C,children:[i," ",(0,N.jsx)("span",{children:t}),", ",r]}),(0,N.jsxs)("div",{className:S,children:[(0,N.jsxs)("p",{children:[j,(0,N.jsx)("span",{style:{padding:"0 6px"},children:"|"}),f,(0,N.jsx)("span",{style:{padding:"0 6px"},children:"|"}),"Id: ",a,(0,N.jsx)("span",{style:{padding:"0 6px"},children:"|"}),"Year: ",r,(0,N.jsx)("span",{style:{padding:"0 6px"},children:"|"}),"Type: ",c]}),(0,N.jsxs)("p",{children:["Fuel Consumption: ",d,(0,N.jsx)("span",{style:{padding:"0 6px"},children:"|"}),"Engine Size: ",o]})]}),(0,N.jsx)("p",{className:I,children:u}),(0,N.jsx)("p",{className:P,children:"Accessories and Functionalities:"}),(0,N.jsx)("div",{className:D,children:p.map((function(e){return(0,N.jsxs)("p",{children:[e.split(" ").slice(0,2).join(" "),(0,N.jsx)("span",{style:{padding:"0 0 0 6px"},children:"|"})]},(0,E.x0)())}))}),(0,N.jsx)("div",{className:D,children:m.map((function(e){return(0,N.jsxs)("p",{children:[" ",e.split(" ").slice(0,2).join(" "),(0,N.jsx)("span",{style:{padding:"0 0 0 6px"},children:"|"})]},(0,E.x0)())}))}),(0,N.jsx)("p",{className:w,children:"Rental Conditions:"}),(0,N.jsxs)("div",{className:M,children:[(0,N.jsxs)("p",{children:["Price: ",(0,N.jsx)("span",{style:{color:"rgb(52, 112, 255)",fontWeight:"600"},children:_})]}),g,(0,N.jsxs)("p",{children:["Mileage: ",(0,N.jsx)("span",{style:{color:"rgb(52, 112, 255)",fontWeight:"600"},children:h.toLocaleString("en-US")})]})]}),(0,N.jsx)("a",{className:Z,href:"tel:+380730000000",children:"Rental car"})]})},Y=function(e){var s=e.advert,n=function(){var e=(0,i.useState)(!1),s=(0,h.Z)(e,2),n=s[0],t=s[1];return{isOpen:n,close:function(){return t(!1)},open:function(){return t(!0)},toggle:function(){return t((function(e){return!e}))}}}(),j=n.isOpen,f=n.toggle,g=(0,x.I0)(),v=(0,x.v9)(p.P5),y=s.img,L=s.model,b=s.address,k=s.rentalCompany,C=s.type,I=s.id,P=s.functionalities,D=s.make,S=s.rentalPrice,w=s.year,M=R(b),Z=K(b),E=function(e){return e.slice().split(" ").slice(0,2).join(" ").slice(0,11)}(P[0]),Y=v.find((function(e){return e.id===s.id})),B=("SLK-Class"===L?"Mercedes":"Range Rover Sport"===L&&"Range Rover")||L,W=C.includes("Sedan")?"Sedan":C;return j?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open"),(0,N.jsxs)("li",{className:c,children:[(0,N.jsxs)("div",{className:t,children:[(0,N.jsx)("img",{className:r,src:y,alt:L,width:"350px"}),(0,N.jsx)("button",{onClick:function(){return function(e){if(v.find((function(s){return s.id===e.id})))return g((0,p.hl)(e.id));g((0,p.Tl)(e))}(s)},className:l,children:(0,N.jsx)("svg",{className:Y?a:"",width:"18",height:"18",children:(0,N.jsx)("use",{xlinkHref:"".concat(_.Z,"#icon-heart")})})})]}),(0,N.jsxs)("div",{className:u,children:[(0,N.jsxs)("p",{className:o,children:[D," ",(0,N.jsx)("span",{children:L.length>8?"":L}),", ",w]}),(0,N.jsx)("p",{className:o,children:S})]}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("p",{children:M}),"|",(0,N.jsx)("p",{children:Z}),"|",(0,N.jsx)("p",{children:k})," "]}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("p",{children:W}),"|",(0,N.jsx)("p",{children:L===C?D:B}),"|",(0,N.jsx)("p",{children:I}),"|",(0,N.jsxs)("p",{children:[E,"..."]})," "]}),(0,N.jsx)("button",{onClick:function(){f()},className:d,children:"Learn more"}),j&&(0,N.jsx)(F,{closeModal:f,children:(0,N.jsx)(T,{toggle:f,advert:s})})]})}},1480:function(e,s,n){n.r(s),n.d(s,{default:function(){return m}});n(2791);var i=n(4420),t=n(6497),r=n(9149),l="FavoritesPage_favList__7VRpc",a="FavoritesPage_list__JFypb",c="FavoritesPage_empty__Y1FCp",d="FavoritesPage_link__bJ5E7",o=n(1087),u=n(3329),m=function(){var e=(0,i.v9)(t.P5);return(0,u.jsx)("div",{className:l,children:e.length?(0,u.jsx)("ul",{className:a,children:e.map((function(e){return(0,u.jsx)(r.Z,{advert:e},e.id)}))}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:c,children:"Your list is empty"}),(0,u.jsx)(o.OL,{className:d,to:"/catalog",children:"Start research"})]})})}},422:function(e,s,n){n.d(s,{x0:function(){return t}});var i="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,s="",n=crypto.getRandomValues(new Uint8Array(e));e--;)s+=i[63&n[e]];return s}}}]);
//# sourceMappingURL=480.65c3fdff.chunk.js.map