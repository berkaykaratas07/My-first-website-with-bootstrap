// for navbar javascript codes
window.addEventListener("DOMContentLoaded", (event) => {
  var navbarMobile = function () {
    const nCollapsible = document.body.querySelector("#mainNavbar");
    if (!nCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      nCollapsible.classList.remove("navbar-mobile");
    } else {
      nCollapsible.classList.add("navbar-mobile");
    }
  };
  navbarMobile();
  document.addEventListener("scroll", navbarMobile);
  const myNavbar = document.body.querySelector("#mainNavbar");
  if (myNavbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNavbar",
      offset: 74,
    });
  }
});
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
  BtnCanvas[i].addEventListener("click", function () {
    document.querySelector('[data-bs-dismiss="offcanvas"]').click();
  });
}
