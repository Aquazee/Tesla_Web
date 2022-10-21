const gulp = require('gulp');
const gap = require('gulp-append-prepend');

gulp.task('licenses', async () => {
  gulp
    .src('build/static/js/*chunk.js', { base: './' })
    .pipe(
      gap.prependText(`/*!
      * Website: https://www.proflyl.com/
      * Copyright 2022 Proflyl (https://www.proflyl.com)
      */`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Proflyl licenses in the production mode for the minified html
  gulp
    .src('build/index.html', { base: './' })
    .pipe(
      gap.prependText(`<!--
      * Website: https://www.proflyl.com/
      * Copyright 2022 Proflyl (https://www.proflyl.com)
      -->`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));

  // this is to add Proflyl licenses in the production mode for the minified css
  gulp
    .src('build/static/css/*chunk.css', { base: './' })
    .pipe(
      gap.prependText(`/*!
      * Website: https://www.proflyl.com/
      * Copyright 2022 Proflyl (https://www.proflyl.com)
      */`)
    )
    .pipe(gulp.dest('./', { overwrite: true }));
});
