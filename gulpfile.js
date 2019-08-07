"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var clean = require("gulp-clean");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("clean", function () {
  return gulp.src("source/js/app.js")
      .pipe(clean());
});

gulp.task("babel", function () {
  return gulp.src("source/js/library/*.js")
      .pipe(sourcemap.init())
      .pipe(babel({
          presets: ["@babel/env"]
      }))
      .pipe(concat("app.js"))
      .pipe(sourcemap.write("."))
      .pipe(gulp.dest("source/js/"))
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/library/*.js", gulp.series("clean","babel"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "clean", "babel", "server"));
