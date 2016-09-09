(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var browserSync = require('browser-sync');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  //watch
  gulp.task('watch', function() {
    gulp.watch(path.join(config.paths.src, '/app/**/*.scss'), ['styles']).on('change', browserSync.reload);;
    gulp.watch(path.join(config.paths.src, '/app/**/*.js'), ['scripts']).on('change', browserSync.reload);;
    gulp.watch(path.join(config.paths.src, '/app/**/*.html'), ['inject']).on('change', browserSync.reload);;
  });


}());
