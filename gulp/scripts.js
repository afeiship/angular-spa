(function() {


  'use strict';
  var path = require('path')
  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-series']
  });

  gulp.task('tmpl-cache', function() {
    return gulp.src(path.join(config.paths.src, '/app/**/*.html'))
      .pipe($.htmlmin(config.htmlOptions))
      .pipe($.angularTemplatecache('template-cache-html.js', {
        module: 'dacangRemix',
        root: 'app'
      }))
      .pipe(gulp.dest(config.paths.src + '/app/partials/'));
  });

  gulp.task('_scripts', function() {
    return config.appStream.js()
      .pipe(gulp.dest(path.join(config.paths.dist, 'app')));
  });

  gulp.task('_scripts:dist', function() {
    return config.appStream.js()
      .pipe($.concat('app.js'))
      .pipe(gulp.dest(path.join(config.paths.dist, 'scripts')));
  });

  gulp.task('scripts', ['tmpl-cache'], function() {
    return gulp.start(['_scripts']);
  });


}());
