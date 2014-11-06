var argv = require('optimist').argv;

console.log('Hello ' + (argv.name || 'World') + '!');
console.log('It is npm module: \'Configuration-manager!\'');
