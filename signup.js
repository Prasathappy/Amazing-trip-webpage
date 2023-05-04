const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const mobileNoInput = document.getElementById('mobile-no');
const confirmMobileNoInput = document.getElementById('confirm-mobile-no');
const addressInput = document.getElementById('address');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (!validateName()) {
		nameInput.classList.add('error');
	} else {
		nameInput.classList.remove('error');
	}

	if (!validateEmail()) {
		emailInput.classList.add('error');
	} else {
		emailInput.classList.remove('error');
	}

	if (!validatePassword()) {
		passwordInput.classList.add('error