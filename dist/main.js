!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:v(p,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var a=h++;t=m||(m=d(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=d(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(e,n),d=0;d<t.length;d++){var l=c(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poiret+One&family=Special+Elite&family=Unica+One&display=swap);"]),n.push([e.i,"body {\r\n    background-color: rgb(37, 37, 37);\r\n    color: rgb(226, 224, 220);\r\n}\r\n\r\nh1,\r\nh2,\r\nh6,\r\nh5 {\r\n    font-family: 'Unica One', cursive;\r\n}\r\n\r\nh1 {\r\n    margin-top: 30vh;\r\n    margin-left: 10vw;\r\n    font-size: 120px;\r\n    margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n    font-size: 60px;\r\n    margin-left: 10vw;\r\n}\r\n\r\n#home-title {\r\n    margin: 0 25vw 3vh 10vw;\r\n    font-family: 'Special Elite', cursive;\r\n    text-align: end;\r\n    font-size: 14px;\r\n}\r\n\r\na {\r\n    font-size: 25px;\r\n    font-family: 'Poiret One', cursive;\r\n    text-decoration: none;\r\n    color: aliceblue;\r\n}\r\n\r\n#menu1,\r\n#home2,\r\n#home3 {\r\n    margin-left: 68vw;\r\n}\r\n\r\n#contact1,\r\n#contact2,\r\n#menu3 {\r\n    margin-left: 2vw;\r\n}\r\n\r\n#courses {\r\n    margin-left: 15vw;\r\n}\r\n\r\n#courses h5 {\r\n    margin-left: 60vw;\r\n    margin-top: 40px;\r\n    font-size: 30px;\r\n    line-height: 20px;\r\n    padding: 0 5px 2px 5px;\r\n    border-left: 8px solid aliceblue;\r\n    border-bottom: 1px solid aliceblue;\r\n}\r\n\r\n#courses h6 {\r\n    font-size: 25px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#courses p {\r\n    font-family: 'Special Elite', cursive;\r\n    margin-left: 5vw;\r\n}\r\n\r\n#contact-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 50vh;\r\n}\r\n\r\n#contact-address {\r\n    font-size: 25px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#contact-tel {\r\n    font-size: 18px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n#contact-email {\r\n    font-size: 22px;\r\n    margin-top: 5px;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);var r={title:()=>"NOMAD Restaurant",description:()=>"This is DeEmerging from the spices and in the middle of traditionality, in the famous spices square, where you can find all variety of spices and other typically Moroccan merchandise, NOMAD opened its doors. In few years only, it managed to make a name for itself with its unique cuisine, particular and modern design and peerless view"};var o=(()=>{const e=(e,n,t)=>({title:e,description:n,price:t});return{title:()=>"Menu",courses:{"MAIN COURSES":[e("Braised Lamb","with sweet potato, red onion, mushroom, spinach, orange zest, ginger, cardamom and star anise",130),e("Spiced chicken leg","with apricots, dates, lemon, ginger and saffron",120),e("Wild caught Moroccan sole","with sautéed green vegetables and green chermoula",160),e("Nomad Couscous","slow braised preserved lemon infused beef over spiced fresh seasonal vegetables and wheat couscous",130)],"DESSERT MENU":[e("Moroccan Affogato","Espresso with Cinnamon, Cardamom and nutmeg over vanilla ice cream and toasted almonds",60),e("Hibiscus infused","yoghurt Panna Cotta",60),e("Ultra rich chocolate cake","with spiced chocolate ice cream",80)],"COLD STARTERS":[e("Moroccan Gazpacho","A variation of the classic Spanish cold soup with the addition of melon and ginger",60),e("Lentil salad","with roast beetroot and goat’s cheese from Essaouira",70),e("Sardine tart","with green olive tapenade and caramelized onions",70)],"HOT STARTERS":[e("Courgette/Zucchini","and feta fritters served with minted yoghurt",80),e("Vegetarian Briouat","Moroccan thin pastry filled with spiced tomato and zucchini/courgette with a root vegetable salad",70)],"SIDE DISHES":[e("Oven roasted","spiced fennel",40),e("Spiced Green beans","with almonds and lemon zest",40)]}}})();var a={title:()=>"Contact",address:()=>"1 Derb Aarjane, MARRAKECH MEDINA. MOROCCO",telephone:()=>"Tel: +212 5 24 38 16 09",email:()=>"info@nomadmarrakech.com"};t(0);(()=>{const e={body:document.querySelector("body")},n=()=>e.content,t=()=>{const n=document.createElement("div");var t;n.setAttribute("id","content"),e.body.insertBefore(n,e.body.firstChild),t=e.body.firstChild,e.content=t},i=(e,t)=>{const r=document.createElement("a");r.setAttribute("href",""),r.setAttribute("id",e.toLowerCase()+t),r.setAttribute("class",e.toLowerCase()),r.appendChild(document.createTextNode(e)),n().appendChild(r)},c=(e,t)=>{const r=document.createElement(t);r.appendChild(document.createTextNode(e)),n().appendChild(r)},s=(e,n,t)=>{const r=document.createElement("h5");r.appendChild(document.createTextNode(e)),r.setAttribute("id",t),n.appendChild(r)},d=()=>{n().parentNode.removeChild(n())},l=e=>{e.preventDefault(),t(),c(r.title(),"h1"),s(r.description(),n(),"home-title"),i("Menu",1),i("Contact",1)},u=e=>{e.preventDefault(),t(),i("Home",2),i("Contact",2),c(o.title(),"h2"),(e=>{const t=document.createElement("div");t.setAttribute("id","courses"),Object.entries(e).forEach((e,n)=>{s(e[0],t,"course-"+(n+1)),e[1].forEach(e=>{const n=document.createElement("div"),r=document.createElement("h6"),o=document.createElement("p"),a=document.createElement("p");r.appendChild(document.createTextNode(e.title)),n.appendChild(r),o.appendChild(document.createTextNode(e.description)),n.appendChild(o),a.appendChild(document.createTextNode(`Price: ${e.price}Dh`)),n.appendChild(a),t.appendChild(n)})}),n().appendChild(t)})(o.courses)},p=e=>{e.preventDefault(),t(),i("Home",3),i("Menu",3),c(a.title(),"h2"),(()=>{const e=document.createElement("div");s(a.address(),e,"contact-address"),s(a.telephone(),e,"contact-tel"),s(a.email(),e,"contact-email"),e.setAttribute("id","contact-card"),n().appendChild(e)})()};return{render:()=>{document.addEventListener("DOMContentLoaded",l,{once:!0}),document.addEventListener("click",e=>{e.target&&"home"===e.target.className&&(d(),l(e))}),document.addEventListener("click",e=>{e.target&&"menu"===e.target.className&&(d(),u(e))}),document.addEventListener("click",e=>{e.target&&"contact"===e.target.className&&(d(),p(e))})}}})().render()}]);