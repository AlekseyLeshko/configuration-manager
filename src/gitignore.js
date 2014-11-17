(function() {
  'use strict';

  var fs = require('fs');
  var ConfigFile = require('./config');

  var Gitignore = function() {
    this.path = '.gitignore';
  };

  Gitignore.prototype = {
    update: function() {
      var gitignore = fs.readFileSync(this.path, 'utf8');
      var list = gitignore.split('\n');

      var configFile = new ConfigFile();
      if (list.indexOf(configFile.getPath()) == -1) {
        list.push(configFile.getPath());
      }
      list = list.join('\n');
      fs.writeFile(this.path, list);
      console.log('.gitignore file updated');
    }
  };

  module.exports = Gitignore;
})();
