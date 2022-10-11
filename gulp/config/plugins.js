import replace from "gulp-replace"; // пошук і заміна
import plumber from "gulp-plumber"; // обробник помилок
import notify from "gulp-notify"; // повідомлення-підказки
import browserSync from "browser-sync"; // локальний сервер
import newer from "gulp-newer"; // перевірка оновлень
import ifPlugin from "gulp-if"; // умовні ролзгалуження

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
};
