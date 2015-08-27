'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gulpSize = require('gulp-size');
var versionBumper = require('./index');

var gulpBump = function() {

  if (fs.existsSync('./test/fixtures/out/app.js')) {
    fs.unlinkSync('./test/fixtures/out/app.js');
  }

  gulp.src(['./test/fixtures/in/app.js'])
    .pipe(gulpSize())
    .pipe(versionBumper({
      version: '0.0.2'
    }))
    .pipe(gulp.dest('./test/fixtures/out'));


};

gulp.task('version-bump', gulpBump);

module.exports = gulp;
