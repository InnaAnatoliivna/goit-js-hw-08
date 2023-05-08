1. create object without construction if {}
    // feedbackUser = {};
    // feedbackUser.email = inputEmail.value;
    // feedbackUser.message = textareaMessage.value;

    // feedbackUserJSON = JSON.stringify(feedbackUser);
    // localStorage.setItem(KEY_SRORAGE_INPUT, feedbackUserJSON);


3. feedback
// try {
//     feedbackUserParseJSON = JSON.parse(getFeedbackUser);
//     if (getFeedbackUser !== '') {
//         inputEmail.value = feedbackUserParseJSON.email;
//         textareaMessage.value = feedbackUserParseJSON.message;
//     }
// } catch(error) {
//     console.error(error.name);
// }
or
// if (getFeedbackUser !== '') {
//     const feedbackUserParseJSON = JSON.parse(getFeedbackUser);
//     inputEmail.value = feedbackUserParseJSON.email;
//     textareaMessage.value = feedbackUserParseJSON.message;
// console.log(feedbackUserParseJSON);}