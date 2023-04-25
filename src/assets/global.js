let cursorElement = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  cursorElement.style.left = `${event.pageX - 12}px`;
  cursorElement.style.top = `${event.pageY - 12}px`;
});

let navbarElements = document.querySelectorAll(".navbar a");

for (element of navbarElements) {
  if (window.location.href == element.href) {
    element.classList.add("active");
  }
}
