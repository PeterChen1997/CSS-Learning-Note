const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('styles', () => {
    return gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
        .pipe(reload({stream: true}))
})

gulp.task('browser-sync', () => {
    
})

gulp.task('watch', ['styles'], () => {
    browserSync.init({
        server: {
            server:"./"
        }
    })
    gulp.watch('css/styles.css', ['styles'])
    gulp.watch("*.html").on('change', reload)
})

gulp.task('default', ['watch'])