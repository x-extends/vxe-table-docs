const gulp = require('gulp')

gulp.task('build_examples', () => {
  return gulp.src([
    'src/views/**/Demo*.vue',
    'src/views/**/demo.*.js',
    'src/views/**/demo.*.ts'
  ])
    .pipe(gulp.dest('dist/v4/example'))
})
