!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){var r=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),c=[];function u(n){for(var t=-1,e=0;e<c.length;e++)if(c[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],l=e[a]||0,f="".concat(a," ").concat(l);e[a]=l+1;var s=u(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:y(p,t),references:1}),r.push(f)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var f,s=(f=[],function(n,t){return f[n]=t,f.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,b=0;function y(n,t){var e,r,o;if(t.singleton){var i=b++;e=h||(h=l(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=u(e[r]);c[o].references--}for(var i=a(n,t),l=0;l<e.length;l++){var f=u(e[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}e=i}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\nclub-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<n.length;u++){var a=[].concat(n[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),t.push(a))}},t}},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-color: cornflowerblue;\n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h2 {\n               padding: 16px;\n           }\n       </style>\n       <h2>Club Finder</h2>"}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("app-bar",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .fan-art-club {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .club-info {\n                   padding: 24px;\n               }\n              \n               .club-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .club-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n\n           </style>\n           <img class="fan-art-club" src="'.concat(this._club.strTeamBadge,'" alt="Fan Art">\n           <div class="club-info">\n               <h2>').concat(this._club.strTeam,"</h2>\n               <p>").concat(this._club.strDescriptionEN,"</p>\n           </div>")}},{key:"club",set:function(n){this._club=n,this.render()}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("club-item",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           max-width: 800px;\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid cornflowerblue;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: cornflowerblue;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-color: cornflowerblue;\n           color: white;\n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Search football club" id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Search</button>\n       </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("search-bar",f)},function(n,t,e){"use strict";e.r(t);e(0),e(4),e(5);function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function c(n){var t="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,f(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(p,n);var t,e,r,c,u,s=(t=p,e=a(),function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return r=p,(c=[{key:"render",value:function(){var n=this;this.shadowDOM.innerHTML="",this._clubs.forEach((function(t){var e=document.createElement("club-item");e.club=t,n.shadowDOM.appendChild(e)}))}},{key:"renderError",value:function(n){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n        </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(n,"</h2>")}},{key:"clubs",set:function(n){this._clubs=n,this.render()}}])&&o(r.prototype,c),u&&o(r,u),p}(c(HTMLElement));customElements.define("club-list",s);e(6);function p(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var d=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r;return t=n,r=[{key:"searchClub",value:function(n){return fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=".concat(n)).then((function(n){return n.json()})).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("".concat(n," is not found"))}))}}],(e=null)&&p(t.prototype,e),r&&p(t,r),n}();function h(n,t,e,r,o,i,c){try{var u=n[i](c),a=u.value}catch(n){return void e(n)}u.done?t(a):Promise.resolve(a).then(r,o)}var b=function(){var n=document.querySelector("search-bar"),t=document.querySelector("club-list"),e=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.searchClub(n.value);case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(n){h(i,r,o,c,u,"next",n)}function u(n){h(i,r,o,c,u,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(n){t.clubs=n},o=function(n){t.renderError(n)};n.clickEvent=e};document.addEventListener("DOMContentLoaded",b),console.log("Tes")}]);