(function() {
  'use strict';

  var fs = require('fs');
  var mkdirp = require('mkdirp');
  var defaultConfig = require('./defaultConfig');

  var Config = function() {
    this.init();
  };

  Config.prototype = {
    init: function() {
      this.config = {
        dirName: 'config/',
        fileName: 'config.json'
      };
    },

    isExistOrCreate: function() {
      if (this.isExist()) {
        console.log('Config file is exist in this module');
        return;
      }

      this.create();
      console.log('create default config file');
    },

    isExist: function() {
      if (!fs.existsSync(this.config.dirName)) {
        return false;
      }

      if (!fs.existsSync(this.getPath())) {
        return false;
      }
      return true;
    },

    create: function() {
      mkdirp(this.config.dirName);

      var json = JSON.stringify(defaultConfig, null, 2);
      fs.writeFile(this.getPath(), json);
    },

    getPath: function() {
      var path = this.config.dirName + this.config.fileName;
      return path;
    }
  };

  module.exports = Config;
})();
