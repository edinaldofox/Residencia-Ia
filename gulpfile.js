var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('move-js', function() {

    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/metisMenu/dist/metisMenu.min.js',
        'bower_components/raphael/raphael.min.js',
        'bower_components/morrisjs/morris.min.js',
        'bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
        'scripts/morris-data.js',
        'scripts/index.js',
        ])
        .pipe(concat('min-min.js'))

        .pipe(gulp.dest('assets/js'));

});

gulp.task('move-css', function() {

    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/metisMenu/dist/metisMenu.min.css',
        'bower_components/startbootstrap-sb-admin-2/dist/css/timeline.css',
        'bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
        'bower_components/morrisjs/morris.css',
        'bower_components/font-awesome/css/font-awesome.min.css'
        ])
        .pipe(concat('min.css'))
        .pipe(gulp.dest('assets/styles'));

});

gulp.task('move-fonts', function() {

    return gulp.src([
        'bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot',
        'bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg',
        'bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf',
        'bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff',
        'bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2',
        'bower_components/font-awesome/fonts/FontAwesome.otf',
        'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
        'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
        'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
        'bower_components/font-awesome/fonts/fontawesome-webfont.woff'
        ])
        .pipe(gulp.dest('assets/fonts'));

});

gulp.task('default', ['move-js', 'move-css', 'move-fonts'], function() {
    // place code for your default task here
});

