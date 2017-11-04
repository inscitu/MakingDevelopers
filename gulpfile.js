var gulp = require('gulp');

// Imported tasks
gulp.task('lint', require('./gulp/eslint'));

// Tasks
gulp.task('analize', ['lint']);
