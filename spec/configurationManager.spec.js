'use strict';
var ConfigurationManager = require('../src/configuration-manager');

describe('Configuration manager', function() {
  var cManager = new ConfigurationManager();

  beforeEach(function() {
    spyOn(cManager.configFile, 'isExistOrCreate').and.callThrough();
  });

  it('should run isExistOrCreate', function() {
    cManager.init();

    expect(cManager.configFile.isExistOrCreate).toHaveBeenCalled();
  });

  it('should ', function() {
    cManager.incMajor();

    expect(true).toBe(true);
  });
});
