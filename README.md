Gulp Version Bump
====================

[![npm version](https://badge.fury.io/js/gulp-version-bumper.svg)](http://badge.fury.io/js/gulp-version-bumper)
![travis ci](https://travis-ci.org/crivas/gulp-version-bumper.svg?branch=master)
[![coverage](https://coveralls.io/repos/crivas/gulp-version-bumper/badge.svg?branch=master&service=github)](https://coveralls.io/github/crivas/gulp-version-bumper?

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
