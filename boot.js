var App;

// Avoid IE errors on console.log
if (typeof console === "undefined") {
  console = {
    log: function (msg) { }
  };
}

(function () {
  requirejs.config({
    paths: {
      'jquery': [
        '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        'lib/jquery'
      ],
      'mootools': 'lib/mootools-core-1.4.5',
      'class.mutators': 'lib/Class.Mutators.jQuery'
    },
    shim: {
      'src/App': {
        deps: [
          'jquery'
        ]
      },
      'class.mutators': {
        deps: [
          'mootools'
        ],
        exports: 'classmutators'
      }
    },
    waitSeconds: 15
  });

  requirejs([
    'jquery',
    'src/App'
  ], function () {
    $(function () {
      App = new $.App($('body'));
    });
  });

})();