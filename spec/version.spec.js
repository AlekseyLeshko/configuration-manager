'use strict';

var fs = require('fs');
var sh = require('shelljs');
var Version = require('../src/version');

describe('version', function() {
  var version = new Version();

  beforeEach(function() {
    version.configFile.get = function() {
      var config = {
        version: '0.0.0'
      };
      return config;
    };

    spyOn(version.configFile, 'get').and.callThrough();
  });

  it('should get', function() {
    var expected = '0.0.0'

    var res = version.get();

    expect(version.configFile.get).toHaveBeenCalled();
    expect(res).toEqual(expected);
  });

  it('should inc', function() {
    version.get = function() {
      return '0.0.0';
    };
    var res;
    version.set = function(newVersion) {
      res = newVersion;
    };

    var expected = '0.0.1'

    version.inc();

    expect(res).toEqual(expected);
  });

  it('should inc with type', function() {
    version.get = function() {
      return '0.0.0';
    };
    var res;
    version.set = function(newVersion) {
      res = newVersion;
    };
    var type = 'minor';
    var expected = '0.1.0'

    version.inc(type);

    expect(res).toEqual(expected);
  });
});
