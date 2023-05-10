import { throttle } from "lodash";
//Напиши скрипт, який буде зберігати значення полів у локальне сховище, 
//kоли користувач щось друкує.

const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const KEY_STORAGE_INPUT = "feedback-form-state";

form.addEventListener('input', throttle(saveCurrentValue, 500));

const feedbackUser = {};

getDateFeedback();

function getDateFeedback() {
    const getFeedbackUser = localStorage.getItem(KEY_STORAGE_INPUT);
    const feedbackUserParseJSON = JSON.parse(getFeedbackUser);
    if (getFeedbackUser) {
        inputEmail.value = feedbackUserParseJSON.email;
        textareaMessage.value = feedbackUserParseJSON.message;
    };
}

function saveCurrentValue(evt) {
    if (inputEmail.value !== "" || textareaMessage.value !== "") {
        feedbackUser.email = inputEmail.value;
        feedbackUser.message = textareaMessage.value;
        const feedbackUserJSON = JSON.stringify(feedbackUser);

        localStorage.setItem(KEY_STORAGE_INPUT, feedbackUserJSON);
    }
};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (inputEmail.value === '' || textareaMessage.value === '') {
        return alert('Please fill in all fields!');
    } else {
        showObjectfeedback();
        inputEmail.value = '';
        textareaMessage.value = '';
        localStorage.removeItem(KEY_STORAGE_INPUT);
    }
};
function showObjectfeedback() {
    const checkfeedbackUser = localStorage.getItem(KEY_STORAGE_INPUT);
    const feedbackParseJSON = JSON.parse(checkfeedbackUser);
    if (checkfeedbackUser) {
        console.log(feedbackParseJSON);
    }
}

// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт 
// з полями email і message, у яких зберігай поточні значення полів форми.
// 2.   Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
// заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт 
// з полями email, message та їхніми поточними значеннями.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
