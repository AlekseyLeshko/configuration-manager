(function() {
  'use strict';

  var fs = require('fs');
  var defaultConfig = require('./defaultConfig');
  var Q = require('q');

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
      var deferred = Q.defer();
      if (!fs.existsSync(this.config.dirName)) {
        deferred.resolve(false);
      }
      if (!fs.existsSync(this.getPath())) {
        deferred.resolve(false);
      }
      deferred.resolve(true);

      return deferred.promise;
    },

    create: function() {
      var deferred = Q.defer();
      fs.mkdir(this.config.dirName, deferred.makeNodeResolver());

      var json = JSON.stringify(defaultConfig, null, 2);
      fs.writeFile(this.getPath(), json, deferred.makeNodeResolver());
      return deferred.promise;
    },

    getPath: function() {
      var path = this.config.dirName + this.config.fileName;
      return path;
    }
  };

  module.exports = Config;
})();
