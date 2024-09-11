const fs = require('fs')
const gulp = require('gulp')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const ts = require('gulp-typescript')
const del = require('del')

const cacheTsxMaps = {}

gulp.task('handle_vue_tmpltojs', () => {
  return gulp.src([
    'src/views/**/Demo*.vue'
  ])
    .pipe(replace(/[\s\S]*/, function (text) {
      const rest = text.match(/<script [^>]*?>([\s\S]*)<\/script>/)
      if (rest) {
        if (text.indexOf('lang="tsx"') > -1) {
          const codePath = `${this.file.dirname}\\${this.file.basename}`
          cacheTsxMaps[codePath] = 1
        }
        return rest[1]
      }
      return ''
    }))
    .pipe(rename({
      extname: '.tsx'
    }))
    .pipe(ts({
      target: 'esnext',
      module: 'esnext',
      strict: true,
      jsx: 'preserve',
      importHelpers: true,
      moduleResolution: 'node',
      skipLibCheck: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      allowSyntheticDefaultImports: true,
      noImplicitAny: false,
      sourceMap: true,
      lib: [
        'esnext',
        'dom',
        'dom.iterable',
        'scripthost'
      ]
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('temp/views'))
})

gulp.task('handle_vue_tstojs', gulp.series('handle_vue_tmpltojs', () => {
  return gulp.src([
    'src/views/**/Demo*.vue'
  ])
    .pipe(replace(/[\s\S]*/, function (text) {
      const codePath = `${this.file.dirname}\\${this.file.basename}`
      const handlePath = `${this.file.dirname}\\${this.file.basename}`.replace('\\src\\', '\\temp\\').replace('.vue', '.js')
      if (fs.existsSync(handlePath)) {
        return text.replace(/<script [^>]*?>([\s\S]*)<\/script>/, () => {
          let codeContent = fs.readFileSync(handlePath, 'utf-8').replace('export default Vue.extend({', 'export default {').trim().replace(/\}\);$/, '};')
          if (codeContent) {
            codeContent += '\n'
          }
          if (cacheTsxMaps[codePath]) {
            return `<script lang="jsx">\n${codeContent}</script>`
          }
          return `<script>\n${codeContent}</script>`
        })
      }
      return text
    }))
    .pipe(gulp.dest('dist/example/js'))
}))

gulp.task('handle_tstojs', () => {
  return gulp.src([
    'src/**/*.d.ts',
    'src/views/**/demo*.ts',
    'src/views/**/demo*.tsx'
  ])
    .pipe(ts({
      target: 'esnext',
      module: 'esnext',
      strict: true,
      jsx: 'preserve',
      importHelpers: true,
      moduleResolution: 'node',
      skipLibCheck: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      allowSyntheticDefaultImports: true,
      noImplicitAny: false,
      sourceMap: true,
      lib: [
        'esnext',
        'dom',
        'dom.iterable',
        'scripthost'
      ]
    }))
    .pipe(gulp.dest('dist/example/js'))
})

gulp.task('build_vue_tstojs', gulp.series('handle_vue_tstojs', 'handle_tstojs', () => {
  return del([
    'temp'
  ])
}))

gulp.task('build_examples', gulp.series('build_vue_tstojs', () => {
  return gulp.src([
    'src/views/**/Demo*.vue',
    'src/views/**/demo*.ts',
    'src/views/**/demo*.tsx'
  ])
    .pipe(gulp.dest('dist/example/ts'))
}))
