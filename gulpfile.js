// импортируем все необходимые библиотеки:
import gulp from 'gulp'; //импортируем основной модуль gulp //npm i gulp -D
import { path } from './gulp/config/path.js'; //импортируем пути

//передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
}

//импортируем задачи
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, dev);
}
// gulp.task('watch', function() {
//   gulp.watch(path.watch.files, copy);
// })

// построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);

// выполнение задач по умолчанию
gulp.task('default', dev);