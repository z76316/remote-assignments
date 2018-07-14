const menuTrigger = document.querySelector('.menu-icon');
const floatMenu = document.querySelector('.mobile-float-menu');
const xOfMenu = document.querySelector('.x');
floatMenu.style.display = 'none';


menuTrigger.addEventListener('click', () => {
	floatMenu.style.display = '';
});

xOfMenu.addEventListener('click', () => {
	floatMenu.style.display = 'none';
});