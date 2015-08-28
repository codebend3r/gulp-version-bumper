Gulp Version Bump
====================
[![NPM version](https://img.shields.io/npm/v/jshint.svg?style=flat)](https://www.npmjs.com/package/gulp-version-bumper)
![gulp-version-bumper build status](https://travis-ci.org/crivas/gulp-version-bumper.svg?branch=master)
[![npm version](https://badge.fury.io/js/gulp-version-bumper.svg)](http://badge.fury.io/js/gulp-version-bumper)
[![Coverage Status](https://coveralls.io/repos/crivas/gulp-version-bumper/badge.svg?branch=master&service=github)](https://coveralls.io/github/crivas/gulp-version-bumper?branch=master)
[![Dependency Status](https://img.shields.io/david/crivas/gulp-version-bumper.svg?style=flat)](https://david-dm.org/crivas/gulp-version-bumper)
[![devDependency Status](https://img.shields.io/david/dev/crivas/gulp-version-bumper.svg?style=flat)](https://david-dm.org/crivas/gulp-version-bumper#info=devDependencies)

> Goes through files and uses a regex pattern to find and replace semver version numbers according to bower.json

Example

```js
var versionBumper = require('gulp-version-bumper');

gulp.task('build-website', function () {

  return gulp.src(['app/js/**/*.js'])
    .pipe(versionBumper({
      version: '1.5.32'
    }))
    .pipe(gulp.dest('/output'));

});
```
