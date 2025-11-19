/* ===============================
   FitEdge — Global JavaScript
   =============================== */

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Auto Year in Footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* Smooth scroll (optional but nice)
----------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
