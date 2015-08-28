/**
 * Updated by crivas on 04/17/2015.
 */

'use strict';

var fs = require('fs'),
  through = require('through2'),
  gutil = require('gulp-util'),
  _ = require('underscore-node');

module.exports = function (options) {

  /**
   * regex replaces a version number
   * @param object
   * @returns {object}
   */
  var bumpVersionInFile = function (object) {

    return object.toString().replace(/(\d+\.\d+\.\d+)/, function (ver) {
      return options.version;
    });

  };

  /**
   *
   * @param file
   * @param enc
   * @param callback
   */
  var bufferedContents = function (file, enc, callback) {

    if (file.isStream()) {

      this.emit('error', new gutil.PluginError('ute-version-bumper', 'Streams are not supported!'));
      callback();

    } else if (file.isNull()) {

      callback(null, file); // Do nothing if no contents

    } else {

      var ctx = file.contents.toString('utf8');
      var bumpedFile = bumpVersionInFile(ctx);

      file.contents = new Buffer(bumpedFile);
      callback(null, file);

    }

  };

  /**
   * returns streamed content
   */
  return through.obj(bufferedContents);


};
