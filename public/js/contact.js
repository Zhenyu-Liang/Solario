let contactForm = document.getElementById("contact-form");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userMessage = document.getElementById("user-message");

contactForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	if(userName.value.trim() && userEmail.value.trim() && userMessage.value.trim()) {
		db.collection("messages").add({
			name: userName.value,
			email: userEmail.value,
			message: userMessage.value
		});

		userName.value = "";
		userEmail.value = "";
		userMessage.value = "";

	}
})