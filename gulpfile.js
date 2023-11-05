const gulp = require("gulp");
const copy = require("gulp-copy");
gulp.task('copy-public-folder', function() {
    return gulp.src('./public/**/*').pipe(copy("./build"))
});

gulp.task('public', gulp.series('copy-public-folder'));