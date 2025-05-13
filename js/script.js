// 🍔 Mobil menyuni ochuvchi funksiyamiz
function hamburg() {
	const dropdown = document.querySelector('.dropdown');
	dropdown.style.transform = 'translateY(0px)';
}

// ❌ Mobil menyuni yopuvchi funksiyamiz
function cancel() {
	const dropdown = document.querySelector('.dropdown');
	dropdown.style.transform = 'translateY(-500px)'; // Yuqoriga chiqib, yashiriladi
}

// ⌨️ ESC tugmasi bilan menyuni yopish
document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		cancel();
	}
});

// 🖱️ Link bosilganda menyuni yopish
document.querySelectorAll('.dropdown .link').forEach(link => {
	link.addEventListener('click', () => {
		cancel(); // menyuni yopadi
	});
});

// 🖋 Typewriter effekt uchun so'zlar ro'yxati
const texts = [` SMM MARKETER`, 'BRANDFACE', ' BLOGGER'];

// 🕓 Harflar orasidagi vaqt (ms)
let speed = 100; // yozish tezligi

// ⌨️ Yozuv chiqadigan elementni tanlab olamiz
const textElement = document.querySelector('.typewriter-text');

// 📌 Qaysi so'z yozilayotgani va qaysi harfda ekanligimiz
let textIndex = 0;
let characterIndex = 0;

// 🧠 So'zni harfma-harf chiqaruvchi funksiya
function typeWriter() {
	if (characterIndex < texts[textIndex].length) {
		// Har bir harfni qo‘shish
		textElement.innerHTML += texts[textIndex].charAt(characterIndex);
		characterIndex++;

		// Keyingi harfni chiqarish uchun kutish
		setTimeout(typeWriter, speed);
	} else {
		// So'z tugaganda – 1 soniya kutib o‘chirish boshlanadi
		setTimeout(eraseText, 1000);
	}
}

// 🔙 Harfma-harf o‘chirish funksiyasi
function eraseText() {
	if (textElement.innerHTML.length > 0) {
		textElement.innerHTML = textElement.innerHTML.slice(0, -1);

		// Harfni o‘chirish oraliq vaqti
		setTimeout(eraseText, 50);
	} else {
		// So'z o‘chirilgach – keyingi so‘zga o‘tiladi
		textIndex = (textIndex + 1) % texts.length;
		characterIndex = 0;

		// Keyingi so‘zni yozishdan oldin yarim soniya kutish
		setTimeout(typeWriter, 500);
	}
}

// 📌 Sahifa yuklanganda Typewriter boshlansin
window.onload = typeWriter;

document.addEventListener('DOMContentLoaded', function () {
	// Barcha asosiy rasm (mainImage) larni olish
	const mainImages = document.querySelectorAll('.mainImage');

	mainImages.forEach((image, index) => {
		const modalId = image.getAttribute('data-gallery');
		const modal = document.getElementById(modalId);
		const closeBtn = modal.querySelector('.close');

		// Bosganda modalni ko‘rsatish
		image.addEventListener('click', function () {
			modal.style.display = 'block';
		});

		// Yopish tugmasi
		closeBtn.addEventListener('click', function () {
			modal.style.display = 'none';
		});

		// Modal tashqarisiga bosganda yopish
		window.addEventListener('click', function (event) {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		});

		// Har bir kichik rasmga (thumb) zoom qilish
		const thumbs = modal.querySelectorAll('.thumb');
		const zoomModal = document.getElementById('zoomModal');
		const zoomedImage = document.getElementById('zoomedImage');
		const closeZoomBtn = document.querySelector('.close-zoom');

		thumbs.forEach(thumb => {
			thumb.addEventListener('click', function () {
				zoomedImage.src = this.src;
				zoomModal.style.display = 'block';
			});
		});

		// Zoom modalni yopish
		closeZoomBtn.addEventListener('click', function () {
			zoomModal.style.display = 'none';
		});

		// Zoom tashqarisiga bosganda yopish
		window.addEventListener('click', function (event) {
			if (event.target === zoomModal) {
				zoomModal.style.display = 'none';
			}
		});
	});
});

document.getElementById('showMoreBtn').addEventListener('click', function () {
	const moreInfo = document.getElementById('moreInfo');

	if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
		// Oynani ko‘rsatish
		moreInfo.style.display = 'block';
		this.textContent = 'Close the window.';
	} else {
		// Oynani yashirish
		moreInfo.style.display = 'none';
		this.textContent = 'Read more';
	}
});

document.getElementById('year').textContent = new Date().getFullYear();
const showMoreBtn = document.getElementById('showMoreBtn');
const moreInfo = document.getElementById('moreInfo');

showMoreBtn.addEventListener('click', function () {
	moreInfo.classList.toggle('show');
	this.textContent = moreInfo.classList.contains('show') ? 'Oynani yoping.' : 'Batafsil';
});

document.querySelector('.section-8__btn a').addEventListener('click', function (e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const leftArrow = document.querySelector('.destination__nav span:first-child');
	const rightArrow = document.querySelector('.destination__nav span:last-child');
	const grid = document.querySelector('.destination__grid');

	// Scroll functionality for navigation arrows
	leftArrow.addEventListener('click', () => {
		grid.scrollBy({
			left: -300, // Adjust the scroll distance
			behavior: 'smooth',
		});
	});

	rightArrow.addEventListener('click', () => {
		grid.scrollBy({
			left: 300, // Adjust the scroll distance
			behavior: 'smooth',
		});
	});

	// Handle hover on videos to play with sound
	const videos = document.querySelectorAll('.destination__card video');

	videos.forEach(video => {
		// On mouse enter, play the video and unmute it
		video.addEventListener('mouseenter', () => {
			video.muted = false; // Unmute the video
			video.currentTime = 0; // Reset video to the start
			video.play(); // Play the video
		});

		// On mouse leave, pause the video and mute it
		video.addEventListener('mouseleave', () => {
			video.pause(); // Pause the video
			video.muted = true; // Mute the video
			video.currentTime = 0; // Reset video to the start
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Hammasi uchun hover effektini qo'llash
	const videos = document.querySelectorAll('.destination__card video');

	videos.forEach(video => {
		// Hover holatida videoni o'ynatish va ovozni faollashtirish
		video.addEventListener('mouseenter', () => {
			video.play(); // Sichqoncha video ustiga olib borilganda video o'ynaydi
			video.muted = false; // Ovozni yoqish
		});

		// Hoverdan chiqqanda videoni to'xtatish va ovozni o'chirish
		video.addEventListener('mouseleave', () => {
			video.pause(); // Sichqoncha video ustidan ketganda video to'xtaydi
			video.currentTime = 0; // Video boshlanishiga qaytadi
			video.muted = true; // Ovozini o'chirish
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const readMoreButtons = document.querySelectorAll('.read-more');

	readMoreButtons.forEach(button => {
		button.addEventListener('click', function (event) {
			event.preventDefault(); // Prevent the default anchor link behavior
			alert("Batafsil ma'lumotni o'qish uchun ushbu havolaga bosish kerak.");
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const rows = document.querySelectorAll('.pricing table tbody tr');
	rows.forEach(row => {
		row.addEventListener('mouseover', () => {
			row.style.backgroundColor = '#e8eaf6';
		});
		row.addEventListener('mouseout', () => {
			row.style.backgroundColor = '';
		});
	});
});
