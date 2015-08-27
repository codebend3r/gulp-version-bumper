'use strict';

var should = require('chai').should(),
  expect = require('chai').expect,
  assert = require('chai').assert,
  _ = require('underscore-node'),
  fs = require('fs'),
  versionBumper = require('../index');

describe('version bumper', function() {

  it('should be defined', function() {

    assert.isDefined(versionBumper, 'versionBumper defined');

  });

  xit('should bump up version', function() {

    var gulp = require('gulp');
    var gulpSize = require('gulp-size');
    var Gulpfile = require('../Gulpfile');

    //var gulpBump = Gulpfile.tasks['version-bump'];
    //console.log('>', gulpBump.fn);
    //gulpBump.fn();

    if (fs.existsSync('./test/fixtures/out/app.js')) {
      fs.unlinkSync('./test/fixtures/out/app.js');
    }

    gulp.src(['./test/fixtures/in/app.js'])
      .pipe(gulpSize())
      .pipe(versionBumper({
        version: '0.0.2'
      }))
      .pipe(gulp.dest('./test/fixtures/out'));

      //var appFile = fs.readFileSync('./test/fixtures/out/app.js').toString();
      //console.log('appFile', appFile);
      //assert.include(appFile, '0.0.2', 'array contains value');


  });

});
