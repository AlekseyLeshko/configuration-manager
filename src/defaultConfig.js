(function() {
  'use strict';

  function getDefaultConfig() {
    var config = {
      name: 'project-name',
      version: '0.0.0',
      description: 'project description',
      keywords: [
        'keywords'
      ],
      homepage: 'https://homepage.com',
      bugs: {
        url: 'https://github.com/username/project/issues'
      },
      license: 'MIT',
      author: 'author',
      contributors: [
        'contributor'
      ],
      files: [
      ],
      main: './index.js',
      directories: {
        bin: './bin'
      },
      repository: {
        type: 'git',
        url: 'https://github.com/username/project.git'
      },
      scripts: {
        test: ''
      },
      dependencies: {
      },
      devDependencies: {

      },
      engines: {
        node: '10.0.33'
      },
      preferGlobal: true,
      private: false
    };

    return config;
  }

  module.exports = getDefaultConfig();
})();
