require(["ring","bootstrap","views/View"],function(e){var i="App";$[i]=e.create({constructor:function(e){var i=this;i.$el=e,i.init()},view:null,viewName:"",init:function(){var e=this,i=e.$el.attr("data-view");e.viewName="ViewHome",i&&(e.viewName="View"+i),e.loadViewJs(function(){}),e.bindEvents()},bindEvents:function(){},loadViewJs:function(e){var i=this;require(["views/"+i.viewName],function(){i.view=new $[i.viewName](i.$el),e()},function(n){console.log("Can't load view file '"+i.viewName+"', loading View.js instead: ",n),i.view=new $.View(i.$el),e()})},empty:null});var n;$(function(){n=new $[i]($("body"))})});
//# sourceMappingURL=App.js.map