var gulp = require('gulp'),
    less = require('gulp-less'),
    prefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// gulp.task('compile-css', function () {
//     return gulp.src('./assets/css/sources/main.less')
//         .pipe(less())
//         .pipe(prefixer({
//             browsers: ['last 7 versions']
//         }))
//         .pipe(clean())
//         .pipe(gulp.dest('./assets/css/'));
// });
//
// gulp.task('watch', function () {
//     gulp.watch('./assets/css/sources/**/*.less', gulp.series('compile-css'));
// });
//
// gulp.task('default', gulp.series('compile-css', 'watch'));


gulp.task('compile-dev-css', function () {
    return gulp.src('./assets/css/sources/main.less')
        .pipe(less())
        .pipe(prefixer({
                    browsers: ['last 7 versions']
                }))
		.pipe(clean())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('./assets/css/sources/**/*.less', gulp.series('compile-dev-css'));
});

gulp.task('default', gulp.series('compile-dev-css', 'watch'));

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./assets"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
