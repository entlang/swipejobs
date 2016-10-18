"use strict";

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const less = require("gulp-less");
const merge = require("merge-stream");

var lessFiles = [
	"./assets/less/utility.less",
	"./assets/less/default.less",
];

var cssFiles = [
	"./node_modules/bootstrap/dist/css/bootstrap.css",
	"./node_modules/font-awesome/css/font-awesome.css",
];

var angularJs = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js"
];

var fonts = [
    "./node_modules/font-awesome/fonts/font*.*"
];

gulp.task("angular:js", function () {
    return gulp.src(angularJs)
        .pipe(concat("swipejobs.js"))
        .pipe(gulp.dest("./js"));
});

gulp.task("css", function () {
	  var lessStream = gulp.src(lessFiles)
        .pipe(less())
        .pipe(concat("less-files.less"));

    var cssStream = gulp.src(cssFiles)
       .pipe(concat("css-files.css"));

    var mergedStream =
        merge(lessStream, cssStream)
            .pipe(concat("swipejobs.css"))
            .pipe(gulp.dest("./css"));
    return mergedStream;
});

gulp.task("fonts", function () {
    return gulp.src(fonts)
        .pipe(gulp.dest("./fonts"));
});

gulp.task("clean", function () {
    return del.sync([
      "./css/**/*",
      "./js/**/*",
      "./fonts/**/*"
    ]);
});

gulp.task("watch", function () {    
    gulp.watch("./assets/less/**/*.less", ["css"]);
});

gulp.task('compile', ['clean', 'css', 'angular:js', 'fonts']);

// gulp.task('build', ['compile']);
gulp.task('default', ['compile']);