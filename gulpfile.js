var gulp = require("gulp");
var concat = require("gulp-concat");

var angularJs = [
    "./node_modules/core-js/client/shim.min.js",
    "./node_modules/zone.js/dist/zone.js",
    "./node_modules/reflect-metadata/Reflect.js",
    "./node_modules/systemjs/dist/system.src.js"
];

gulp.task("default", function () {
    return gulp.src(angularJs)
        .pipe(concat("angular2.js"))
        .pipe(gulp.dest("./js"));
});

gulp.task("clean", function () {
    return del.sync([
      "./css/**/*",
      "./js/**/*"
    ]);
});