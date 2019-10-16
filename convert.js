const gulp = require("gulp");
const gulpless = require("gulp-less");
var imageMin = require("gulp-imagemin");
let output = "lib";
gulp
  .src(["src/common/**/*.less", "src/common/**/*.css"])
  .pipe(gulpless())
  .pipe(gulp.dest(output));

gulp
  .src(["src/common/**/*.png", "src/common/**/*.jpg"], { sourcemaps: true })
  .pipe(imageMin({ progressive: true }))
  .pipe(gulp.dest(output, { sourcemaps: true }));
