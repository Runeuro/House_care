'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.less = function () {

    return gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/styles'));
}

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('less'));
};