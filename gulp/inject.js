(function() {


  'use strict';
  var path = require('path')
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });


  var appJsStream = gulp.src([
    path.join(config.path.src, 'app/**/*.js'),
    path.join(config.path.dist, 'partials/*.js')
  ])
    .pipe($.angularFilesort());



  //for build:
  gulp.task('inject-scripts', function() {
    return gulp.src(path.join(config.path.dist, './index.html'))
      .pipe($.inject(appJsStream, {name:'app'}))
      .pipe(gulp.dest('dist'));
  });


}());
