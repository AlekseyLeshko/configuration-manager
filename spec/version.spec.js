'use strict';

var fs = require('fs');
var sh = require('shelljs');
var Version = require('../src/version');

describe('version', function() {
  var version = new Version();

  beforeEach(function() {
    cManager.setVersion = function(newVersion) {
      version = newVersion;
    };

    cManager.getConfig = function() {
      var config = {
        version: '0.0.0'
      };
      return config;
    };
    spyOn(cManager, 'getConfig').and.callThrough();
    spyOn(cManager, 'setVersion').and.callThrough();
  });

  it('should getVersion without type', function() {
    var expected = '0.0.1'

    cManager.incVersion();

    expect(cManager.getConfig).toHaveBeenCalled();
    expect(version).toEqual(expected);
  });

  it('should incPatch', function() {
    var expected = '0.0.1'

    cManager.incPatch();

    expect(cManager.getConfig).toHaveBeenCalled();
    expect(version).toEqual(expected);
  });

  it('should incMminor', function() {
    var expected = '0.1.0'

    cManager.incMminor();

    expect(cManager.getConfig).toHaveBeenCalled();
    expect(version).toEqual(expected);
  });

  it('should incMajor', function() {
    var expected = '1.0.0'

    cManager.incMajor();

    expect(cManager.getConfig).toHaveBeenCalled();
    expect(version).toEqual(expected);
  });
});
