(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(25),o=a.n(c),i=(a(33),a(5)),m=a.n(i),s=a(8),u=a(3),d=a(9),p=a.n(d),f=a(6);n=function(){var e=Object(s.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(C,{params:{limit:1,apiKey:k,breed_id:t}});case 2:return a=e.sent,n="",a.data.length>0&&(n=a.data[0].url,localStorage.setItem("dogImage"+t,n)),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var b=function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=e.breed.name.toLowerCase().replace(/ /g,"-");return Object(r.useEffect)(function(){null===localStorage.getItem("dogImage"+e.breed.id)?n(e.breed.id).then(function(e){o(e)}):o(localStorage.getItem("dogImage"+e.breed.id))},[e.breed.id]),l.a.createElement("li",{className:"md:w-1/4 w-1/2 md:px-4 px-2 md:mb-8 mb-4"},l.a.createElement(f.b,{to:"/"+i},l.a.createElement("div",{className:"overflow-hidden rounded-lg mb-2 h-48 bg-gray-200 border-4 border-gray-200"},""!==c&&l.a.createElement("img",{className:"h-full w-full object-cover object-top fade",src:c,alt:"Picture of a "+e.breed.name})),l.a.createElement("h3",{className:"font-bold"},e.breed.name)))},g=function(){return l.a.createElement("div",{className:"px-8"},l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"bounce1"}),l.a.createElement("div",{className:"bounce2"}),l.a.createElement("div",{className:"bounce3"})))},h=function(e){return l.a.createElement("div",{className:"pl-2 w-3/4 ml-auto"},l.a.createElement("input",{className:"focus:outline-none md:text-2xl text-xl font-medium w-full",placeholder:"Search for a dog",type:"text",value:e.query,onChange:function(t){return e.queryChange(t.target.value)}}))},E=a(7),v=Object(E.e)(function(e){return l.a.createElement("div",{className:"flex items-center sticky top-0 left-0 right-0 md:px-8 px-6 py-4 bg-white z-20"},"/"===e.location.pathname?l.a.createElement("h1",null,e.pageTitle):l.a.createElement("div",{className:"flex items-center"},l.a.createElement(f.b,{className:"md:mr-4 mr-2 md:w-10 w-6 md:h-10 p-1 h-6 flex items-center justify-center rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-200",to:"/"},l.a.createElement("svg",{className:"md:w-auto w-full h-auto",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M20 9C20 9.44203 19.8244 9.86595 19.5118 10.1785C19.1993 10.4911 18.7754 10.6667 18.3333 10.6667H6.39667L10.2558 14.4883C10.4106 14.6431 10.5333 14.8269 10.617 15.0291C10.7008 15.2313 10.7438 15.4481 10.7438 15.667C10.7438 15.8858 10.7006 16.1026 10.6168 16.3048C10.533 16.507 10.4102 16.6907 10.2554 16.8454C10.1006 17.0002 9.91686 17.1229 9.71463 17.2066C9.5124 17.2903 9.29566 17.3334 9.07679 17.3334C8.85791 17.3333 8.64119 17.2902 8.43899 17.2064C8.23679 17.1226 8.05307 16.9998 7.89833 16.845L0 9L7.89833 1.155C8.21085 0.842378 8.63475 0.666704 9.07679 0.666626C9.51883 0.666548 9.94279 0.842072 10.2554 1.15459C10.568 1.4671 10.7437 1.891 10.7438 2.33304C10.7439 2.77508 10.5683 3.19904 10.2558 3.51167L6.39667 7.33334H18.3333C18.7754 7.33334 19.1993 7.50893 19.5118 7.82149C19.8244 8.13405 20 8.55797 20 9Z",fill:"currentColor"}))),l.a.createElement("h1",null,e.pageTitle)),e.children)}),w=function(){var e,t=Object(r.useState)(!0),a=Object(u.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)("All dogs"),i=Object(u.a)(o,2),d=i[0],f=i[1],E=Object(r.useState)(""),w=Object(u.a)(E,2),x=w[0],j=w[1],N=Object(r.useState)([]),O=Object(u.a)(N,2),C=O[0],S=O[1],I=Object(r.useState)([]),L=Object(u.a)(I,2),_=L[0],q=L[1],B=function(){var t=Object(s.a)(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(y,{params:{limit:null,apiKey:k}});case 3:a=t.sent,e=a.data.map(function(e){return{id:e.id,name:e.name}}),S(e),q(e),c(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c(!1);case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)(function(){document.title="Doges",B()},[]),Object(r.useEffect)(function(){q(""!==x?C.filter(function(e){return e.name.toLowerCase().includes(x.toLowerCase())}):C)},[C,x]),Object(r.useEffect)(function(){f(""!==x?_.length+" dogs":"All dogs")},[x,_]);return l.a.createElement("div",{className:"container"},l.a.createElement(v,{pageTitle:d},l.a.createElement(h,{query:x,queryChange:j})),n?l.a.createElement(g,null):l.a.createElement("ul",{className:"flex flex-wrap pt-2 pb-4 px-4"},l.a.createElement(function(){return _.map(function(e){return l.a.createElement(b,{key:e.id,breed:e,query:x})})},null)))},x=function(){return l.a.createElement(w,null)},j=function(e){return l.a.createElement("div",{className:"flex flex-wrap md:text-lg mb-4 pb-4 border-b border-gray-200"},l.a.createElement("p",{className:"w-1/4 font-bold"},e.label),l.a.createElement("p",{className:"pl-8 w-3/4 pl-2 ml-auto md:text-left text-right"},e.detail))},N=function(e){var t=e.match,a=Object(r.useState)(!0),c=Object(u.a)(a,2),o=c[0],i=c[1],d=Object(r.useState)({}),f=Object(u.a)(d,2),b=f[0],h=f[1],E=Object(r.useState)(""),w=Object(u.a)(E,2),x=w[0],N=w[1],O=t.params.id.toUpperCase().replace(/-/g," "),y=function(){var e=Object(s.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(S,{params:{q:O,apiKey:k}});case 3:t=e.sent,h(t.data[0]),i(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!1);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){y()}),Object(r.useEffect)(function(){document.title=b.name+" \u2013 Doges",null===localStorage.getItem("dogImage"+b.id)?n(b.id).then(function(e){N(e)}):N(localStorage.getItem("dogImage"+b.id))},[b]),l.a.createElement("div",{className:"container"},o?l.a.createElement(g,null):l.a.createElement("div",null,l.a.createElement(v,{pageTitle:b.name}),l.a.createElement("section",{className:"pt-2 pb-4 md:px-8 px-6"},l.a.createElement("div",{className:"flex flex-wrap"},l.a.createElement("div",{className:"lg:w-1/2 overflow-hidden rounded-lg mb-8 dog-image relative bg-gray-200 border-4 border-gray-200"},""!==x&&l.a.createElement("img",{className:"object-cover object-top fade w-full h-full",src:x,alt:"Picture of a "+b.name})),l.a.createElement("section",{className:"lg:w-1/2 md:pb-12 lg:pl-8 pb-6"},b.bred_for&&l.a.createElement(j,{label:"Bred for",detail:b.bred_for}),b.breed_group&&l.a.createElement(j,{label:"Breed group",detail:b.breed_group}),b.origin&&l.a.createElement(j,{label:"Origin",detail:b.origin}),b.life_span&&l.a.createElement(j,{label:"Life span",detail:b.life_span}),b.temperament&&l.a.createElement(j,{label:"Temperament",detail:b.temperament}),b.height&&l.a.createElement(j,{label:"Height",detail:b.height.imperial+" inches"}),b.weight&&l.a.createElement(j,{label:"Weight",detail:b.weight.imperial+" pounds"}))))))},O=function(){return l.a.createElement("header",{className:"w-11/12 md:px-8 px-6 py-3 lg:fixed top-0 left-0"},l.a.createElement(f.b,{to:"/",className:"focus:outline-none"},l.a.createElement("span",{className:"text-3xl block",role:"img","aria-label":"dog"},"\ud83d\udc15")))},y="https://api.thedogapi.com/v1/breeds",C="https://api.thedogapi.com/v1/images/search",S="https://api.thedogapi.com/v1/breeds/search",k="dda2eda4-5ec5-46d6-850f-ca0619ad7dd1";var I=function(){return l.a.createElement(f.a,{basename:"/"},l.a.createElement(O,null),l.a.createElement(E.a,{exact:!0,path:"/",component:x}),l.a.createElement(E.a,{path:"/:id",component:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.edffde11.chunk.js.map