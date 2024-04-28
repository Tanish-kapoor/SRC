// getting HTML elements
const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// js code to make draggable nav
function onDrag({ movementY }) {
  //movementY gets mouse vertical value
  const navStyle = window.getComputedStyle(nav), //getting all css style of nav
    navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
    navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
    windHeight = window.innerHeight; // getting window height

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if (navTop > windHeight - navHeight) {
    nav.style.top = `${windHeight - navHeight}px`;
  }
}
