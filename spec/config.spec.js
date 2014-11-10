'use strict';

var Config = require('../src/config');
var fs = require('fs');
var mkdirp = require('mkdirp');
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

  // it('should create folder with config json', function() {
  //   expect(fs.existsSync(config.config.dirName)).toBeFalsy();

  //   config.create();

  //   expect(fs.existsSync(config.config.dirName)).toBeTruthy();
  //   expect(fs.existsSync(config.getPath())).toBeTruthy();
  // });

  it('should isExist without folder return false', function() {
    expect(fs.existsSync(config.config.dirName)).toBeFalsy();

    var res = config.isExist();

    expect(res).toBeFalsy();
  });

  it('should isExist without json file return false', function() {
    mkdirp(config.config.dirName);
    expect(fs.existsSync(config.config.fileName)).toBeFalsy();

    var res = config.isExist();

    expect(res).toBeFalsy();
  });

  // it('should isExist return true', function() {
  //   config.create();
  //   expect(fs.existsSync(config.config.fileName)).toBeFalsy();

  //   var res = config.isExist();

  //   expect(res).toBeTruthy();
  // });
});
