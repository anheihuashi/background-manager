var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Static Server + watching other files
gulp.task('serve', function () {
  browserSync.init({
    server: './app',
    browser: 'google chrome'
  });

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch([
    'app/**/*.html',
    'app/js/**/*.js',
    'app/api/**/*.json',
    'app/img/**/*.{png|gif|jpg|jpeg}',
    'app/fonts/iconfont.{svg|ttf}']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['scss/app.scss','scss/offsite.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('default', ['serve', 'sass']);
