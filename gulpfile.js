var gulp = require("gulp");
var sass = require("gulp-sass");
var slim = require('gulp-slim');
var babel = require("gulp-babel");
var connect = require('gulp-connect');
var browserSync = require('browser-sync');

gulp.task('connect', function() {
  connect.server({
    root: './public/html/',
    livereload: true
  });
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public/html/"
        }
    });
});
// sass
gulp.task("sass", function() {
  gulp.src("./app/stylesheets/*.sass")
    .pipe(sass({pretty: true}))
    .pipe(gulp.dest("./public/css/"));
});
// slim
gulp.task('slim', function() {
  gulp.src("./app/views/*.slim")
    .pipe(slim({pretty: true}))
    .pipe(gulp.dest('./public/html/'));
});
// es6
gulp.task('babel', function(){
  gulp.src("./app/javascripts/*.es6")
    .pipe(babel())
    .pipe(gulp.dest('./public/js/'))
})
// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});
// default
// gulp.task('default', ['slim', 'sass', 'babel', 'connect', 'browser-sync']);
// watch
gulp.task('default', ['slim', 'sass', 'babel', 'connect', 'browser-sync'], function(){
  gulp.watch("./app/views/*.slim", ['slim', 'bs-reload']);
  gulp.watch("./app/stylesheets/*.sass", ['sass']);
  gulp.watch("./app/javascripts/*.es6", ['babel']);
});
