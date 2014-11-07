var main = require('./cli-main');

function cli(fun) {
  var pckName = 'Configuration-manager';
  console.log('Module \'' + pckName + '\' started');
  fun();
  console.log('Module \'' + pckName + '\' finished');
}

cli(main);

// process.argv.forEach(function (val, index, array) {
  // console.log(index + ': ' + val);
// });
