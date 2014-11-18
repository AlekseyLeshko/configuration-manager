'use strict';

var Config = require('../src/config');
var fs = require('fs');
var sh = require('shelljs');

describe('Config', function() {
  describe('Create config', function(){
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
});
