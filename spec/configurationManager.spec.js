'use strict';

var ConfigurationManager = require('../src/configuration-manager');
var fs = require('fs');
var sh = require('shelljs');

describe('Configuration manager', function() {
  var cManager = new ConfigurationManager();
  var dirName = 'config/';
  var path = 'config/config.json';

  beforeEach(function() {
    spyOn(cManager.configFile, 'isExistOrCreate').and.callThrough();
  });

  afterEach(function() {
    sh.rm('-rf', dirName);
    fs.exists(dirName, function (exists) {
      expect(exists).toBeFalsy();
    });
  });

  it('should run isExistOrCreate', function() {
    fs.exists(dirName, function (exists) {
      expect(exists).toBeFalsy();
    });
    cManager.init();

    expect(cManager.configFile.isExistOrCreate).toHaveBeenCalled();
    fs.exists(path, function (exists) {
      expect(exists).toBeTruthy();
    });
  });

  it('should ', function() {
    cManager.incMajor();

    expect(true).toBe(true);
  });
});
