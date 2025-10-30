const gulp = require('gulp')
const fs = require('fs')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const zip = require('gulp-zip')
const UglifyJS = require('uglify-js')
const XEUtils = require('xe-utils')

const enableAd = true
const enableSponsors = true

// 是否启用强制广告
const isForceAd = false

const adVariable = {
  VXE_AD_WRAPPER_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 18).join(''),
  VXE_AD_WRAPPER_STYLE: `position: fixed !important;right: 20px !important;top: ${XEUtils.sample([60, 80, 100, 120, 140])}px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`,
  VXE_AD_SPONSOR_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 16).join(''),
  VXE_AD_WWADS_STYLE: 'max-width: 200px !important;;visibility: visible !important;display: block !important;'
}

// 赞助商
const ssTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/ssTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const ssTmplScript = `<script>(function(){${ssTmpJS.code}})()</script>`
const sponsorsJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/sponsors.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const sponsorsTmplScript = `<script>(function(){${sponsorsJS.code}})()</script>`

// 广告位
const adTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/adTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adTmplScript = `<script>(function(){${adTmpJS.code}})()</script>`
const adCheckJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/check.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adCheckScript = `<script>${adCheckJS.code}</script>`
const adScript = `<script data-mode="hash" type="text/javascript" charset="UTF-8" src="https://cdn.wwads.cn/js/makemoney.js" async></script>`

// 访问数量统计
const tjTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/tjTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const hmScript = `<script>${tjTmpJS.code}</script>`

gulp.task('clear_docs_temp', () => {
  return del([
    '_temp',
    'docs',
    'docs.zip'
  ], { force: true })
})

