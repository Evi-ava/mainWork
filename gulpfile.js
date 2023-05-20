const gulp = require('gulp');

const sass   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const map    = require('gulp-sourcemaps');
// const chalk  = require('chalk');

const freshFramework = "./fresh/fresh-framework/fresh.scss";
const freshComponensts = "./fresh/fresh-components/**/*.scss"
const freshCSS = "./fresh/fresh-css/";

function scssHandler() {
    return gulp.src(freshFramework)
    .pipe(map.init())
    .pipe(sass({
      // outputStyle: 'compressed'
         outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(concat('fresh.min.css'))
    .pipe(map.write('../sourcemaps/'))
    .pipe(gulp.dest(freshCSS))
}

function scssComponentHandler() {
  return gulp.src(freshComponensts)
  .pipe(map.init())
  .pipe(sass({
    // outputStyle: 'compressed'
       outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(concat('fresh.min.css'))
  .pipe(map.write('../sourcemaps/'))
  .pipe(gulp.dest(freshComponensts))
}

const watch_dev = () => {
  gulp.watch(['./fresh/fresh-framework/**/*.scss'], scssHandler).on(
    'change',
    () => {}
  )

  gulp.watch(['./fresh/fresh-components/**/*.scss'], scssComponentHandler).on(
    'change',
    () => {}
  )
}

exports.scssHandler = scssHandler;
exports.watch_dev = watch_dev;

