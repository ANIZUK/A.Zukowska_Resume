var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('css'))
});

gulp.task('default',function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['jshint'])
});
