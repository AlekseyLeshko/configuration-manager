(function() {
  'use strict';

  var semver = require('semver');
  var ConfigFile = require('./config');

  var Version = function() {
    this.configFile = new ConfigFile();
  };

  Version.prototype = {
    get: function() {
      var configObj = this.configFile.get();
      var version = semver.valid(configObj.version);
      if (version === null) {
        console.log('Version in config file is invalid.');
        return;
      }

      return version;
    },

    set: function(version) {
      var newVersion = semver.valid(version);
      if (newVersion === null) {
        console.log('New version is invalid.');
        return;
      }
      var configObj = this.configFile.get();
      configObj.version = newVersion;
      this.configFile.set(configObj);
    },

    incVersion: function(type) {
      var version = this.get();
      type = type || 'patch';
      version = semver.inc(version, type);
      this.set(version);
    }
  };

  module.exports = Version;
})();
