const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const imageMin = require('gulp-imagemin')
const del = require('del')
const browserSync = require('browser-sync')

const config = {
    styles: {
        source: 'src/sass/**/*.scss',
        destination: 'dist/css/'
    },
    templates: {
        source: 'src/**/*.html',
        destination: 'dist/'
    },
    images: {
        source: 'assets/img/**/*.{png,jpeg}',
        destination: 'dist/assets/img/'
    }
}

const reloadBrowser = function (done) {
    browserSync.reload();
    done();
};

const watchSource = function (done) {
    gulp.watch('src/', gulp.series(exports.default, reloadBrowser));
    done();
};

const startServer = function (done) {
    browserSync.init({
        server: {
            baseDir: 'dist/',
        },
        port: 80
    });

    done();
};

exports.buildStyles = function (done) {
    gulp.src(config.styles.source)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styles.destination));
    done();
};

exports.buildImages = function (done) {
    gulp.src(config.images.source)
        .pipe(gulp.dest(config.images.destination));
    done()
}

exports.buildTemplates = function (done) {
    gulp.src(config.templates.source)
        .pipe(gulp.dest(config.templates.destination));
    done()
}

exports.clean = function (done) {
    del.sync(['dist/']);

    return done();
};

exports.default = gulp.series(
    exports.clean,
    gulp.parallel(
        exports.buildStyles,
        exports.buildImages,
        exports.buildTemplates
    )
);

exports.watch = gulp.series(
    exports.default,
    startServer,
    watchSource
);