(function() {


  'use strict';
  var path = require('path')
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var appStream = require('./_app-stream');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });

  gulp.task('_scripts', function() {
    return appStream.js
      .pipe(gulp.dest(path.join(config.paths.dist, 'app')));
  });

  gulp.task('_scripts:dist', function() {
    return appStream.js
      .pipe($.concat('app.js'))
      .pipe(gulp.dest(path.join(config.paths.dist, 'scripts')));
  });

  gulp.task('scripts', ['tmpl-cache'], function() {
    gulp.start(['_scripts']);
  })


}());
