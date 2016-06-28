var gulp = require('gulp')
var sass = require('gulp-sass')

var paths = {
  sass: 'wagtailbettereditor/static_src/wagtailbettereditor/scss/**/*.scss'
}

gulp.task('compile-sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({includePaths: ['node_modules']}))
    .pipe(gulp.dest('wagtailbettereditor/static/wagtailadmin/css'))
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile-sass'])
})

gulp.task('default', ['compile-sass'])
