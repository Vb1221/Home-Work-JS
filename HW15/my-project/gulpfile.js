const gulp = require('gulp');

function move() {
  return gulp.src('src/index.js') 
    .pipe(gulp.dest('src2/')); 
};

 exports.move = move