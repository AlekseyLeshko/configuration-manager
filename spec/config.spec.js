'use strict';

var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');

describe('Config', function() {
  var config = new Config();

  afterEach(function() {
    sh.rm('-rf', './config/');
  });

  describe('Create config', function() {
    it('should call init and load the methods when creating', function() {
      Config.prototype.init = function() {
      };
      Config.prototype.load = function() {
      };
      spyOn(Config.prototype, 'init').and.callThrough();
      spyOn(Config.prototype, 'load').and.callThrough();


      var config = new Config();

      expect(Config.prototype.init).toHaveBeenCalled();
      expect(Config.prototype.load).toHaveBeenCalled();
    });
  });

  it('should create config data and fs when initing', function() {
    expect(config.fs).toBeDefined();
    expect(config.config.dirName).toEqual('config/');
    expect(config.config.fileName).toEqual('config-manager.json');
  });

  it('should get path', function() {
    var expected = 'config/config-manager.json';
    var path = config.getPath();
    expect(path).toEqual(expected);
  });

  it('should create', function() {
    config.craeteDir = function() {
    };
    config.save = function() {
    };
    spyOn(config, 'craeteDir').and.callThrough();
    spyOn(config, 'save').and.callThrough();

    config.create();

    expect(config.craeteDir).toHaveBeenCalled();
    expect(config.save).toHaveBeenCalled();
  });
});
