var gulp = require('gulp');
var watch = require('gulp-watch');
var sass  = require('gulp-sass');

gulp.task('scss', function()
{    return gulp.src(['sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('sass', function()
{
    return gulp.src(('sass/*sass'))
        .pipe(sass({ indentedSyntax: true }))
        .pipe(gulp.dest('css'))
})

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['scss']),
    gulp.watch('sass/*.sass', ['sass'])
})