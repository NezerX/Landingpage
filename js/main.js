var burgerWrapper = document.getElementsByClassName('burger-wrapper')[0];
var subMenu = document.getElementsByClassName('sub-menu')[0];

burgerWrapper.addEventListener('click', function() {
	burgerWrapper.classList.toggle('active-burger');
	subMenu.classList.toggle('active-sub-menu');
});