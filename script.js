document.addEventListener('DOMContentLoaded', function () {
	const readMoreButtons = document.querySelectorAll('.read-more');

	readMoreButtons.forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault(); // Prevent the default anchor link behavior
			alert("Batafsil ma'lumotni o'qish uchun ushbu havolaga bosish kerak.");
		});
	});
});
