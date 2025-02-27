document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("bg-white", "shadow-md", "py-4");
      header.classList.remove("py-5");
    } else {
      header.classList.add("py-5");
      header.classList.remove("bg-white", "shadow-md", "py-4");
    }
  });
});
