import {throttle} from "lodash";
import Player from "@vimeo/player";
// Напиши скрипт, який буде зберігати поточний час відтворення 
// відео у локальне сховище і, після перезавантаження сторінки,
// продовжувати відтворювати відео з цього часу.


const KEY_SAVE_CURRENT_TIME = 'videoplayer-current-time'; //key for localStorage

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// Ініціалізуй плеєр у файлі скрипта як це описано в секції
// pre - existing player, але враховуй, що у тебе плеєр доданий 
// як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати 
// подію timeupdate - оновлення часу відтворення.
// Під час перезавантаження сторінки скористайся 
// методом setCurrentTime() з метою відновлення відтворення зі 
// збереженої позиції.

player.on('timeupdate', throttle(videoTimeUpDate, 1000));

function videoTimeUpDate(data) {
    localStorage.setItem(KEY_SAVE_CURRENT_TIME, data.seconds);
}

const savedCurrentTime = localStorage.getItem(KEY_SAVE_CURRENT_TIME);
// console.log(savedCurrentTime)

if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
}
