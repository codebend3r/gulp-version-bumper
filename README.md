Gulp Version Bump
====================
![gulp-version-bumper build status](https://travis-ci.org/crivas/gulp-version-bumper.svg?branch=master)
![gulp-version-bumper npm dependencies](https://david-dm.org/crivas/gulp-version-bumper.svg?branch=master)


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
