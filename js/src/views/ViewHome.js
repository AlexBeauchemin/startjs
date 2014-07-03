define([
  'ring'
  ], function (ring) {
    "use strict";

  var className = 'ViewHome';

  $[className] = ring.create([$.View], {
    constructor: function (el) {
      var _this = this;
      _this.$super(el);
    },

    //-- Vars
    //--------------------------------------------------------------


    //-- Init
    //--------------------------------------------------------------
    init: function () {
      var _this = this;

      _this.$super();
    },

    //-- Functions
    //--------------------------------------------------------------
    bindEvents: function () {
      var _this = this;

      _this.$super();
    },

    empty: null
  });

  return $[className];
});