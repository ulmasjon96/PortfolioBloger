// Get the "Show More" and "Hide More" buttons
const showMoreBtn = document.getElementById('showMoreBtn');
const hideMoreBtn = document.getElementById('hideMoreBtn');

// Get the section that contains the additional information
const moreInfo = document.getElementById('moreInfo');

// When the "Show More" button is clicked, show the additional information
showMoreBtn.addEventListener('click', function () {
	moreInfo.style.display = 'block';
	showMoreBtn.style.display = 'none'; // Hide the "Show More" button
});

// When the "Hide More" button is clicked, hide the additional information
hideMoreBtn.addEventListener('click', function () {
	moreInfo.style.display = 'none';
	showMoreBtn.style.display = 'inline-block'; // Show the "Show More" button again
});
