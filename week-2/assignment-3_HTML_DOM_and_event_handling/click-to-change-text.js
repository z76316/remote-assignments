let headlineContent = document.querySelector('.headline');
let taglineContent = document.querySelector('.tagline');

headlineContent.addEventListener('click', () => {
	headlineContent.textContent = "Have a Good Time!";
	taglineContent.textContent = "May the Force be with you.";
});

