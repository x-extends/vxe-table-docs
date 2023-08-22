const gulp = require('gulp')

gulp.task('build_examples', () => {
  return gulp.src([
    'src/views/**/Demo*.vue'
  ])
    .pipe(gulp.dest('../v4/public/v3/example/js'))
})
