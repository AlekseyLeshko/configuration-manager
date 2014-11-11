(function() {
  'use strict';

  var fs = require('fs');

  function updateGitignore() {
    var gitignorePath = '.gitignore';

    var gitignore = fs.readFileSync(gitignorePath, 'utf8');
    var list = gitignore.split('\n');

    var path = 'config/config.json';
    if (list.indexOf(path) == -1) {
      list.push(path);
    }
    list = list.join('\n');
    fs.writeFile(gitignorePath, list);
    console.log('.gitignore file updated');
  }

  module.exports = updateGitignore;
})();
