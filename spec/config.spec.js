'use strict';

var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');

describe('Config', function() {
  var config = new Config();

  beforeEach(function() {
    expect(fs.existsSync(config.config.dirName)).toBeFalsy();
  });

  afterEach(function() {
    sh.rm('-rf', config.config.dirName);
    expect(fs.existsSync(config.config.dirName)).toBeFalsy();
  });

  it('should init', function() {
    expect(config.config.dirName).toEqual('config/');
    expect(config.config.fileName).toEqual('config.json');
  });

  it('should get path', function() {
    var expected = 'config/config.json';
    var path = config.getPath();
    expect(path).toEqual(expected);
  });

  it('should create', function() {
    config.create();
    expect(fs.existsSync(config.config.dirName)).toBeTruthy();
  });
});
