(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles', function() {
    return gulp.src(path.join(config.path.src, '/app/**/*.scss'))
      .pipe($.concat('index.scss'))
      .pipe($.sass(config.sassOptions)).on('error', config.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', config.errorHandler('Autoprefixer'))
      .pipe(gulp.dest(path.join(config.path.dist, 'styles')));
  });

}())
