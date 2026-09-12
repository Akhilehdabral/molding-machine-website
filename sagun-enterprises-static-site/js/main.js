document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 600,
    once: true,
    offset: 60,
    easing: "ease-out-cubic"
  });

  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic"
    },
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"]
      }
    }
  });

  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.querySelector(".navbar-collapse");
      if (nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
