!function(){function t(t){function r(){}var e={};e.Object=r,t.extend(e.Object,{__mro__:[e.Object],__properties__:{__ringConstructor__:function(){}},__classId__:1,__parents__:[],__classIndex__:{1:e.Object}}),t.extend(e.Object.prototype,{__ringConstructor__:e.Object.__properties__.__ringConstructor__});var n=function(t){function r(){}r.prototype=t;var e=new r;return e.__proto__=t,e};e.__objectCreate=n;var o=3,_=/xyz/.test(function(){xyz()})?/\$super\b/:/.*/;e.create=function(){var r=t.toArray(arguments);r.reverse();var i=r[0],a=r.length>=2?r[1]:[];a instanceof Array||(a=[a]),t.each(a,function(t){s(t)}),0===a.length&&(a=[e.Object]);var u=i.constructor!==Object?i.constructor:void 0;i=t.clone(i),delete i.constructor,u?i.__ringConstructor__=u:(u=i.init,delete i.init,u&&(i.__ringConstructor__=u));var p=function(){this.$super=null,this.__ringConstructor__.apply(this,arguments)};p.__properties__=i;var f=t.pluck(a,"__mro__");f=f.concat([a]);var l=[p].concat(c(f)),d=Object.prototype;t.each(t.clone(l).reverse(),function(r){var e=n(d);t.extend(e,r.__properties__),t.each(t.keys(e),function(t){var n=e[t];"function"!=typeof n||!_.test(n)||"__ringConstructor__"!==t&&r.__ringConvertedObject__||(e[t]=function(t,r,e){return function(){var n=this.$super;this.$super=e[t];try{return r.apply(this,arguments)}finally{this.$super=n}}}(t,n,d))}),e.constructor=r,d=e});var v=o++;return p.__mro__=l,p.__parents__=a,p.prototype=d,p.__classId__=v,p.__classIndex__={},t.each(p.__mro__,function(t){p.__classIndex__[t.__classId__]=t}),p.prototype.classInit&&(p.__classInit__=p.prototype.classInit,delete p.prototype.classInit),t.each(t.chain(p.__mro__).clone().reverse().value(),function(t){if(t.__classInit__){var r=t.__classInit__(p.prototype);void 0!==r&&(p.prototype=r)}}),p};var c=function(r){for(var n=[],o=t.clone(r);;){for(var _=!1,c=0;c<o.length;c++)if(0!==o[c].length){var s=o[c][0],i=t.find(o,function(r){return t.contains(t.rest(r),s)});if(!i){_=!0,n.push(s),o=t.map(o,function(r){return t.head(r)===s?t.rest(r):r});break}}if(!_){if(t.all(o,function(t){return 0===t.length}))return n;throw new e.ValueError("Cannot create a consistent method resolution order (MRO)")}}},s=function(r){if(!r.__classId__){var n=Object.getOwnPropertyNames?function(){var e={};return function n(r){r!==Object.prototype&&(t.extend(e,t.chain(Object.getOwnPropertyNames(r)).map(function(t){return[t,!0]}).object().value()),n(Object.getPrototypeOf(r)))}(r.prototype),t.object(t.map(t.keys(e),function(t){return[t,r.prototype[t]]}))}():r.prototype;n=t.chain(n).map(function(t,r){return[r,t]}).filter(function(t){return"constructor"!==t[0]&&"__proto__"!==t[0]}).object().value();var _=o++;t.extend(r,{__mro__:[r,e.Object],__properties__:t.extend({},n,{__ringConstructor__:function(){this.$super.apply(this,arguments);var t=this.$super;this.$super=null;try{r.apply(this,arguments)}finally{this.$super=t}}}),__classId__:_,__parents__:[e.Object],__classIndex__:{1:e.Object},__ringConvertedObject__:!0}),r.__classIndex__[_]=r}};return e.instance=function(t,r){return"object"==typeof t&&t.constructor&&t.constructor.__classIndex__&&"function"==typeof r&&"number"==typeof r.__classId__?void 0!==t.constructor.__classIndex__[r.__classId__]:"string"==typeof r?typeof t===r:t instanceof r},e.Error=e.create({name:"ring.Error",defaultMessage:"",constructor:function(t){this.message=t||this.defaultMessage},classInit:function(r){var e=[],o=function(t){t&&(e.push(t),o(t.__proto__))};o(r);var _=new Error;return t.each(t.clone(e).reverse(),function(r){var e=n(_);t.each(r,function(t,r){"__proto__"!==r&&(e[r]=t)}),_=e}),_}}),e.ValueError=e.create([e.Error],{name:"ring.ValueError"}),e.getSuper=function(r,n,o){for(var _,c=n.constructor.__mro__,s=0;s<c.length;s++)if(c[s]===r){_=s;break}if(void 0===_)throw new e.ValueError("Class not found in instance's method resolution order.");var i,a=function(t,r){return 0===r?t:a(t.__proto__,r-1)},u=a(n.constructor.prototype,_+1);return i="constructor"!==o&&"init"!==o?u[o]:u.__ringConstructor__,e.instance(i,"function")?t.bind(i,n):i},e}if("undefined"!=typeof exports){var r=require("underscore");r.extend(exports,t(r))}else"undefined"!=typeof define?define(["underscore"],t):window.ring=t(_)}();
//# sourceMappingURL=ring.js.map