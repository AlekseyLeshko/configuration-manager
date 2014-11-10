'use strict';

var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');

describe('Config', function() {
  var config = new Config();

  afterEach(function() {
    sh.rm('-rf', config.config.dirName);
    expect(fs.existsSync(config.config.dirName)).toBeFalsy();
  });

  it('should init make default config', function() {
    expect(config.config.dirName).toEqual('config/');
    expect(config.config.fileName).toEqual('config.json');
  });

  it('should get path', function() {
    var expected = 'config/config.json';
    var path = config.getPath();
    expect(path).toEqual(expected);
  });

  it('should create folder with config json', function() {
    expect(fs.existsSync(config.config.dirName)).toBeFalsy();

    config.create();

    expect(fs.existsSync(config.config.dirName)).toBeTruthy();
    expect(fs.existsSync(config.getPath())).toBeTruthy();
  });
});
