var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var cssshrink = require('gulp-cssshrink');
var header = require('gulp-header');
var size = require('gulp-size');
var connect = require('gulp-connect');

var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');


var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');
var onError = function (err) {
    gutil.beep();
    console.log(err);
    console.log('*****MESSAGE*****');
    console.log(err.message);
};
var paths = {
    jade: ['./partials/jade/*.jade'],
    scripts: ['./js/app/*.js'],
    sass: ['./stylesheets/sass/*.scss', './stylesheets/sass/**/*.scss']
};


/**
 * Compile JADE into HTML
 */
gulp.task('jade', function () {
    gulp.src(paths.jade)
        .pipe(connect.reload())
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest('./partials/html/'))
});

gulp.task('jade:index', function () {
    gulp.src('./index.jade')
        .pipe(connect.reload())
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
});

/**
 * Concat app scripts
 */
gulp.task('scripts', function () {
    gulp.src(paths.scripts)
        .pipe(connect.reload())
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('built.js'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(size({title: 'built.js'}))
        .pipe(gulp.dest('./js/dist/'))
        .pipe(rename('built.min.js'))
        .pipe(uglify())
        .pipe(size({title: 'built.min.js'}))
        .pipe(gulp.dest('./js/dist/'))
});

/**
 * Compile SASS files
 */
gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(connect.reload())
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass({
            quiet: true,
            lineNumbers: true,
            loadPath: require('node-neat').includePaths
        }))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(size({title: 'main.css'}))
        .pipe(gulp.dest('./stylesheets/css/'))
        .pipe(rename('main.min.css'))
        .pipe(cssshrink())
        .pipe(size({title: 'main.min.css'}))
        .pipe(gulp.dest('./stylesheets/css/'))
});


/**
 * WEBSERVER + livereload
 */
gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});
gulp.task('connect:index', function () {
    gulp.src('./index.html')
        .pipe(connect.reload());
});
gulp.task('connect:html', function () {
    gulp.src('./partials/html/*.html')
        .pipe(connect.reload());
});
gulp.task('connect:css', function () {
    gulp.src('./stylesheets/css/*.css')
        .pipe(connect.reload());
});
gulp.task('connect:js', function () {
    gulp.src('./js/dist/*.js')
        .pipe(connect.reload());
});
gulp.task('watch:connect', function () {
    gulp.watch(['./index.html'], ['connect:index']);
    gulp.watch(['./partials/html/*.html'], ['connect:html']);
    gulp.watch(['./stylesheets/css/*.css'], ['connect:css']);
    gulp.watch(['./js/dist/*.js'], ['connect:js']);
});
gulp.task('connect', ['webserver', 'watch:connect']);








/**
 *Watch files
 */
gulp.task('watch:jade', function () {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch('./index.jade', ['jade:index']);
});
gulp.task('watch:scripts', function () {
    gulp.watch(paths.scripts, ['scripts']);
});
gulp.task('watch:sass', function () {
    gulp.watch(paths.sass, ['sass']);
});
gulp.task('watch:dev', ['watch:jade', 'watch:scripts', 'watch:sass']);




/**
 * Default task
 */
gulp.task('default', ['connect','watch:dev']);