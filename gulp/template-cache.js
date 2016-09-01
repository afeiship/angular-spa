(function() {

  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //test
  gulp.task('template-cache', function() {
    return gulp.src(path.join(config.path.src, '/app/**/*.html'))
      .pipe($.htmlmin(config.htmlOptions))
      .pipe($.angularTemplatecache('template-cache-html.js', {
        module: 'dacangRemix',
        root: 'app'
      }))
      .pipe(gulp.dest(config.path.dist + '/partials/'));
  });

}())
