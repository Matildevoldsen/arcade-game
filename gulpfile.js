var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concact = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
    gulp.watch('js/**/*.js', ['compress'])
        .on('change', browserSync.reload);
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('./index.html', ['copy-html'])
        .on('change', browserSync.reload);
    browserSync.init({
        server: "./dist"
    });
    browserSync.stream();
});

gulp.task('compress', function () {
    return gulp.src(['js/app.js', 'js/resources.js', 'js/enemy.js'])
        .pipe(babel({
            presets: ['es2015']
        }))

        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .on('error', function(err) {
            console.error('Error in compress task', err.toString());
        });
});

gulp.task('copy-html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('copy-images', function () {
    gulp.src('images/*')
        .pipe(gulp.dest('dist/images'))
});