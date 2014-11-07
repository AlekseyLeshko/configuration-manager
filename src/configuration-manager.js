(function() {
  'use strict';

  var ConfigurationManager = function() {
    this.name = 'ConfigurationManager';
  };

  ConfigurationManager.prototype = {
    major: function() {
      console.log('function major');
    },

    minor: function() {
      console.log('function minor');
    }
  };

  module.exports = ConfigurationManager;
})();
