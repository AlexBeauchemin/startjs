define([
  'mootools',
  'class.mutators',
  'src/views/View'
], function () {

  var className = 'App';
  //--
  return $[className] = new Class({
    jQuery: className,

    Implements: [Options, Events],

    options: {},

    //-- init
    //---------------------------------------------
    initialize: function (el, options) {
      el = $(el);
      var self = this;
      self.setOptions(options); // inherited from Options like jQuery.extend();
      self.el = el; // cache the jQuery object

      self.init();
    },

    //-- Vars
    //--------------------------------------------------------------
    view: null,
    viewName: 'View',


    //-- Init
    //--------------------------------------------------------------
    init: function () {
      var self = this;

      var dataView = self.el.attr('data-view');
      if (dataView)
        self.viewName = 'View' + dataView;

      self.loadViewJs();
    },

    loadViewJs: function () {
      var self = this;

      require(['src/views/' + self.viewName ], function () {
        self.view = new $[self.viewName](self.el);
      });
    },

    empty: null
  });
});