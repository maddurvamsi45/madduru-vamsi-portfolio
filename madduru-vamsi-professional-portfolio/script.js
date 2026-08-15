const nav = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

document.querySelector(".copy-btn")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const email = button.dataset.copy;
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = "Copied ✓";
    setTimeout(() => button.textContent = "Copy Email", 1800);
  } catch {
    button.textContent = email;
  }
});
