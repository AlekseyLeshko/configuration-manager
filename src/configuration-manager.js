(function() {
  'use strict';

  var readJson = require('read-package-json');
  var updateGitignore = require('./updateGitignore');
  var ConfigFile = require('./config');
  var semver = require('semver');

  var ConfigurationManager = function() {
    this.name = 'ConfigurationManager';
    this.configFile = new ConfigFile();

    this.config = {
      baseDir: './'
    };
  };

  ConfigurationManager.prototype = {
    init: function() {
      this.configFile.isExistOrCreate();
      updateGitignore();
    },

    getConfig: function() {
      return this.configFile.get();
    },

    setConfig: function(newConfig) {
      return this.configFile.set(newConfig);
    },

    getVersion: function() {
      var configObj = this.getConfig();
      var version = semver.valid(configObj.version);
      if (version === null) {
        console.log('Version in config file is invalid.');
        return;
      }

      return version;
    },

    setVersion: function(version) {
      var newVersion = semver.valid(version);
      if (newVersion === null) {
        console.log('New version is invalid.');
        return;
      }
      var configObj = this.getConfig();
      configObj.version = newVersion;
      setConfig(configObj);
    },

    incVersion: function(type) {
      var version = this.getVersion();
      type = type || 'patch';
      version = semver.inc(version, type);
      this.setVersion(version);
    },

    incMajor: function() {
      var type = 'major';
      this.incVersion(type);
    },

    incMminor: function() {
      var type = 'minor';
      this.incVersion(type);
    },

    incPatch: function() {
      var type = 'patch';
      this.incVersion(type);
    }
  };

  module.exports = ConfigurationManager;
})();
