/*!
 * verb-log <https://github.com/jonschlinkert/verb-log>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var chalk = require('chalk');
var timestamp = require('time-stamp');

module.exports = function log() {
  var time = '[' + chalk.grey(timestamp('HH:mm:ss')) + ']';
  var args = [time].concat([].slice.call(arguments));
  console.log.apply(console, args);
  return this;
};
