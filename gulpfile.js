const gulp = require('gulp')
const fs = require('fs')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const zip = require('gulp-zip')
const UglifyJS = require('uglify-js')

// 是否启用强制广告
const isForceAd = true

// 赞助商
const sponsorsJS = UglifyJS.minify(fs.readFileSync('./ad/sponsors.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const sponsorsTmplScript = `<script>(function(){${sponsorsJS.code}})()</script>`

// 广告位
const adTmpJS = UglifyJS.minify(fs.readFileSync('./ad/tmpl.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adTmplScript = `<script>(function(){${adTmpJS.code}})()</script>`
const adCheckJS = UglifyJS.minify(fs.readFileSync('./ad/check.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adCheckScript = `<script>(function(){${adCheckJS.code}})()</script>`
const adScript = `<script data-mode="hash" type="text/javascript" charset="UTF-8" src="https://cdn.wwads.cn/js/makemoney.js" async></script>`

// 访问数量统计
const hmScript = `<script>var _hmt=_hmt||[];(function(){if(location.host.indexOf("localhost")===-1){var b=document.createElement("script");b.src="https://hm.baidu.com/hm.js?1eb3cea61a6e722c5e3dd0114830306c";b.onload=function(){_hmt.push(["_requirePlugin","UrlChangeTracker",{shouldTrackUrlChange:function(c,d){return c&&d}}])};var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}})();</script>`

gulp.task('clear_docs_temp', () => {
  return del([
    '_temp',
    'docs',
    'docs.zip'
  ], { force: true })
})

gulp.task('copy_plugins_docs', () => {
  return gulp.src('plugins/**')
    .pipe(gulp.dest('docs/plugins'))
})

gulp.task('build_plugins_docs', gulp.series('copy_plugins_docs', () => {
  return gulp.src('plugins/index.html')
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs/plugins'))
}))

gulp.task('copy_pluginDocs_docs', () => {
  return gulp.src('pluginDocs/**')
    .pipe(gulp.dest('docs/pluginDocs'))
})

gulp.task('build_pluginDocs_docs', gulp.series('copy_pluginDocs_docs', () => {
  return gulp.src('pluginDocs/index.html')
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('docs/pluginDocs'))
}))

gulp.task('build_vxe_docs', gulp.series('build_plugins_docs', 'build_pluginDocs_docs'))

gulp.task('copy_other3_docs', () => {
  return gulp.src('other3/dist/**')
    .pipe(gulp.dest('_temp/other3'))
})

gulp.task('copy_other3_index', gulp.series('copy_other3_docs', () => {
  return gulp.src('other3/dist/index.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/other3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other3'))
}))

gulp.task('copy_other4_docs', () => {
  return gulp.src('other4/dist/**')
    .pipe(gulp.dest('_temp/other4'))
})

gulp.task('copy_other4_index', gulp.series('copy_other4_docs', () => {
  return gulp.src('other4/dist/index.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/other4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other4'))
}))

gulp.task('copy_v1_docs', () => {
  return gulp.src('v1/dist/**')
    .pipe(gulp.dest('_temp/v1'))
})

gulp.task('copy_v1_index', gulp.series('copy_v1_docs', () => {
  return gulp.src('v1/dist/index.html')
  .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
  .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
  .pipe(gulp.dest('_temp/v1'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v1'))
}))

gulp.task('copy_v2_docs', () => {
  return gulp.src('v2/dist/**')
    .pipe(gulp.dest('_temp/v2'))
})

gulp.task('copy_v2_index', gulp.series('copy_v2_docs', () => {
  return gulp.src('v2/dist/index.html')
  .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
  .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
  .pipe(gulp.dest('_temp/v2'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v2'))
}))

gulp.task('copy_v3_docs', () => {
  return gulp.src('v3/dist/**')
    .pipe(gulp.dest('_temp/v3'))
})

gulp.task('copy_v3_index', gulp.series('copy_v3_docs', () => {
  return gulp.src('v3/dist/index.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3'))
}))

gulp.task('copy_v4_docs', () => {
  return gulp.src('v4/dist/**')
    .pipe(gulp.dest('_temp/v4'))
})

gulp.task('copy_v4_index', gulp.series('copy_v4_docs', () => {
  return gulp.src('v4/dist/issues.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/v4'))
}, () => {
  return gulp.src('v4/dist/index.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/v4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4'))
}))

gulp.task('copy_v4.7_docs', () => {
  return gulp.src('v4.7/dist/**')
    .pipe(gulp.dest('_temp/v4.7'))
})

gulp.task('copy_v4.7_index', gulp.series('copy_v4.7_docs', () => {
  return gulp.src('v4.7/dist/issues.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/v4.7'))
}, () => {
  return gulp.src('v4.7/dist/index.html')
    .pipe(replace('</head>', `${adScript}${isForceAd ? adCheckScript : ''}</head>`))
    .pipe(replace('</body>', `${sponsorsTmplScript}${adTmplScript}</body>`))
    .pipe(gulp.dest('_temp/v4.7'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4'))
}))

gulp.task('copy_docs_index', gulp.series('copy_other3_index', 'copy_other4_index', 'copy_v1_index', 'copy_v2_index', 'copy_v3_index', 'copy_v4_index', 'copy_v4.7_index', () => {
  return gulp.src('_temp/**')
    .pipe(gulp.dest('docs'))
}, () => {
  return gulp.src([
    '_temp/other3/**/*.html',
    '_temp/other4/**/*.html',
    '_temp/v1/**/*.html',
    '_temp/v2/**/*.html',
    '_temp/v3/**/*.html',
    '_temp/v4/**/*.html',
    '_temp/v4.7/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

const unicodeRE = /[^\x00-\xff]/g
const contentRE = /(?<!-)content\s*:\s*([^;}]+)/g

gulp.task('build_css_unicode', () => {
  return gulp.src([
    '_temp/**/**.css'
  ])
    .pipe(replace(contentRE, (u) => {
      return u.replace(unicodeRE, (m) => {
        return '\\' + m.charCodeAt(0).toString(16)
      })
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('build_latest_docs', () => {
  return gulp.src([
    'docs/v4/favicon.ico',
    'docs/v4/index.html',
    'docs/v4/issues.html',
    'docs/v4/logo.png'
  ])
    .pipe(gulp.dest('docs'))
})

gulp.task('build_docs', gulp.series('clear_docs_temp', 'copy_docs_index', 'build_css_unicode', 'build_latest_docs', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_zip', () => {
  return gulp.src('docs/**')
    .pipe(zip('docs.zip'))
    .pipe(gulp.dest('./'))
})
