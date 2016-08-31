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
    path: {
      root: rootPath,
      src: rootPath + '/src',
      tmp: rootPath + '/.tmp',
      dist: rootPath + '/dist'
    },
    sassOptions:{
      style:'expanded'
    },
    errorHandler:function(title) {
      return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
      };
    }
  };


}());
