import throttle from 'lodash/throttle';

const refs = {
    feedBackForm: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name=email]'),
    msgArea: document.querySelector('textarea[name=message]'),
    submitBtn: document.querySelector('button[type=submit]'),
};

const feedBack = {
    email: "",
    msg: "",
};

refs.feedBackForm.addEventListener('input', throttle(saveFormData, 500));
refs.feedBackForm.addEventListener('submit', onFormSubmit);

populateForm();

function populateForm() {
    if (localStorage.getItem('feedback')) {
        const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
        refs.emailInput.value = savedFeedback.email;
        refs.msgArea.value = savedFeedback.msg;
    }
};

function saveFormData() {
    feedBack.email = refs.emailInput.value;
    feedBack.msg = refs.msgArea.value;
    localStorage.setItem('feedback', JSON.stringify({ email: `${feedBack.email}`, msg: `${feedBack.msg}` }));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.table(feedBack);
    refs.emailInput.value = "";
    refs.msgArea.value = "";
    saveFormData()
};
