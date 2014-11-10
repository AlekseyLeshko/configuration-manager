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
    expect(fs.existsSync(dirName)).toBeFalsy();
  });

  it('should run isExistOrCreate', function() {
    expect(fs.existsSync(dirName)).toBeFalsy();

    cManager.init();

    expect(cManager.configFile.isExistOrCreate).toHaveBeenCalled();
    expect(fs.existsSync(path)).toBeTruthy();
  });

  it('should ', function() {
    cManager.incMajor();

    expect(true).toBe(true);
  });
});
