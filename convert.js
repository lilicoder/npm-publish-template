const gulp = require("gulp");
const gulpless = require("gulp-less");
let output = "lib";
gulp
  .src(["src/common/**/*.less", "src/common/**/*.css"])
  .pipe(gulpless())
  .pipe(gulp.dest(output));
