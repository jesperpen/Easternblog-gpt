// assets/js/main.js

document.addEventListener("click", function (event) {
  const trigger = event.target.closest("[data-nav-trigger]");
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  if (trigger) {
    const key = trigger.getAttribute("data-nav-trigger");
    dropdowns.forEach(function (menu) {
      if (menu.getAttribute("data-nav-dropdown") === key) {
        menu.classList.toggle("nav-dropdown--open");
      } else {
        menu.classList.remove("nav-dropdown--open");
      }
    });
  } else {
    if (!event.target.closest(".nav-main__group")) {
      dropdowns.forEach(function (menu) {
        menu.classList.remove("nav-dropdown--open");
      });
    }
  }
});
