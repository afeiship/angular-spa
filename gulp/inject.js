(function() {


  'use strict';
  var path = require('path')
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });


  var gulpJsBowerStream = $.bowerStream({filter: '**/*.js'});
  var gulpCssBowerStream = $.bowerStream({filter: '**/*.css'});
  var appJsStream = gulp.src(path.join(config.path.src, 'app/**/*.js'))
    .pipe($.angularFilesort());


  gulp.task('inject-app', function() {
    return gulp.src(path.join(config.path.src, './index.html'))
      .pipe(
        $.inject(
          $.streamSeries(gulpJsBowerStream, appJsStream,gulpCssBowerStream), {
            name: 'bower-app'
          }
        )
      )
      .pipe(gulp.dest('dist'));
  });


}());
