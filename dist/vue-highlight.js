!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highlight.js")):"function"==typeof define&&define.amd?define("VueHighlightJS",["highlight.js"],t):"object"==typeof exports?exports.VueHighlightJS=t(require("highlight.js")):e.VueHighlightJS=t(e.hljs)}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){var i=n(2)(n(1),n(3),null,null);e.exports=i.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=i(o);r.default.configure({languages:[]}),t.default={name:"highlight-code",props:{lang:String,inline:{type:Boolean,default:!1}},data:function(){return{inlineCodeStyles:{display:"inline !important","vertical-align":"middle"}}},methods:{init:function(){var e=this.inline?this.$refs["inline-code"]:this.$refs.code;r.default.highlightBlock(e)}},mounted:function(){this.init()},updated:function(){this.init()}},e.exports=t.default},function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,r=e.default);var l="function"==typeof r?r.options:r;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),i){var c=Object.create(l.computed||null);Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}}),l.computed=c}return{esModule:o,exports:r,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.inline?n("span",[n("code",{ref:"inline-code",class:e.lang,style:e.inlineCodeStyles},[e._t("default")],2)]):n("pre",[n("code",{ref:"code",class:e.lang},[e._t("default")],2)])},staticRenderFns:[]}},function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=i(o);t.default={component:r.default,install:function(e){e.component("highlight-code",r.default)}},e.exports=t.default}])});
//# sourceMappingURL=vue-highlight.js.map