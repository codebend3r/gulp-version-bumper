Gulp Version Bump
====================
![gulp-version-bumper build status](https://travis-ci.org/crivas/gulp-version-bumper.svg?branch=master)
[![npm version](https://badge.fury.io/js/gulp-version-bumper.svg)](http://badge.fury.io/js/gulp-version-bumper)

[![Coverage Status](https://coveralls.io/repos/crivas/gulp-version-bumper/badge.svg?branch=master&service=github)](https://coveralls.io/github/crivas/gulp-version-bumper?branch=master)

[![Coverage Status](https://img.shields.io/coveralls/crivas/gulp-version-bumper.svg?style=flat)](https://coveralls.io/r/crivas/gulp-version-bumper?branch=master)

[![NPM version](https://img.shields.io/npm/v/jshint.svg?style=flat)](https://www.npmjs.com/package/gulp-version-bumper)

[![Linux Build Status](https://img.shields.io/travis/jshint/jshint/master.svg?style=flat&label=Linux%20build)](https://travis-ci.org/crivas/gulp-version-bumper)

[![Windows Build status](https://img.shields.io/appveyor/ci/jshint/jshint/master.svg?style=flat&label=Windows%20build)](https://ci.appveyor.com/project/crivas/gulp-version-bumper/branch/master)

[![Dependency Status](https://img.shields.io/david/jshint/gulp-version-bumper.svg?style=flat)](https://david-dm.org/crivas/gulp-version-bumper)

[![devDependency Status](https://img.shields.io/david/dev/jshint/jshint.svg?style=flat)](https://david-dm.org/crivas/gulp-version-bumper#info=devDependencies)




> Goes through files and uses a regex pattern to find and replace semver version numbers according to bower.json

Example

```js
var versionBumper = require('gulp-version-bumper');

gulp.task('build-website', function () {

  return gulp.src(['app/js/**/*.js'])
    .pipe(versionBumper({
      version: '1.5.32'
    }))
    .pipe(gulp.dest('/output'));

});
```
