const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styleComponents', () => {
  // Individual components style (for export!)
  gulp.src('./src/scss/components/*.scss')
    .pipe(sass({ includePaths: ['_/sass/'] }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/components'));
  // App Global Styles
  gulp.src('./src/scss/Base.scss')
    .pipe(sass({ includePaths: ['_/sass/'] }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
  // App Vendor Styles
  gulp.src('./src/scss/Vendor.scss')
    .pipe(sass({ includePaths: ['_/sass/'] }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
// Watch task
gulp.task('watch', () => {
  gulp.watch('./**/*.scss', ['styleComponents']);
});
