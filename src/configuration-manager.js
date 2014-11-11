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
      var filePath = 'package.json';

      readJson(filePath, getConfigHandle);
      var obj = {};
      return obj;
    },

    getConfigHandle: function(er, data) {
      if (er) {
        console.error('There was an error reading the file');
        return;
      }

      console.error('the package data is', data);
    },

    setConfig: function(newConfig) {

    },

    updateConfig: function(newConfig) {

    },

    extendConfig: function(newConfig) {

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
