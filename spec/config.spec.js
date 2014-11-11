'use strict';

var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');
var Q = require('q');

describe('Config', function() {
  var config = new Config();
  var defaultConfig = {
    a: 1,
    b: 2,
    c: 3
  };

  afterEach(function(done) {
    sh.rm('-rf', config.config.dirName);
    Q.fcall(function () {
      var exists = fs.existsSync(config.config.dirName);
      expect(exists).toBeFalsy();
      done();
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

  it('should be established folder with config json', function(done) {
    Q.fcall(function () {
        var exists = fs.existsSync(config.config.dirName);
        expect(exists).toBeFalsy();
      })
      .then(function() {
        config.create()
          .then(function() {
            expect(true).toBeTruthy();
          }, function() {
            expect(true).toBeFalsy();
          });
      })
      .then(function() {
        var exists = fs.existsSync(config.config.dirName);
        expect(exists).toBeTruthy();
      })
      .then(function() {
        var exists = fs.existsSync(config.getPath());
        expect(exists).toBeTruthy();
        done();
      });
  });

  it('should create config json when folder exists', function(done) {
    Q.fcall(function () {
        fs.mkdir(config.config.dirName);
      })
      .then(function() {
        var exists = fs.existsSync(config.config.dirName);
        expect(exists).toBeTruthy();
      })
      .then(function() {
        var exists = fs.existsSync(config.config.fileName);
        expect(exists).toBeFalsy();
      })
      .then(function() {
        config.create()
          .then(function() {
            expect(true).toBeTruthy();
          }, function() {
            expect(true).toBeFalsy();
          });
      })
      .then(function() {
        var exists = fs.existsSync(config.config.dirName);
        expect(exists).toBeTruthy();
      })
      .then(function() {
        var exists = fs.existsSync(config.getPath());
        expect(exists).toBeTruthy();
        done();
      });
  });

  it('should isExist without folder return false', function(done) {
    Q.fcall(function() {
        var exists = fs.existsSync(config.config.dirName);
        expect(exists).toBeFalsy();
      })
      .then(function() {
        return config.isExist()
          .then(function(value) {
            expect(value).toBeFalsy();
          }, function() {
            expect(true).toBeFalsy();
          });
      })
      .done(function() {
        done();
      });
  });

  it('should isExist without json file return false', function(done) {
    Q.fcall(function () {
        fs.mkdirSync(config.config.dirName);
      })
      .then(function() {
        var exists = fs.existsSync(config.config.fileName);
        expect(exists).toBeFalsy();
      })
      .then(function() {
        return config.isExist()
          .then(function(value) {
            expect(value).toBeFalsy();
          }, function() {
            expect(true).toBeFalsy();
          });
      })
      .done(function() {
        done();
      });
  });

  it('should isExist return true', function(done) {
    Q.fcall(function () {
      })
      .then(function() {
        fs.mkdir(config.config.dirName);

        var json = JSON.stringify(defaultConfig, null, 2);
        fs.writeFile(config.getPath(), json);
      })
      .then(function() {
        var exists = fs.existsSync(config.config.fileName);
        expect(exists).toBeFalsy();
      })
      .then(function() {
        return config.isExist()
          .then(function(value) {
            expect(value).toBeTruthy();
          }, function() {
            expect(true).toBeFalsy();
          });
      })
      .done(function() {
        done();
      });
  });
});
