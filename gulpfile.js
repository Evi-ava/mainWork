const gulp   = require('gulp');
const sass   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const map    = require('gulp-sourcemaps');
// const chalk  = require('chalk');

const freshFramework      = "./fresh/fresh-framework/fresh.scss";
const freshFrameworkCSS   = "./fresh/fresh-framework/fresh-framework-css/";
const freshComponensts    = "./fresh/fresh-components/fresh-components.scss";
const freshComponenstsCSS = "./fresh/fresh-components/fresh-components-css/";

function scssHandler() {
    return gulp.src(freshFramework)
    .pipe(map.init())
    .pipe(sass({
         outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(concat('fresh.min.css'))
    .pipe(map.write('../sourcemaps/'))
    .pipe(gulp.dest(freshFrameworkCSS))
}

function scssComponentHandler() {
  return gulp.src(freshComponensts)
  .pipe(map.init())
  .pipe(sass({
       outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(concat('fresh-components.min.css'))
  .pipe(map.write('../sourcemaps/'))
  .pipe(gulp.dest(freshComponenstsCSS))
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

