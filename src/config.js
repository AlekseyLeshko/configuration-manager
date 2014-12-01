(function() {
  'use strict';

  var fs = require('fs');
  var memFs = require('mem-fs');
  var editor = require('mem-fs-editor');
  var defaultConfig = require('./defaultConfig');

  var Config = function() {
    this.init();
    this.isExistOrCreate();
  };

  Config.prototype = {
    init: function() {
      var store = memFs.create();
      this.fs = editor.create(store);

      this.config = {
        dirName: 'config/',
        fileName: 'config-manager.json'
      };
    },

    load: function() {
      this.isExistOrCreate();
      this.data = this.fs.readJSON(this.getPath());
    },

    save: function() {
      var json = JSON.stringify(defaultConfig, null, 2);
      fs.writeFile(this.getPath(), json);
      this.fs.write(this.getPath(), json);
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
      if (!fs.existsSync(this.getPath())) {
        return false;
      }
      return true;
    },

    create: function() {
      this.craeteDir();
      this.save();
    },

    craeteDir: function() {
      if (!fs.existsSync(this.config.dirName)) {
        fs.mkdir(this.config.dirName);
      }
    },

    getPath: function() {
      var path = this.config.dirName + this.config.fileName;
      return path;
    }
  };

  module.exports = Config;
})();
