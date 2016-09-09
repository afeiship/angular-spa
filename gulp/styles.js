(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var appStream = require('./_app-stream');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });

  gulp.task('styles', function() {
    return appStream.css()
      .pipe(gulp.dest(path.join(config.paths.dist, '/app')));
  })

}())
