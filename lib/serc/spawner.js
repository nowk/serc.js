/* jshint laxcomma: true */

var spawn = require('child_process').spawn
  ;


/*
 */

exports.new = function(command, args, options) {
  return spawn(command, args, options);
};

