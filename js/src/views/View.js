define([
  'ring'
], function (ring) {
  "use strict";

  var className = 'View';

  $[className] = ring.create({
    constructor: function (el) {
      var _this = this;

      _this.$el = el;
      _this.init();
    },

    //-- Vars
    //--------------------------------------------------------------
    $nav: null,

    //-- Init
    //--------------------------------------------------------------
    init: function () {
      var _this = this;

      _this.$nav = _this.$el.find('nav');

      _this.bindEvents();
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
      var _this = this;

      /* ---- Examples --------------------

      _this.$el.find('.test').on('click', function() {
        ...
      });

      _this.$nav.on('click', function() {
        ...
      });

      */
    },

    anotherFunction: function () {
      // ...
    },

    //Avoid handling last comma
    empty: null
  });

  return $[className];
});