var gulp = require("gulp")
var less = require("gulp-less");

gulp.task("less", function() {
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest("css"));

});






/*<!--gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('task-name', function () {
  gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})

var sass = require('gulp-sass');

[crayon-5a2fd7a68497a271972429 inline="true" ]
gulp.task('sass', function(){
  gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});-->*/
