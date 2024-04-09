const menuBtn = document.querySelector(".menu-icon");
const header = document.querySelector("header");
const menuList = document.querySelector(".nav-list");
const headerText = document.querySelector("h1");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("layout");
  menuList.classList.toggle("active");
  headerText.classList.toggle("hide");
  if (header.classList.contains("layout")) {
    menuBtn.src = "./images/icon-close.svg";
  } else {
    menuBtn.src = "./images/icon-hamburger.svg";
  }
});
