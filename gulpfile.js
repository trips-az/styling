const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const del = require('del');

const isProduction = argv.release;

function clean() {
  return del(`./public/${argv.name}`);
}

gulp.task('style', () => {
  return gulp.src(`./src/${argv.name}/style.scss`)
    .pipe(sass())
    .pipe(gulpif(isProduction, cleanCSS()))
    .pipe(gulp.dest(`./public/${argv.name}`))
});

gulp.task('image', () => {
  return gulp.src(`./src/${argv.name}/img/**/*.{png,jpg,svg}`)
    .pipe(gulpif(isProduction,
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
        // imagemin.svgo(),
      ]),
    ))
    .pipe(gulp.dest(`./public/${argv.name}/img`));
});

gulp.task('watch', () => {
  gulp.watch('**/*.scss', gulp.series('style'));
});

gulp.task('build', gulp.series(clean, gulp.parallel('style', 'image')));
gulp.task('dev', gulp.series('build', 'watch'));
