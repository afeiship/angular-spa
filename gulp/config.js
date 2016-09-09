(function() {

  'use strict';

  var rootPath = process.cwd();
  var gulp = require('gulp');
  var gutil = require('gulp-util');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  module.exports = {
    paths: {
      root: rootPath,
      src: rootPath + '/src',
      tmp: rootPath + '/.tmp',
      dist: rootPath + '/dist'
    },
    sassOptions: {
      style: 'expanded'
    },
    htmlminOptions: {
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: false,
      collapseWhitespace: true
    },
    errorHandler: function(title) {
      return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
      };
    }
  };


}());
