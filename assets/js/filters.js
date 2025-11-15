// assets/js/filters.js

document.addEventListener("DOMContentLoaded", function () {
  const sightsGrid = document.getElementById("sights-grid");
  const filterCountry = document.getElementById("filter-country");
  const filterCategory = document.getElementById("filter-category");

  function applySightsFilter() {
    if (!sightsGrid) {
      return;
    }
    const country = filterCountry ? filterCountry.value : "";
    const category = filterCategory ? filterCategory.value : "";
    sightsGrid.querySelectorAll(".card").forEach(function (card) {
      const cardCountry = card.getAttribute("data-country") || "";
      const cardCategory = card.getAttribute("data-category") || "";
      const countryMatch = !country || cardCountry === country;
      const categoryMatch = !category || cardCategory === category;
      card.style.display = countryMatch && categoryMatch ? "" : "none";
    });
  }

  if (filterCountry) {
    filterCountry.addEventListener("change", applySightsFilter);
  }
  if (filterCategory) {
    filterCategory.addEventListener("change", applySightsFilter);
  }

  applySightsFilter();

  const countryGrid = document.getElementById("country-sights-grid");
  const countryCategoryFilter = document.getElementById("country-category-filter");

  function applyCountryFilter() {
    if (!countryGrid || !countryCategoryFilter) {
      return;
    }
    const category = countryCategoryFilter.value;
    countryGrid.querySelectorAll(".card").forEach(function (card) {
      const cardCategory = card.getAttribute("data-category") || "";
      card.style.display = !category || cardCategory === category ? "" : "none";
    });
  }

  if (countryCategoryFilter) {
    countryCategoryFilter.addEventListener("change", applyCountryFilter);
    applyCountryFilter();
  }
});
