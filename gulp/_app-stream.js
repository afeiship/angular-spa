(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  module.exports = {
    js: function() {
      return gulp.src([
        path.join(config.paths.src, 'app/**/*.js'),
        path.join(config.paths.src, 'partials/*.js')
      ]).pipe($.angularFilesort());
    },
    css: function() {
      return gulp.src([
          path.join(config.paths.src, '/app/**/*.scss')
        ]).pipe($.concat('index.scss'))
        .pipe($.sass(config.sassOptions)).on('error', config.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', config.errorHandler('Autoprefixer'))
    }
  };

}());
