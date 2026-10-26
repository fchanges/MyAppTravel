const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#container-header ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
