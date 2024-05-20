// TODO MAKE FUNCTION FOR SENDING EMAILS ON MAKE APPOINTMENT
//TODO MAKE FUNCTION FOR SENDING ON INQUIRY

const form = document.querySelector(".php-email-form");

const appointmentName = document.querySelector(".appointmentName");
const appointmentEmail = document.querySelector(".appointmentEmail");
const appointmentPhone = document.querySelector(".appointmentPhone");
const appointmentDate = document.querySelector(".appointmentDate");
const appointmentAge = document.querySelector(".appointmentAge");
const appointmentDoctor = document.querySelector(".appointmentDoctor");
const appointmentMessage = document.querySelector(".appointmentMessage");

function getFormData() {
	const data = {
		name: appointmentName.value,
		email: appointmentEmail.value,
		phone: appointmentPhone.value,
	};
	console.log(data);
}

function sendEmail(email, subject, body) {
	Email.send({
		SecureToken: "b9749664-6cd7-42e4-ac29-36d4337dc1f2",
		To: "info@kmckenya.co.ke",
		From: email,
		Subject: subject,
		Body: body,
	}).then((message) => {
		if (message === "OK") {
			console.log("Message was sent successfully.");
		} else {
			console.log("Message was not sent.");
		}
		// alert(message);
		// console.log(message);
	});
}
