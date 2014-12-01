var gulp = require('gulp');
var gulpDocs = require('gulp-ngdocs');

gulp.task('ngdocs', function () {
  var options = {
    title: "gulp ngdocs angular 1.3",
    html5Mode: false
  };
  return gulp.src('./test.js')
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('./docs'));
});
