const gulp = require('gulp')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')

const ggScript = `<script>!function(){var e=3e3,t=null,E=decodeURIComponent(["%E5","%BD%9","3%E","5%8","9%8D%","E7%8E","%AF%E","5%A2%","83%E4","%B8%8D%E","6%94%","AF%E6%8C","%81%","E8%AE","%BF%","E9%97","%AE%","EF%BC%8","C%E5%B","B%","BA%E8%","AE%AE","%E6%9B%","B4%E6%9","6%B0%","E6%B5%8","F%E8%","A7%88","%E5%","99%A","8%E9%8","7%8D%","E8%A","F%95%EF","%BC%81"].join(""));function n(e){e&&e.textContent!==E&&(e.innerHTML='<h1 style="text-align: center;width: 100%;padding: 2em;">'+E+"</h1>")}!function E(){var o=document.querySelector(".pagead-right"),r=document.querySelector(".page-container"),c=document.querySelector(".pagead-right .wwads-cn"),a=document.querySelector(".pagead-right .wwads-img");o||n(r),c||n(r),a||n(r),c&&a?clearTimeout(t):t=setTimeout(E,e+=200)}()}();</script>`

gulp.task('move_docs_static', () => {
  return gulp.src([
    'v4/dist/static/**'
  ])
    .pipe(gulp.dest('v4/dist/v4/static'))
})

gulp.task('move_docs_root', () => {
  return gulp.src([
    'v4/dist/favicon.ico',
    'v4/dist/index.html',
    'v4/dist/issues.html',
    'v4/dist/logo.png'
  ])
    .pipe(gulp.dest('v4/dist/v4'))
})

gulp.task('clear_docs_temp', () => {
  return del([
    'docs'
  ], { force: true })
})

gulp.task('move_docs_latest', gulp.series('clear_docs_temp', () => {
  return gulp.src([
    'v4/dist/v4/index.html',
    'v4/dist/v4/404.html'
  ])
    .pipe(gulp.dest('v4/dist'))
}))

gulp.task('build_v4_docs', gulp.parallel('move_docs_static', 'move_docs_root'))

gulp.task('copy_v1_docs', () => {
  return gulp.src('v4/dist/v1/index.html')
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('v4/dist/v1'))
})

gulp.task('copy_v2_docs', () => {
  return gulp.src('v4/dist/v2/index.html')
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('v4/dist/v2'))
})

gulp.task('copy_v3_docs', () => {
  return gulp.src('v4/dist/v3/index.html')
    .pipe(replace('</body>', `${ggScript}</body>`))
    .pipe(gulp.dest('v4/dist/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('v4/dist/v3'))
})

gulp.task('copy_docs_index', gulp.parallel('copy_v1_docs', 'copy_v2_docs', 'copy_v3_docs', () => {
  return gulp.src('v4/dist/v4/index.html')
    .pipe(replace('</body>', `${ggScript}</body>`))
    .pipe(gulp.dest('v4/dist/v4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('v4/dist/v4'))
}))

const unicodeRE = /[^\x00-\xff]/g
const contentRE = /(?<!-)content\s*:\s*([^;}]+)/g

gulp.task('build_css_unicode', () => {
  return gulp.src([
    'v4/dist/**/**.css'
  ])
    .pipe(replace(contentRE, (u) => {
      return u.replace(unicodeRE, (m) => {
        return '\\' + m.charCodeAt(0).toString(16)
      })
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('build_all_docs', gulp.series('build_v4_docs', 'copy_docs_index', 'move_docs_latest', () => {
  return gulp.src([
    'v4/dist/**'
  ])
    .pipe(gulp.dest('docs'))
}))

gulp.task('build_docs', gulp.series('build_all_docs', 'build_css_unicode'))
