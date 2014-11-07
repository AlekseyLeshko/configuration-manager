'use strict';
var DefaultConfig = require('../src/defaultConfig');

describe('Default config', function() {
  it('should exist', function() {
    expect(DefaultConfig).toBeDefined();
    expect(DefaultConfig).not.toBeNull();
  });
});
