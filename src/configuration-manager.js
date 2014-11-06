// process.argv.forEach(function (val, index, array) {
  // console.log(index + ': ' + val);
// });

var parser = require("nomnom");
parser.command('browser')
   .callback(function(opts) {
      if (!opts.type) {
        return;
      }
      console.log(opts.type);
      var funName = opts.type + '()';
      eval(funName);
   })
   .help("run browser tests");
parser.parse();

function major() {
  console.log('function major');
}

function minor() {
  console.log('function minor');
}

console.log('It is npm module: \'Configuration-manager!\'');
