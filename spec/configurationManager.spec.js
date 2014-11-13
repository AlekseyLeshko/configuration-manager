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
    it('should getVersion', function() {
      cManager.version.get = function() {
        var v = '0.0.0';
        return v;
      };
      spyOn(cManager.version, 'get').and.callThrough();
      var expected = '0.0.0'

      var version = cManager.getVersion();

      expect(cManager.version.get).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });

    it('should setVersion', function() {
      var version;
      cManager.version.set = function(newVersion) {
        version = newVersion;
      };
      spyOn(cManager.version, 'set').and.callThrough();
      var expected = '0.0.1'
      var value = '0.0.1';

      cManager.setVersion(value);

      expect(cManager.version.set).toHaveBeenCalled();
      expect(version).toEqual(expected);
    });

    it('should incVersion', function() {
      var expected = 'patch';
      var type;
      cManager.version.incVersion = function(newType) {
        type = newType;
      };
      spyOn(cManager.version, 'incVersion').and.callThrough();

      cManager.incVersion(expected);

      expect(cManager.version.incVersion).toHaveBeenCalled();
      expect(type).toEqual(expected);
    });
  });
});
