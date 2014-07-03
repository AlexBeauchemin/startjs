requirejs.config({
  paths: {
    'jquery': //[
      //'//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
      'libs/jquery-1.11.0.min',
    //],
    'ring': 'libs/ring',
    'underscore': 'libs/underscore',
    'bootstrap': 'libs/bootstrap'
  },
  shim: {
    'App': ['jquery', 'ring'],
    'ring': ['underscore'],
    'underscore': {
      exports: '_'
    },
    bootstrap: ['jquery']
  },

  waitSeconds: 15
});