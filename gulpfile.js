const {src, dest, watch, parallel} = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function styles() {
    return src('./src/components/App.scss')
        .pipe(concat('App.css'))
        .pipe(sass({ style: 'compressed' }))
        .pipe(dest('./src/build'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('./src/components/App.jsx')
        .pipe(concat('App.jsx'))
        .pipe(dest('./src/build'))
        .pipe(browserSync.stream());
}

function watcher() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
    watch(['./src/components/App.scss'], styles);
    watch(['./src/components/App.jsx'], scripts);
    watch(['./*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watcher = watcher;
exports.default = parallel(styles, scripts, watcher);