import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

// form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const getData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(getData);
if (getData) {
  input.value = parsedData.email;
  textarea.value = parsedData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  console.log(parsedData);

  form.reset();
});
