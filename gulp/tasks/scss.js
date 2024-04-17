import * as dartSass from "sass"; // импортируем библиотеку sass //npm i sass -D
import gulpSass from "gulp-sass"; // импортируем gulp-sass //npm i gulp-sass -D
import rename from "gulp-rename"; // импортируем плагин gulp-rename //npm i gulp-rename -D

import map from "gulp-sourcemaps"; // npm i gulp-sourcemaps -D
import cleanCss from "gulp-clean-css"; // Сжатие css //npm i gulp-clean-css -D
import webpcss from "gulp-webpcss"; // вывод изображений в формат webp //npm i gulp-webpcss -D
import autoprefixer from "gulp-autoprefixer"; // добавление вендорных префиксов //npm i gulp-autoprefixer -D
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа запросов //npm i gulp-group-css-media-queries -D

const sass = gulpSass(dartSass); // вызываем плагин gulp-sass и передаем в него функцию компиляции dartSass

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(map.init())
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(sass({
        outputStyle: "expanded",
        // includePaths: import('node-normalize-scss').includePaths
      }).on("error", sass.logError)
    )
    .pipe(map.write("."))
    // .pipe(app.gulp.dest(app.path.build.css)) // выгружаем НЕминифицированный css
    // .pipe(groupCssMediaQueries())
    // .pipe(webpcss({
    //     webpClass: ".webp", //добавит класс если будет поддержка webp
    //     noWebpClass: ".no-webp", // добавит класс если не будет поддержки webp
    //   })
    // )
    // .pipe(autoprefixer({
    //     grid: true, // поддержка css grid
    //     overrideBrowserslist: ["last 3 versions"], //добавляет вендорные префиксы для последних 3 версий браузеров
    //     cascade: true,
    //   })
    // )
    .pipe(app.gulp.dest(app.path.build.css)); // выгружаем НЕминифицированный css
  // .pipe(cleanCss())
  // .pipe(
  //   rename({
  //     extname: ".min.css",
  //   })
  // )
  // .pipe(app.gulp.dest(app.path.build.css)) // выгружаем минифицированный css
  // .pipe(app.plugins.browserSync.stream());
};
