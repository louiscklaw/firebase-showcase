console.log("helloworld");

function resizeSearchBox() {
  if (window.scrollY > 100) {
    document.querySelector("#search-box").classList.remove("col-12");
    document.querySelector("#search-box").classList.add("col-8");
  } else {
    document.querySelector("#search-box").classList.add("col-12");
    document.querySelector("#search-box").classList.remove("col-8");
  }
}

function hideHeaderLinks() {
  if (window.scrollY > 100) {
    document.querySelector(".header-links").classList.add("header-links-hide");
  } else {
    document.querySelector(".header-links").classList.remove("header-links-hide");
  }
}

function resizeHeaderSearchBox() {
  if (window.scrollY > 100) {
    document.querySelector(".search-box-container").classList.add("search-box-container-resize");
  } else {
    document.querySelector(".search-box-container").classList.remove("search-box-container-resize");
  }
}

function resizeHeaderLinks() {
  if (window.scrollY > 100) {
    document.querySelector(".links-container").classList.add("links-container-resize");
  } else {
    document.querySelector(".links-container").classList.remove("links-container-resize");
  }
}

function resizeHeaderContainer() {
  if (window.scrollY > 100) {
    document.querySelector(".header-container").classList.add("header-container-resize");
  } else {
    document.querySelector(".header-container").classList.remove("header-container-resize");
  }
}

function resizeHeaderCompanyLogo() {
  if (window.scrollY > 100) {
    document.querySelector(".header-company-logo").classList.add("header-company-logo-resize");
  } else {
    document.querySelector(".header-company-logo").classList.remove("header-company-logo-resize");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  resizeHeaderSearchBox();
  resizeHeaderLinks();
  resizeHeaderContainer();
  resizeHeaderCompanyLogo();
  document.addEventListener("scroll", () => resizeHeaderSearchBox());
  document.addEventListener("scroll", () => resizeHeaderLinks());
  document.addEventListener("scroll", () => resizeHeaderContainer());
  document.addEventListener("scroll", () => resizeHeaderCompanyLogo());
});
