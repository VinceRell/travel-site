var gulp = require("gulp"),
watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("this is a test");
});

gulp.task("watch", function(){
   watch("./test.html", function(){
      gulp.start("default");
   });
});
