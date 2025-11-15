// assets/js/lightbox.js

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    return;
  }

  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector("[data-lightbox-close]");

  document.querySelectorAll("[data-lightbox-src]").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      const src = thumb.getAttribute("data-lightbox-src");
      const caption = thumb.getAttribute("data-lightbox-caption") || "";
      imgEl.src = src;
      imgEl.alt = thumb.alt || "";
      captionEl.textContent = caption;
      lightbox.classList.add("lightbox--open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("lightbox--open");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
});
