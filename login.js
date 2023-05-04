const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#submit');

loginBtn.addEventListener('click', function(event) {
  event.preventDefault(); 

  if (username.value === 'prasath' && password.value === 'sureappy') {
    window.location.href = 'project.html';
  } else {
    const form = document.querySelector('form');
    form.innerHTML = 'Username or password incorrect. Please try again.';
  }
});
username.addEventListener('input', clearErrorMessage);
password.addEventListener('input', clearErrorMessage);

function clearErrorMessage() {
  const errorMessage = document.querySelector('#error-message');
  errorMessage.innerHTML = '';
}