const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const del = require('del')
const browserSync = require('browser-sync')
const concat = require('gulp-concat')
//const sourcemMaps = require('gulp-sourcemaps')
//const cssNano = require('gulp-cssnano')

const config = {
    styles: {
        source: 'src/sass/**/*.scss',
        destination: 'dist/css/',
    },
    templates: {
        source: 'src/**/*.html',
        destination: 'dist/'
    },
    assets: {
        source: 'assets/**/*.*',
        destination: 'dist/assets/',
        libraries: ['node_modules/@fortawesome/fontawesome-free/webfonts*/*']
    },
    js: {
        source: 'src/js/**/*.js',
        destination: 'dist/js/',
        libraries: [
            'node_modules/jquery/dist/jquery.slim.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js'
        ]
    },
}

const reloadBrowser = function (done) {
    browserSync.reload();
    done();
};

const watchSource = function (done) {
    gulp.watch('src/', gulp.series(exports.buildSrc, reloadBrowser));
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
        //.pipe(sourcemMaps.init())
        //.pipe(cssNano())
        //.pipe(sourcemMaps.write())
        .pipe(gulp.dest(config.styles.destination));
    done();
};

exports.buildAssets = function (done) {
    gulp.src([config.assets.source].concat(config.assets.libraries))
        .pipe(gulp.dest(config.assets.destination));
    done()
}

exports.buildTemplates = function (done) {
    gulp.src(config.templates.source)
        .pipe(gulp.dest(config.templates.destination));
    done()
}

exports.buildScripts = function (done) {
    gulp.src([config.js.source].concat(config.js.libraries))
        //.pipe(sourcemMaps.init())
        .pipe(concat('main.js'))
        //.pipe(sourcemMaps.write())
        .pipe(gulp.dest(config.js.destination));
    done()
}

exports.clean = function (done) {
    del.sync(['dist/']);

    return done();
};

exports.buildSrc = gulp.series(
    gulp.parallel(
        exports.buildStyles,
        exports.buildTemplates,
        exports.buildScripts
    )
)

exports.default = gulp.series(
    exports.clean,
    exports.buildSrc,
    exports.buildAssets
);

exports.watch = gulp.series(
    exports.default,
    startServer,
    watchSource
);