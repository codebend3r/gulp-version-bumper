Gulp Version Bump
====================

> Goes through files and uses a regex pattern to find and replace semver version numbers according to bower.json

Example

    var versionBumper = require('gulp-version-bumper');

    gulp.task('build-website', function () {

      return gulp.src(['app/js/**/*.js'])
        .pipe(versionBumper({
          version: '1.5.32'
        }))
        .pipe(gulp.dest('/output'));

    });
