(function() {
  'use strict';

  var parser = require('nomnom');
  var ConfigurationManager = require('./configuration-manager');

  function main() {
    var cManager = new ConfigurationManager();

    parser.command('init')
      .callback(initHandle)
      .help('run init');

    parser.command('version-update-major')
      .callback(handleMajor)
      .help('run version update --type=major');
    parser.parse();

    function initHandle(opts) {
      cManager.init();
    }

    function handleMajor(opts) {
      cManager.incMajor();
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

  function wrapper() {
    var pckName = 'Configuration-manager';
    console.log('Module \'' + pckName + '\' started');
    main();
    console.log('Module \'' + pckName + '\' finished');
  }

  wrapper();
})();
