'use strict';

var assert = require("assert")
var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');

suite('Config', function() {
  setup(function() {
    sh.rm('-rf', './config/');
  });

  suite('Create config', function(){
    test('should', function() {
      var exists = fs.existsSync('config/');
      assert.equal(false, exists);

      var config = new Config();
      assert(config.data !== undefined);

      exists = fs.existsSync('config/');
      assert.equal(true, exists);
    });
  });
});
