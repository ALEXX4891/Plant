// получаем имя папки проекта:
import * as nodePath from 'path'; //импортируем модуль path
const rootFolder = nodePath.basename(nodePath.resolve()); // получаем имя папки проекта

const buildFolder = './dist'; // путь к папке с результатом
const srcFolder = './src'; // путь к папке с исходниками

export const path = { // объект с путями к файлам и папкам
  build: {
    files: `${buildFolder}/files/`,
    // js: `${buildFolder}/js/`,
    // css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    // images: `${buildFolder}/img/`,
    // fonts: `${buildFolder}/fonts/`,
    // svgicons: `${srcFolder}/svgicons/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    // js: `${srcFolder}/js/app.js`,
    // images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    // svg: `${srcFolder}/img/**/*.svg`,
    // scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    // svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    // js: `${srcFolder}/js/**/*.js`, //следить за JS файлами в папке js
    // scss: `${srcFolder}/scss/**/*.scss`, //следить за SCSS файлами в папке scss
    html: `${srcFolder}/**/*.html`, //следить за HTML файлами в папке src
    // images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, //следить за изображениями
    files: `${srcFolder}/files/**/*.*`, //следить за файлами
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
}

