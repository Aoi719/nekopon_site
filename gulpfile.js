var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));
var sassGlob = require('gulp-sass-glob');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');
var browserSync  = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error:<%= error.message %>")}))
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([cssdeclsort({order: 'alphabetical'})]))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./public/css'));
});

// gulp.task( 'default', function() {
//     gulp.watch( './src/scss/**/*.scss', gulp.task('sass'));
// });


gulp.task('browser-sync', function(done) {
  browserSync.init({
      server: {
          baseDir: './public',
          index: 'index.html'
      }
  });
  done();
});

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task( 'watch',  function(done) {
  gulp.watch( './src/scss/**/*.scss', gulp.task('sass'));
  gulp.watch( './public/*.html', gulp.task('bs-reload'));
  gulp.watch( './public/css/*.css', gulp.task('bs-reload'));
  gulp.watch( './public/js/*.js', gulp.task('bs-reload'));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));