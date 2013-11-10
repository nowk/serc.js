/* jshint laxcomma: true */

var spawn = require('child_process').spawn
  , fs    = require('fs')
  ;


/*
 */

function serc(jarPath, callback) {
  if (!fs.existsSync(jarPath)) throw 'Jar path does not exist';

  // TODO load from some kind of .rc file
  // TODO package selenium with
  var selenium = spawn('java', ['-jar', jarPath]);


  /*
   */

  selenium.stderr.pipe(process.stderr);


  /*
   */

  selenium.on('exit', function(code){
    console.log('\n', 'Selenium exiting... goodbye.', '\n');
    process.exit(code);
  });


  /*
   */

  selenium.stdout.on('data', function(data) {
    if (data.toString().match(/Started SocketListener/)) {
      console.log('\n', 'Selenium started...', '\n');
      callback();
    }
  });

  return selenium;
}


module.exports = exports = serc;

