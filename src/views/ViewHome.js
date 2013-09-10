define([
  'mootools',
  'class.mutators',
  'src/views/View',
], function () {
  var className = 'ViewHome';

  return $[className] = new Class({
    jQuery: className,
    Extends: $.View,

    options: {},

    //-- init
    //---------------------------------------------
    initialize: function (el, options) {
      el = $(el);
      var self = this;

      self.parent(el, options);
    },

    //-- Vars
    //--------------------------------------------------------------


    //-- Init
    //--------------------------------------------------------------
    initHook: function () {
      var self = this;

      self.parent();
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
      var self = this;

      self.parent();
    },

    empty: null
  });
});