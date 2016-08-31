(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('images', function() {
    return gulp.src(path.join(config.path.src, '/assets/images/**'))
      //.pipe($.debug({title:'test::::--->'}))
      .pipe(gulp.dest(path.join(config.path.dist, 'images')));
  });

}())
