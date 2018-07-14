const toggleBox = document.querySelector('#toggleBox');
const hidingFirstBox = document.querySelector('.hiding-first');
hidingFirstBox.style.display = 'none';

toggleBox.addEventListener('click', () => {
	if (hidingFirstBox.style.display == 'none') {
		hidingFirstBox.style.display = '';
		toggleBox.textContent = 'Hide it up';
	} else {
		hidingFirstBox.style.display = 'none';
		toggleBox.textContent = 'Show more';
	}
});