gulp.task('copy_other3_temp', () => {
  return gulp.src('other3/dist/**')
    .pipe(gulp.dest('_temp/other3'))
})
gulp.task('copy_other3_index', gulp.series('copy_other3_temp', () => {
  return gulp.src('other3/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/other3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other3'))
}))
gulp.task('copy_other3_docs', gulp.series('copy_other3_index', () => {
  return gulp.src('_temp/other3/**')
    .pipe(gulp.dest('docs/other3'))
}, () => {
  return gulp.src([
    '_temp/other3/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_other4_temp', () => {
  return gulp.src('other4/dist/**')
    .pipe(gulp.dest('_temp/other4'))
})
gulp.task('copy_other4_index', gulp.series('copy_other4_temp', () => {
  return gulp.src('other4/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/other4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other4'))
}))
gulp.task('copy_other4_docs', gulp.series('copy_other4_index', () => {
  return gulp.src('_temp/other4/**')
    .pipe(gulp.dest('docs/other4'))
}, () => {
  return gulp.src([
    '_temp/other4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v1_temp', () => {
  return gulp.src('v1/dist/**')
    .pipe(gulp.dest('_temp/v1'))
})
gulp.task('copy_v1_index', gulp.series('copy_v1_temp', () => {
  return gulp.src('v1/dist/index.html')
  .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
  .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
  .pipe(gulp.dest('_temp/v1'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v1'))
}))
gulp.task('copy_v1_docs', gulp.series('copy_v1_index', () => {
  return gulp.src('_temp/v1/**')
    .pipe(gulp.dest('docs/v1'))
}, () => {
  return gulp.src([
    '_temp/v1/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))


gulp.task('copy_v2_temp', () => {
  return gulp.src('v2/dist/**')
    .pipe(gulp.dest('_temp/v2'))
})
gulp.task('copy_v2_index', gulp.series('copy_v2_temp', () => {
  return gulp.src('v2/dist/index.html')
  .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
  .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
  .pipe(gulp.dest('_temp/v2'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v2'))
}))
gulp.task('copy_v2_docs', gulp.series('copy_v2_index', () => {
  return gulp.src('_temp/v2/**')
    .pipe(gulp.dest('docs/v2'))
}, () => {
  return gulp.src([
    '_temp/v2/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))


gulp.task('copy_v3_temp', () => {
  return gulp.src('v3/dist/**')
    .pipe(gulp.dest('_temp/v3'))
})
gulp.task('copy_v3_index', gulp.series('copy_v3_temp', () => {
  return gulp.src('v3/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3'))
}))
gulp.task('copy_v3_docs', gulp.series('copy_v3_index', () => {
  return gulp.src('_temp/v3/**')
    .pipe(gulp.dest('docs/v3'))
}, () => {
  return gulp.src([
    '_temp/v3/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v3d8_temp', () => {
  return gulp.src('v3.8/dist/**')
    .pipe(gulp.dest('_temp/v3.8'))
})
gulp.task('copy_v3d8_index', gulp.series('copy_v3d8_temp', () => {
  return gulp.src('v3.8/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v3.8'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3.8'))
}))
gulp.task('copy_v3d8_docs', gulp.series('copy_v3d8_index', () => {
  return gulp.src('_temp/v3.8/**')
    .pipe(gulp.dest('docs/v3.8'))
}, () => {
  return gulp.src([
    '_temp/v3.8/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v3_old_temp', () => {
  return gulp.src('v3_old/dist/**')
    .pipe(gulp.dest('_temp/v3_old'))
})
gulp.task('copy_v3_old_index', gulp.series('copy_v3_old_temp', () => {
  return gulp.src('v3_old/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v3_old'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3_old'))
}))
gulp.task('copy_v3_old_docs', gulp.series('copy_v3_old_index', () => {
  return gulp.src('_temp/v3_old/**')
    .pipe(gulp.dest('docs/v3_old'))
}, () => {
  return gulp.src([
    '_temp/v3_old/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v4d6_temp', () => {
  return gulp.src('v4.6/dist/**')
    .pipe(gulp.dest('_temp/v4.6'))
})
gulp.task('copy_v4d6_index', gulp.series('copy_v4d6_temp', () => {
  return gulp.src('v4.6/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v4.6'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4.6'))
}))
gulp.task('copy_v4d6_docs', gulp.series('copy_v4d6_index', () => {
  return gulp.src('_temp/v4.6/**')
    .pipe(gulp.dest('docs/v4.6'))
}, () => {
  return gulp.src([
    '_temp/v4.6/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v4_old_temp', () => {
  return gulp.src('v4_old/dist/**')
    .pipe(gulp.dest('_temp/v4_old'))
})
gulp.task('copy_v4_old_index', gulp.series('copy_v4_old_temp', () => {
  return gulp.src('v4_old/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v4_old'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4_old'))
}))
gulp.task('copy_v4_old_docs', gulp.series('copy_v4_old_index', () => {
  return gulp.src('_temp/v4_old/**')
    .pipe(gulp.dest('docs/v4_old'))
}, () => {
  return gulp.src([
    '_temp/v4_old/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v4_temp', () => {
  return gulp.src('v4/dist/**')
    .pipe(gulp.dest('_temp/v4'))
})
gulp.task('copy_v4_index', gulp.series('copy_v4_temp', () => {
  return gulp.src('v4/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4'))
}))
gulp.task('copy_v4_docs', gulp.series('copy_v4_index', () => {
  return gulp.src('_temp/v4/**')
    .pipe(gulp.dest('docs/v4'))
}, () => {
  return gulp.src([
    '_temp/v4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_docs_index', gulp.series('copy_other3_index', 'copy_other4_index', 'copy_v1_index', 'copy_v2_index', 'copy_v3_index', 'copy_v3d8_index', 'copy_v3_old_index', 'copy_v4d6_index', 'copy_v4_old_index', 'copy_v4_index', () => {
  return gulp.src('_temp/**')
    .pipe(gulp.dest('docs'))
}, () => {
  return gulp.src([
    '_temp/other3/**/*.html',
    '_temp/other4/**/*.html',
    '_temp/v1/**/*.html',
    '_temp/v2/**/*.html',
    '_temp/v3/**/*.html',
    '_temp/v3.8/**/*.html',
    '_temp/v4.6/**/*.html',
    '_temp/v4_old/**/*.html',
    '_temp/v4/**/*.html',
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
    'docs/v4/*.html',
    'docs/v4/*.ico',
    'docs/v4/*.png',
    'docs/v4/*.txt'
  ])
    .pipe(gulp.dest('docs'))
})

gulp.task('build_other3_docs', gulp.series('clear_docs_temp', 'copy_other3_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_other4_docs', gulp.series('clear_docs_temp', 'copy_other4_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v1_docs', gulp.series('clear_docs_temp', 'copy_v1_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v2_docs', gulp.series('clear_docs_temp', 'copy_v2_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v3_docs', gulp.series('clear_docs_temp', 'copy_v3_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v3d8_docs', gulp.series('clear_docs_temp', 'copy_v3d8_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v3_old_docs', gulp.series('clear_docs_temp', 'copy_v3_old_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v4_docs', gulp.series('clear_docs_temp', 'copy_v4_docs', 'build_latest_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v4d6_docs', gulp.series('clear_docs_temp', 'copy_v4d6_docs','build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v4_old_docs', gulp.series('clear_docs_temp', 'copy_v4_old_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_all_docs', gulp.series('clear_docs_temp', 'copy_docs_index', 'build_css_unicode', 'build_latest_docs', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_other3_zip', () => {
  return gulp.src([
    'docs/other3/**'
  ], { base: './docs/' })
    .pipe(zip('docs_other3.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_other4_zip', () => {
  return gulp.src([
    'docs/other4/**'
  ], { base: './docs/' })
    .pipe(zip('docs_other4.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v1_zip', () => {
  return gulp.src([
    'docs/v1/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v1.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v2_zip', () => {
  return gulp.src([
    'docs/v2/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v2.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v3_zip', () => {
  return gulp.src([
    'docs/v3/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v3.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v3d8_zip', () => {
  return gulp.src([
    'docs/v3.8/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v3.8.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v3_old_zip', () => {
  return gulp.src([
    'docs/v3_old/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v3_old.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v4_zip', () => {
  return gulp.src([
    'docs/v4/**',
    'docs/*'
  ], { base: './docs/' })
    .pipe(zip('docs_v4.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v4d6_zip', () => {
  return gulp.src([
    'docs/v4.6/**',
    'docs/*'
  ], { base: './docs/' })
    .pipe(zip('docs_v4.6.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v4_old_zip', () => {
  return gulp.src([
    'docs/v4_old/**',
    'docs/*'
  ], { base: './docs/' })
    .pipe(zip('docs_v4_old.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_all_zip', () => {
  return gulp.src('docs/**')
    .pipe(zip('docs.zip'))
    .pipe(gulp.dest('./'))
})
