module.exports = function (grunt) {
  var config = {
    jsLibs: 'js/src/libs/custom',
    jsSrc: 'js/src',
    jsDest: 'js/dest',
    views: []
  };

  //Dynamically create list of view to bundle for r.js
  grunt.file.expand({ cwd: config.jsSrc + '/views/' }, ["**/*.js", "!View.js"]).forEach(function(item){
    config.views.push({
      name: 'views/' + item.replace('.js', ''),
      exclude: ['common']
    });
  });

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> - <%= pkg.version %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author.name %> - <%= pkg.author.url %> */\n\n',
    jshint: {
      files: ['<%= config.jsSrc %>/*.js', '<%= config.jsSrc %>/**/*.js', '<%= config.jsLibs %>/*.js'],
      options: {
        force: true,
        ignores: ['<%= config.jsSrc %>/*.min.js', '<%= config.jsSrc %>/**/*.min.js', '<%= config.jsLibs %>/*.min.js', '<%= config.jsSrc %>/libs/*.js'],
        esnext: true //Avoid errors when using es6 import functionality
      }
    },
    retire: {
      js: ['<%= config.jsSrc %>/libs/*.js'],
      options: {}
    },
    requirejs: {
      dist: {
        options: {
          baseUrl: "<%= config.jsSrc %>",
          mainConfigFile: "<%= config.jsSrc %>/common.js",
          dir: "<%= config.jsDest %>/",
          modules: [
            {
              //module names are relative to baseUrl
              name: 'common',
              //List common dependencies here. Only need to list
              //top level dependencies, "include" will find
              //nested dependencies.
              include: [
                'libs/require',
                'App',
                'jquery',
                'underscore',
                'ring',
                'views/View'
              ]
            }
          ].concat(config.views),

          //Options needed for sourcemaps
          preserveLicenseComments: false,
          generateSourceMaps: true,
          optimize: 'uglify2'
        }
      }
    },
    watch: {
      js: {
        files: ['<%= config.jsSrc %>/*.js', '<%= config.jsSrc %>/**/*.js', '<%= config.jsLibs %>/*.js'],
        tasks: ['jshint', 'requirejs']
      }
    }

  });

  grunt.registerTask('default', ['jshint', 'requirejs', 'retire', 'watch']);
  grunt.registerTask('publish', ['requirejs']);
};