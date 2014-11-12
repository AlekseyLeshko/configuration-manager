(function() {
  'use strict';

  var readJson = require('read-package-json');
  var updateGitignore = require('./updateGitignore');
  var ConfigFile = require('./config');

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

    updateVersion: function(newVersion, type) {

    },

    incMajor: function() {
      console.log('function major');
    },

    incMminor: function() {
      console.log('function minor');
    },

    incPatch: function() {
      console.log('function patch');
    }
  };

  module.exports = ConfigurationManager;
})();
