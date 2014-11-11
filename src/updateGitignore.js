(function() {
  'use strict';

  var fs = require('fs');

  function updateGitignore() {
    var gitignorePath = '.gitignore';

    var gitignore = fs.readFileSync(gitignorePath, 'utf8');
    var list = gitignore.split('\n');
    console.log(list);

    var path = 'config/config.json';
    if (list.indexOf(path) == -1) {
      list.push(path);
    }
    list = list.join('\n');
    console.log(list);
    fs.writeFile(gitignorePath, list, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
    });
  }

  module.exports = updateGitignore;
})();
