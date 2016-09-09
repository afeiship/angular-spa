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
  gulp.task('tmpl-cache', function() {
    return gulp.src(path.join(config.paths.src, '/app/**/*.html'))
      .pipe($.htmlmin(config.htmlOptions))
      .pipe($.angularTemplatecache('template-cache-html.js', {
        module: 'dacangRemix',
        root: 'app'
      }))
      .pipe(gulp.dest(config.paths.src + '/app/partials/'));
  });

}())
