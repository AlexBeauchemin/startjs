/*jshint loopfunc: true */

requirejs([
  'ring',
  'bootstrap',
  'views/View'
], function (ring) {
  

  var className = 'App';

  $[className] = ring.create({
    constructor: function (el) {
      var _this = this;
      _this.$el = el;
      _this.init();
    },

    //-- Vars
    //--------------------------------------------------------------
    view: null,
    viewName: '',

    //-- Init
    //--------------------------------------------------------------
    init: function () {
      var _this = this,
        view = _this.$el.attr('data-view');

      _this.viewName = 'ViewHome';
      if (view) _this.viewName = 'View' + view;

      _this.loadViewJs(function(){ });
      _this.bindEvents();
    },

    bindEvents: function () {
      var _this = this;
    },

    //Load the view file for the current page (ex: ViewHome.js)
    loadViewJs: function(callback) {
      var _this = this;

      require(['views/' + _this.viewName ], function () {
        _this.view = new $[_this.viewName](_this.$el);
        callback();
      },function (err) {
        //Callback in case the view file does not exists.
        //Loading View.js instead
        console.log("Can't load view file '" + _this.viewName + "', loading View.js instead: ", err);
        _this.view = new $.View(_this.$el);
        callback();
      });
    },

    //Avoid handling last comma
    empty: null
  });

  //Starting the App
  var App;

  $(function () {
    App = new $[className]($('body'));
  });
});