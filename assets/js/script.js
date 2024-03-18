const $ = document;

$.addEventListener("DOMContentLoaded", () => {
	const form = $.querySelector("form");
	const contactButton = $.querySelector("header button");
	const blackScreen = $.getElementById("black-screen");
	const sectionForm = $.getElementById("contact-form");
	const crossClose = $.querySelector(".form-container > div i");

	contactButton.addEventListener("click", (e) => {
		blackScreen.classList.toggle("hidden");
		sectionForm.classList.toggle("hidden");
	});

	crossClose.addEventListener("click", (e) => {
		blackScreen.classList.toggle("hidden");
		sectionForm.classList.toggle("hidden");
	});

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		console.log($.getElementById("contact-form-fn").value);
		console.log($.getElementById("contact-form-ln").value);
		console.log($.getElementById("contact-form-e").value);
		console.log($.getElementById("contact-form-m").value);

		const data = {
			firstname: $.getElementById("contact-form-fn").value,
			lastname: $.getElementById("contact-form-ln").value,
			email: $.getElementById("contact-form-e").value,
			message: $.getElementById("contact-form-m").value,
		};

		try {
			const response = await axios.post(
				"https://site--tripadvisor-backend-exercise--spyfkvx5gdbh.code.run/form",
				// "http://localhost:3000/form",
				data
			);

			console.log({
				status: response.status,
				message: response.data,
			});
		} catch (error) {
			console.error({
				// status: error.response.status,
				// message: error.response.data.message,
				error,
			});
		}
	});
});
