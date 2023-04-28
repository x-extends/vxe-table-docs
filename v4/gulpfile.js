const gulp = require('gulp')

gulp.task('build_examples', () => {
  return gulp.src([
    'src/views/**/Demo*.vue'
  ])
    .pipe(gulp.dest('dist/v4/example'))
})
