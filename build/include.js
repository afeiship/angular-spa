(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //clean
  gulp.task('include', function() {
    return gulp
      .src('src/app/vendors.js')
      .pipe(
        $.include({
          includePaths: [path.resolve(__dirname, '../node_modules')]
        })
      )
      .on('error', console.log)
      .pipe(gulp.dest('src/vendors'));
  });
})();
