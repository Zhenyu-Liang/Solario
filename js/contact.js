let contactForm = document.getElementById("contact-form");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userMessage = document.getElementById("user-message");


contactForm.onsubmit = () => {
	let formCompleted = (userName.value.trim() && userEmail.value.trim() && userMessage.value.trim())
	if (formCompleted) {
		alert("Sent Successfully!");
		return true;
	} 
	
	return false;
}