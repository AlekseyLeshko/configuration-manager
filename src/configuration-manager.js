(function() {
  'use strict';

  var readJson = require('read-package-json');
  var semver = require('semver');
  var ConfigFile = require('./config');
  var Version = require('./version');
  var Gitignore = require('./gitignore');

  var ConfigurationManager = function() {
    this.name = 'ConfigurationManager';
    this.configFile = new ConfigFile();
    this.version = new Version();
    this.gitignore = new Gitignore();

    this.config = {
      baseDir: './'
    };
  };

  ConfigurationManager.prototype = {
    init: function() {
      this.configFile.isExistOrCreate();
      this.gitignore.update();
    },

    getConfig: function() {
      return this.configFile.get();
    },

    setConfig: function(newConfig) {
      this.configFile.set(newConfig);
    },

    getVersion: function() {
      return this.version.get();
    },

    setVersion: function(version) {
      this.version.set(version);
    },

    incVersion: function(type) {
      this.version.incVersion(type);
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
