(function () {


  'use strict';

  var gulp = require('gulp');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
  });


  //clean
  gulp.task('main-bower-files',function() {
    return gulp.src('./bower.json')
      .pipe($.mainBowerFiles())
      .pipe($.debug({title:'main bower files:->'}))
      .pipe(gulp.dest('dist'));
  });


}());
