let navbarElements = document.querySelectorAll('.navbar a');

for (element of navbarElements) {
	if (window.location.href == element.href) {
		element.classList.add("active");
	}
}