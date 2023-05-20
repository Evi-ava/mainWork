const gulp = require('gulp');

const sass   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const map    = require('gulp-sourcemaps');
const chalk  = require('chalk');

const freshFramework = "/fresh/fresh-framework/*.scss";
const freshCSS = "/fresh/fresh-css/";

const scssHandler = () => {
    return src(freshFramework)
    .pipe(map.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('libs.min.css'))
    .pipe(map.write('../sourcemaps/'))
    .pipe(dest(freshCSS))
}

exports.scssHandler = scssHandler;

