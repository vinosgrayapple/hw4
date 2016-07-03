var gulp = require('gulp');
var csso = require('gulp-csso');

gulp.task('default', function () {
    return gulp.src('./css/style.css')
        .pipe(csso())
        .pipe(gulp.dest('./css/out'));
});

gulp.task('development', function () {
    return gulp.src('./css/style.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./css/out'));
});
