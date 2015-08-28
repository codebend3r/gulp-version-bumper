'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var through = require('through2');
var size = require('gulp-size');
var versionBumper = require('./index');

var gulpBump = function (done) {

  //if (fs.existsSync('./test/fixtures/out/app.js')) {
  //  fs.unlinkSync('./test/fixtures/out/app.js');
  //}

  gulp.src(['./test/fixtures/in/app.js'])
    .pipe(size({
      title: 'in file',
      showFiles: true
    }))
    .pipe(versionBumper({
      version: '0.0.2'
    }))
    .pipe(through.obj(function(file, enc, callback) {

      var ctx = file.contents.toString('utf8');
      gutil.log('> ctx', ctx);

    }))
    .pipe(gulp.dest('./test/fixtures/out'))
    .on('end', function () {
      if (done) {
        console.log('-- DONE --');
        done(); // callback to signal end of build
      }
    });


};

gulp.task('bump', gulpBump);

module.exports = gulp;
