const gulp = require('gulp')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')

// const ggScript = `<script>(function(){eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(h(){n(h(){0 a=o(\'%p%i%2%q%r%2%s%j%t%u%k%2%v%w%x%y%j%3%z%k%3%l%A%B%C%l%2%D%E%8%6%6%3%F%G%3%H%I%3%J%K%8%L%M%2%N%O%8%6%P%Q%R%6%S%T%i\');0 b=1.U(\'V\');0 c=1.7(\'.9-g\');0 d=1.7(\'.W-X .Y\');0 e=1.7(\'.9-g .m-Z\');0 f=1.7(\'.9-g .m-10\');4(!b){1.11.5=a}4(!d){b.5=a}4(!c){d.5=a}4(!e){d.5=a}4(!f){d.5=a}},12)})()',62,65,'var|document|E5|E6|if|innerHTML|AE|querySelector|E8|pagead|||||||right|function|3E|8D|AF|8C|wwads|setInterval|decodeURIComponent|3Ch1|BD|93|89|E7|8E|A2|83|E4|B8|94|81|EF|BC|BB|BA|9B|B4|96|B0|B5|8F|A7|88|99|A8|BF|E9|97|3C|2Fh1|getElementById|app|page|container|content|cn|img|body|10000'.split('|'),0,{}))})()</script>`

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
    // .pipe(replace('</body>', `${ggScript}</body>`))
    .pipe(gulp.dest('v4/dist/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('v4/dist/v3'))
})

gulp.task('copy_docs_index', gulp.parallel('copy_v1_docs', 'copy_v2_docs', 'copy_v3_docs', () => {
  return gulp.src('v4/dist/v4/index.html')
    // .pipe(replace('</body>', `${ggScript}</body>`))
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


// (function(){
//   setInterval(function () {
//     var msg = decodeURIComponent('%3Ch1%3E%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83%E4%B8%8D%E6%94%AF%E6%8C%81%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%9B%B4%E6%96%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AE%BF%E9%97%AE%3C%2Fh1%3E');
//     var appEl = document.getElementById('app');
//     var prEl = document.querySelector('.pagead-right');
//     var bEl = document.querySelector('.page-container .content');
//     var wwCnEl = document.querySelector('.pagead-right .wwads-cn');
//     var wwImgEl = document.querySelector('.pagead-right .wwads-img');
//     if (!appEl) {
//       document.body.innerHTML = msg
//     }
//     if (!bEl) {
//       appEl.innerHTML = msg
//     }
//     if (!prEl) {
//       bEl.innerHTML = msg
//     }
//     if (!wwCnEl) {
//       bEl.innerHTML = msg
//     }
//     if (!wwImgEl) {
//       bEl.innerHTML = msg
//     }
//   }, 10000)
// })()