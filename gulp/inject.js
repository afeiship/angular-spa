(function() {


  'use strict';
  var path = require('path')
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });


  var gulpBowerStream = $.bowerStream();
  var appStream = gulp.src(path.join(config.path.src, 'app/**/*.js'))
    .pipe($.angularFilesort());


  gulp.task('inject-app', function() {
    return gulp.src(path.join(config.path.src, './index.html'))
      .pipe($.inject(
        $.streamSeries(gulpBowerStream, appStream), {
          name: 'bower-app'
        }))
      .pipe(gulp.dest('dist'));
  });


}());
