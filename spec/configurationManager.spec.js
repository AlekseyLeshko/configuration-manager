'use strict';

var fs = require('fs');
var sh = require('shelljs');
var ConfigurationManager = require('../src/configuration-manager');

describe('Configuration manager', function() {
  var cManager = new ConfigurationManager();

  describe('methods with config', function() {
    var dirName = 'config/';
    var path = 'config/config.json';

    afterEach(function() {
      sh.rm('-rf', dirName);
      fs.exists(dirName, function (exists) {
        expect(exists).toBeFalsy();
      });
    });

    it('should run isExistOrCreate', function() {
      spyOn(cManager.configFile, 'isExistOrCreate').and.callThrough();
      fs.exists(dirName, function (exists) {
        expect(exists).toBeFalsy();
      });
      cManager.init();

      expect(cManager.configFile.isExistOrCreate).toHaveBeenCalled();
      fs.exists(path, function (exists) {
        expect(exists).toBeTruthy();
      });
    });

    it('should getConfig', function() {
      var expected = {
        a: 1,
        b: 2
      };
      cManager.configFile.get = function() {
        return expected;
      }
      spyOn(cManager.configFile, 'get').and.callThrough();

      var obj = cManager.getConfig();

      expect(cManager.configFile.get).toHaveBeenCalled();
      expect(obj).toEqual(expected);
    });

    it('should setConfig', function() {
      var expected = {
        a: 1,
        b: 2
      };
      cManager.configFile.set = function(obj) {
      }
      spyOn(cManager.configFile, 'set').and.callThrough();

      var obj = cManager.setConfig();

      expect(cManager.configFile.set).toHaveBeenCalled();
    });
  });

  describe('methods with version', function() {
    var version;

    beforeEach(function() {
      cManager.setVersion = function(newVersion) {
        version = newVersion;
      };

      cManager.getConfig = function() {
        var config = {
          version: '0.0.0'
        };
        return config;
      };
      spyOn(cManager, 'getConfig').and.callThrough();
      spyOn(cManager, 'setVersion').and.callThrough();
    });

    it('should getVersion without type', function() {
      var expected = '0.0.1'

      cManager.incVersion();

      expect(cManager.getConfig).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });

    it('should incPatch', function() {
      var expected = '0.0.1'

      cManager.incPatch();

      expect(cManager.getConfig).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });

    it('should incMminor', function() {
      var expected = '0.1.0'

      cManager.incMminor();

      expect(cManager.getConfig).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });

    it('should incMajor', function() {
      var expected = '1.0.0'

      cManager.incMajor();

      expect(cManager.getConfig).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });
  });
});
