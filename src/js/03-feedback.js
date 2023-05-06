import { throttle } from "lodash";
//Напиши скрипт, який буде зберігати значення полів у локальне сховище, 
//kоли користувач щось друкує.

const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
// const button = document.querySelector('button');
const KEY_SRORAGE_INPUT = "feedback-form-state";


// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт 
// з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
form.addEventListener('input', saveCurrentValue);
let feedbackUser;
let feedbackUserJSON;
function saveCurrentValue(evt) {
    if (inputEmail.value !== "" && textareaMessage.value !== "") {
        feedbackUser = {
            email: inputEmail.value,
            message: textareaMessage.value
        };
        feedbackUserJSON = JSON.stringify(feedbackUser);
        localStorage.setItem(KEY_SRORAGE_INPUT, feedbackUserJSON);
    }
};


// 2.   Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
// заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.

const getFeedbackUser = localStorage.getItem(KEY_SRORAGE_INPUT);
// console.log(getFeedbackUser);
const feedbackUserParseJSON = JSON.parse(getFeedbackUser);
if (getFeedbackUser !== '') {
    inputEmail.value = feedbackUserParseJSON.email;
    textareaMessage.value = feedbackUserParseJSON.message;
}
// console.log(feedbackUserParseJSON);


// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт 
// з полями email, message та їхніми поточними значеннями.

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (inputEmail.value === '' || textareaMessage.value === '') {
        return alert('Please fill in all fields!');

    }
    console.log(feedbackUserParseJSON);
    localStorage.removeItem(KEY_SRORAGE_INPUT);
    inputEmail.value = '';
    textareaMessage.value = '';
};


// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.