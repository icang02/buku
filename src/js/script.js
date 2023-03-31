const btn = document.querySelector("#menu-btn");
const navMobile = document.querySelector("#menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  navMobile.classList.toggle("flex");
  navMobile.classList.toggle("hidden");
});
