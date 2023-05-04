function submitForm(event) {
	event.preventDefault();

	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	// Do something with the form data, like sending it to a server or displaying it on the page
	console.log("Name: " + name);
	console.log("Email: " + email);
	console.log("Message: " + message);

	// Show a confirmation message to the user
	alert("Thank you for contacting us!");
}