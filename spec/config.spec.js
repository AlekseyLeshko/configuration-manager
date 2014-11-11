'use strict';

var Config = require('../src/config');
var fs = require('fs');
var mkdirp = require('mkdirp');
var sh = require('shelljs');

describe('Config', function() {
  var config = new Config();

  afterEach(function() {
    sh.rm('-rf', config.config.dirName);
    fs.exists(config.config.dirName, function (exists) {
      expect(exists).toBeFalsy();
    });
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
    fs.exists(config.config.dirName, function (exists) {
      expect(exists).toBeFalsy();
    });

    config.create();

    fs.exists(config.config.dirName, function (exists) {
      expect(exists).toBeTruthy();
    });
    fs.exists(config.getPath(), function (exists) {
      expect(exists).toBeTruthy();
    });
  });

  it('should isExist without folder return false', function() {
    fs.exists(config.config.dirName, function (exists) {
      expect(exists).toBeFalsy();
    });
    var res = config.isExist();

    expect(res).toBeFalsy();
  });

  it('should isExist without json file return false', function() {
    mkdirp(config.config.dirName);
    fs.exists(config.config.fileName, function (exists) {
      expect(exists).toBeFalsy();
    });

    var res = config.isExist();

    expect(res).toBeFalsy();
  });

  it('should isExist return true', function() {
    config.create();
    fs.exists(config.config.fileName, function (exists) {
      expect(exists).toBeFalsy();
    });

    var res = config.isExist();

    expect(res).toBeTruthy();
  });
});
