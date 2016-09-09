(function() {

  'use strict';
  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var appStream = require('./_app-stream');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var injectOptions = {
    name: 'app',
    addRootSlash: true
  };

  gulp.task('inject-bower',['tmpl-cache','wiredep']);
  //for build:
  gulp.task('inject-scripts', ['inject-bower'], function() {
    return gulp.src(path.join(config.paths.dist, './index.html'))
      .pipe($.inject(appStream.js, injectOptions))
      .pipe(gulp.dest('dist'));
  });


  gulp.task('inject-styles', ['inject-scripts'], function() {
    return gulp.src(path.join(config.paths.dist, './index.html'))
      .pipe($.inject(appStream.css, injectOptions))
      .pipe(gulp.dest('dist'));
  });


  gulp.task('inject', ['inject-styles']);



}());
