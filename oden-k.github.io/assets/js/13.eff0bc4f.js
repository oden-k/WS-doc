(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(11),n(18),n(23),n(22),n(165);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}var o=n(0),a={jsStyle:"es5",useDirectiveShorthands:!1};if("undefined"!=typeof window)for(var c in a){var s=a[c],u=window.localStorage.getItem("".concat("__vueExampleGlobalSettings",".").concat(c));a[c]=u?JSON.parse(u):s}t.a=new o.a({data:a,watch:i({},Object.keys(a).map(function(e){return r({},e,function(t){"undefined"!=typeof window&&window.localStorage.setItem("".concat("__vueExampleGlobalSettings",".").concat(e),JSON.stringify(t))})}).reduce(function(e,t){return i({},e,t)},{}))})},161:function(e,t,n){e.exports={button:"button_LETSkC-b"}},164:function(e,t,n){var r=n(25),i=n(24),o=n(49),a=n(50);e.exports=function(e,t,n,c,s){r(t);var u=i(e),l=o(u),d=a(u.length),f=s?d-1:0,p=s?-1:1;if(n<2)for(;;){if(f in l){c=l[f],f+=p;break}if(f+=p,s?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;s?f>=0:d>f;f+=p)f in l&&(c=t(c,l[f],f,u));return c}},165:function(e,t,n){"use strict";var r=n(4),i=n(164);r(r.P+r.F*!n(17)([].reduce,!0),"Array",{reduce:function(e){return i(this,e,arguments.length,arguments[1],!1)}})},166:function(e,t,n){"use strict";var r=n(161),i=n.n(r);t.default=i.a},61:function(e,t,n){"use strict";n.r(t);n(79);var r=n(160),i={props:{name:{type:String,required:!0},html:{type:String,required:!0},js:{type:String,required:!0},css:{type:String,required:!0}},methods:{openPlayground:function(){if(!this.resultDisabled){var e=document.createElement("form");e.method="POST",e.action="https://codepen.io/pen/define",e.target="_blank";var t=document.createElement("input");t.type="hidden",t.name="data",t.value=JSON.stringify({title:"Vue Example: ".concat(this.name),editors:"".concat(this.html?1:0).concat(this.css?1:0).concat(this.js?1:0),private:!0,html:this.html,js_external:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",js_pre_processor:"modern"===r.a.jsStyle?"babel":"",js:this.js,css:this.css,css_prefix:"autoprefixer"}),e.appendChild(t),document.body.appendChild(e),e.submit(),e.parentNode.removeChild(e)}}}},o=n(166),a=n(1);var c=Object(a.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("button",{class:this.$style.button,on:{click:this.openPlayground}},[this._v("\n  Open Playground\n")])},[],!1,function(e){this.$style=o.default.locals||o.default},null,null);t.default=c.exports}}]);