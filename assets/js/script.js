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

		const data = {
			firstname: $.getElementById("contact-form-fn").value,
			lastname: $.getElementById("contact-form-ln").value,
			email: $.getElementById("contact-form-e").value,
			message: $.getElementById("contact-form-m").value,
		};

		try {
			const response = await axios.post(
				process.env.SERVEUR_ADDRESS + "/form",
				data
			);

			console.log({
				status: response.status,
				message: response.data,
			});
		} catch (error) {
			console.error({
				status: error.response.status,
				message: error.response.data.message,
			});
		}
	});
});
