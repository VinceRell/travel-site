var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoPrefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssImport,mixins,nested,cssvars,hexrgba,autoPrefixer]))
  .on("error",function(errorInfo){
    console.log(errorInfo);
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
