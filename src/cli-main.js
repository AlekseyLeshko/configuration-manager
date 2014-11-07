var parser = require('nomnom');
var ConfigurationManager = require('./configuration-manager');

(function() {
  'use strict';

  function main() {
    var cManager = new ConfigurationManager();
    var methods = {
      major: cManager.major,
      minor: cManager.minor
    };

    parser.command('version-update')
      .callback(handle)
      .help('run version update major');

    parser.command('version-update-major')
      .callback(handleMajor)
      .help('run version update --type=major');
    parser.parse();

    function handleMajor(opts) {
      cManager.major();
    }

    function handle(opts) {
      if(!(opts.type in methods)) {
        console.log('Type not found.');
        return;
      }
      console.log(opts.type);
      var funName = 'cManager.' + opts.type + '()';
      eval(funName);
    }
  }

  module.exports = main;
})();
