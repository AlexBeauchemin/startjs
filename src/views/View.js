define([
  'mootools',
  'class.mutators'
], function () {
  var className = 'View';

  return $[className] = new Class({
    jQuery: className,
    Implements: [Options, Events],

    options: {},

    initialize: function (el, options) {
      var self = this;

      self.el = $(el);
      self.setOptions(options);
      self.init();
    },

    //-- Vars
    //--------------------------------------------------------------

    //-- Init
    //--------------------------------------------------------------
    init: function () {
      var self = this;

      self.initHook();
      self.bindEvents();
    },

    //-- Hooks
    //--------------------------------------------------------------
    initHook: function () {
      var self = this;
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
      var self = this;
    },

    empty: null
  });
});