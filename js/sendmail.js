const appontmentButton = document.getElementById("submitAppointment");
const inquiryButton = document.getElementById("sendInquiry");

// TODO MAKE FUNCTION FOR SENDING EMAILS ON MAKE APPOINTMENT
//TODO MAKE FUNCTION FOR SENDING ON INQUIRY

function getCurrentDateTime() {
	const now = new Date();

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
	const day = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

const dateField = document.getElementById("date");
dateField.min = getCurrentDateTime();

const form = document.querySelector(".php-email-form");

const appointmentName = document.querySelector(".appointmentName");
const appointmentEmail = document.querySelector(".appointmentEmail");
const appointmentPhone = document.querySelector(".appointmentPhone");
const appointmentDate = document.querySelector(".appointmentDate");
const appointmentAge = document.querySelector(".appointmentAge");
const appointmentMessage = document.querySelector(".appointmentMessage");

function getFormData() {
	if (
		appointmentName.value !== "" &&
		appointmentEmail.value !== "" &&
		appointmentPhone.value !== "" &&
		appointmentDate.value !== "" &&
		appointmentAge.value !== ""
	) {
		return {
			name: appointmentName.value,
			email: appointmentEmail.value,
			phone: appointmentPhone.value,
			date: appointmentDate.value,
			age: appointmentAge.value,
			message: appointmentMessage.value,
		};
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong! Please fill all the fields.",
		});
	}
}

function makeBodyMessage() {
	const data = getFormData();
	const bodyMessage =
		"<strong>Full Name:</strong> " +
		data.name +
		"<br><strong>Email:</strong> " +
		data.email +
		"<br><strong>Phone Number:</strong> " +
		data.phone +
		"<br><strong>Appointment Date:</strong> " +
		data.date +
		"<br><strong>Age:</strong> " +
		data.age +
		"<br><strong>Message:</strong> " +
		data.message;

	sendEmail("info@kmckenya.co.ke", "Appointment", bodyMessage);
}
async function sendEmail(email, subject, body) {
	try {
		const message = await Email.send({
			SecureToken: "b9749664-6cd7-42e4-ac29-36d4337dc1f2",
			To: "katitomedicalcentre@gmail.com",
			From: email,
			Subject: subject,
			Body: body,
		});

		if (message === "OK") {
			Swal.fire({
				icon: "success",
				text: "Message was sent successfully.",
				imageUrl: "../img/logo/logo.png",
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Custom image",
			});
			console.log("Message was sent successfully.");
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong! Message was not sent.",
			});
			console.log("Message was not sent.");
		}
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "An error occurred while sending the email.",
		});
		console.error("Error sending email:", error);
	}
}

function getInquiryData() {
	const inquiryName = document.getElementById("inquiryName");
	const inquiryEmail = document.getElementById("inquiryEmail");
	const inquirySubject = document.getElementById("inquirySubject");
	const inquiryMessage = document.getElementById("inquiryMessage");

	return {
		name: inquiryName.value,
		email: inquiryEmail.value,
		subject: inquirySubject.value,
		message: inquiryMessage.value,
	};

	// inquiryName
	// inquiryEmail
	// inquirySubject
	// inquiryMessage
}

function inquiryBodyMessage() {
	const inquiryData = getInquiryData();
	console.log(inquiryData);
}

inquiryButton.addEventListener("click", (event) => {
	event.preventDefault();
	inquiryBodyMessage();
});

function makeInquiry() {}

appontmentButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	makeBodyMessage();
});
