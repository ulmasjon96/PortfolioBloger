// 🍔 Mobil menyuni ochuvchi funksiyamiz
function hamburg() {
	const dropdown = document.querySelector('.dropdown');
	dropdown.style.transform = 'translateY(0px)'; // Pastga tushuriladi (ko'rinadi)
}

// ❌ Mobil menyuni yopuvchi funksiyamiz
function cancel() {
	const dropdown = document.querySelector('.dropdown');
	dropdown.style.transform = 'translateY(-500px)'; // Yuqoriga chiqib, yashiriladi
}

// 🖋 Typewriter effekt uchun so'zlar ro'yxati
const texts = [` SMM MARKETER`, ' PHOTOGRAPHER', ' BLOGGER'];

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
