!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);document.body.addEventListener("click",(function(e){const t=e.target.closest(".e-accordion__short");if(t){t.closest(".e-accordion").getElementsByClassName("e-accordion__more")[0].classList.toggle("e-accordion__more_view_default")}})),document.body.addEventListener("click",(function(e){const t=e.target.closest(".onoffswitch");if(t){t.classList.toggle("onoffswitch_checked");const e=".theme_color_project-default,.theme_color_project-inverse",o=document.querySelectorAll(e);Array.from(o).forEach(e=>{e.classList.toggle("theme_color_project-default"),e.classList.toggle("theme_color_project-inverse")})}}))}]);