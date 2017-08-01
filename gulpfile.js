var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoPrefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested");


gulp.task("default", function(){
  console.log("this is a test");
});

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([nested,cssvars,autoPrefixer]))
  .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){
   watch("./app/assets/**/*.css", function(){
      gulp.start("styles");
   });
});
