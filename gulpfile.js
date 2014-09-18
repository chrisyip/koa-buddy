/* jshint boss: true */

var gulp, jshint, stylish

gulp = require('gulp')
jshint = require('gulp-jshint')
stylish = require('jshint-stylish')

gulp.task('jshint', function () {
  return gulp
          .src([
            'gulpfile.js',
            'index.js'
          ])
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
})

gulp.task('test', ['jshint'])

gulp.task('default', ['jshint'])
