(function() {


  'use strict';

  var gulp = require('gulp');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  //clean
  gulp.task('clean', function() {
    return $.del('dist');
  });


  gulp.task('clean:app', function() {
    return $.del('dist/app');
  });


}());
