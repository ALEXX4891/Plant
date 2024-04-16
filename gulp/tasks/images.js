import webp from "gulp-webp"; // npm i gulp-webp -D // плагин для форматирования изображений в формат webp
import imagemin from 'gulp-imagemin'; // npm i gulp-imagemin -D // плагин для сжатия изображений

export const images = () => {
  return app.gulp.src(app.path.src.images) // выбираем файлы
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>" // требуется включить уведомления в windows!!!
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images)) // проверяем, были ли изменения в файлах
    .pipe(webp()) // форматируем изображения в формате webp
    .pipe(app.gulp.dest(app.path.build.images)) // путь куда скопируем файлы
    .pipe(app.gulp.src(app.path.src.images)) // выбираем файлы
    .pipe(app.plugins.newer(app.path.build.images)) // проверяем, были ли изменения в файлах
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 3, // 0 to 7
    })) // сжимаем изображения
    .pipe(app.gulp.dest(app.path.build.images)) // путь куда скопируем файлы
    .pipe(app.gulp.src(app.path.src.svg)) // выбираем svg
    .pipe(app.gulp.dest(app.path.build.images)) // путь куда скопируем svg
    .pipe(app.plugins.browserSync.stream()); // обновляем браузер
}