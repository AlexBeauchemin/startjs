module.exports = function (grunt) {
  var config = {
    jsLibs: 'js/src/libs/custom',
    jsSrc: 'js/src',
    jsDest: 'js/dest',
    cssSrc: 'css/src',
    cssDest: 'css/dest',
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
    autoprefixer: {
      single_file: {
        options: {
          browsers: ['last 3 version', '> 1%', 'ie 9']
        },
        src: '<%= config.cssSrc %>/main.css',
        dest: '<%= config.cssSrc %>/main.css'
      }
    },
    copy: {
      main: {
        files: [
          {cwd: '<%= config.cssSrc %>/libs/', src: ['*.css'], dest: '<%= config.cssDest %>/libs/', expand: true},
          {cwd: '<%= config.cssSrc %>/fonts/', src: ['**'], dest: '<%= config.cssDest %>/fonts/', expand: true},
          {src: ['<%= config.cssSrc %>/main.css'], dest: '<%= config.cssDest %>/main.css'}
        ]
      }
    },
    csswring: {
      min: {
        options: {
          map: true
        },
        src: '<%= config.cssSrc %>/main.css',
        dest: '<%= config.cssSrc %>/main.css'
      }
    },
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
    sass: {
      options: {
        sourceComments: 'map'
      },
      dist: {
        files: [
          {
            src: '<%= config.cssSrc %>/main.scss',
            dest: '<%= config.cssSrc %>/main.css'
          }
        ]
      }
    },
    watch: {
      js: {
        files: ['<%= config.jsSrc %>/*.js', '<%= config.jsSrc %>/**/*.js', '<%= config.jsLibs %>/*.js'],
        tasks: ['jshint', 'requirejs', 'copy']
      },
      sass: {
        files: ['<%= config.cssSrc %>/*.scss', '<%= config.cssSrc %>/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csswring'],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.registerTask('default', ['jshint', 'sass', 'autoprefixer', 'csswring', 'requirejs', 'copy', 'retire', 'watch']);
  grunt.registerTask('publish', ['sass', 'autoprefixer', 'csswring', 'requirejs', 'copy']);
};