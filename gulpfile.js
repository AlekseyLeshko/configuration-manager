var gulp = require('gulp');

gulp.task('default', ['test'], function() {
});

var jasmine = require('gulp-jasmine');
var cover = require('gulp-coverage');

gulp.task('test', function () {
  var instrumentOption = {
    pattern: [
      'src/**/*.js',
      '!src/cli.js'
    ],
    debugDirectory: 'debug'
  };

  var reportOption = {
    outFile: 'coverage.html'
  };

  return gulp.src('spec/**/*.js')
    .pipe(cover.instrument(instrumentOption))
    .pipe(jasmine())
    .pipe(cover.report(reportOption));
});
