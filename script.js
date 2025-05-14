const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function activateNavLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNavLink);


document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      alert(`${card.querySelector(".project-title").textContent} project selected!`);
    }
  });
  card.addEventListener("click", () => {
    const link = card.querySelector(".project-link");
    if (link) {
      window.open(link.href, "_blank");
    }
  });
});

// Smooth scroll to section
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const sectionRect = targetSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = sectionRect.top + scrollTop;
      const offset = sectionTop - (window.innerHeight / 2) + (sectionRect.height / 2);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});
