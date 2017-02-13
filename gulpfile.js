var gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	notify  = require("gulp-notify"),
	autoprefix = require('gulp-autoprefixer')
	bower 	= require('gulp-bower');


// gulp.task('bower', function () {
//     gulp.src('./app/index.html')
//         .pipe(wiredep({
//             directory: "././bower_components"
//         }))
//         .pipe(gulp.dest('./app'));
// });
// var config = {
//     sassPath: './app/sass',
//     bowerDir: './bower_components'
// }

// gulp.task('bower', function() {
//     return bower()
//         .pipe(gulp.dest(config.bowerDir))
// });

// gulp.task('css', function() {
//             return sass(config.sassPath + '/style.scss', {
//             style: 'compressed',
//             loadPath: [
//                 './app/sass',
//                config.bowerDir + '/bootstrap-sass/assets/stylesheets',
//             ]
//         }).on("error", notify.onError(function (error) {
//                 return "Error: " + error.message;
//             }))
//         .pipe(gulp.dest('./app/css'));
// });

gulp.task ('sass', function() {
	return gulp.src('app/sass/main.scss')
	.pipe(sass())	
	.pipe(gulp.dest('app/css'));
});

gulp.task ('watch', function() {
	gulp.watch('app/sass/main.scss', ['sass']);
	gulp.watch('bower_components/**', ['bower']);
});
