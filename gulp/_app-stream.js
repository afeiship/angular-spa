(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var appJsStream = gulp.src([
    path.join(config.paths.src, 'app/**/*.js'),
    path.join(config.paths.src, 'partials/*.js')
  ]).pipe($.angularFilesort());

  var appCssStream = gulp.src([
      path.join(config.paths.src, '/app/**/*.scss')
    ]).pipe($.concat('index.scss'))
    .pipe($.sass(config.sassOptions)).on('error', config.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', config.errorHandler('Autoprefixer'));

  module.exports = {
    js: appJsStream,
    css: appCssStream
  };

}());
