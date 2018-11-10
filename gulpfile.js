var gulp 						= require('gulp'),
		sass 						= require('gulp-sass'),
		rename 					= require('gulp-rename'),
		uglify 					= require('gulp-uglify'),
		minifycss 			= require('gulp-minify-css'),
		autoprefixer 		= require('gulp-autoprefixer'),
		imagemin  			= require('gulp-imagemin'),
		imageminMozjpeg = require('imagemin-mozjpeg'),
		browserSync 		= require('browser-sync').create();

gulp.task('browser-sync', [
						'styles',
						'imageCompression',
						'copyfontAwesome',
						'copyfonts',
						'copyLibs',
						'copyHtml',
						'scripts'
							], function() {
	browserSync.init({
			server: {
					baseDir: './dist'
			},
			notify: false,
			files: ['./dist/**/*.html','./dist/js/*.js','./dist/css/*.css','./dist/libs/*']
	});
});

gulp.task('styles', function () {
	gulp.src('src/sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({
		browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		cascade: false
	}))
	.pipe(minifycss(''))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('imageCompression', () =>
  gulp.src('src/img/*')
  .pipe(imagemin([imageminMozjpeg({
      quality: 85
  })]))
  .pipe(gulp.dest('dist/img/'))
);

gulp.task('copyfontAwesome', function() {
  return gulp.src([
  	'src/libs/font-awesome/webfonts/*.{ttf,woff,woff2,eot,svg}',
  	'src/libs/font-awesome/css/all.min.css'
  	])
  	.pipe(gulp.dest('dist/css/font-awesome/webfonts/'));
});

gulp.task('copyfonts', function() {
  return gulp.src([
  	'src/fonts/**/*.{ttf,woff,eot}'])
  	.pipe(gulp.dest('dist/fonts/'));
});

gulp.task('copyLibs', function() {
	return gulp.src([
		'src/libs/bootstrap-grid/*.css',
		'src/libs/jquery/*.js',
		'src/libs/fabricJS/fabric.js'
		])
		.pipe(gulp.dest('dist/libs'));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copyHtml', function() {
	return gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch('src/sass/*.sass', ['styles']);
	gulp.watch('src/libs/*', ['copyLibs']);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/*.html', ['copyHtml']);
});

gulp.task('default', ['watch','browser-sync']);