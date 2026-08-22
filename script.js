const gate = document.getElementById("briarGate");
const enter = document.getElementById("enterBriar");
const world = document.getElementById("briarWorld");

if (gate && world) {
  world.setAttribute("aria-hidden", "true");
}

if (gate && enter && world) {
  enter.addEventListener("click", () => {
    gate.classList.add("open");
    document.body.classList.remove("gate-locked");
    world.classList.add("entered");
    world.setAttribute("aria-hidden", "false");
    window.setTimeout(() => gate.setAttribute("hidden", ""), 1100);
  });
}

const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* Keep Pawdrey artwork on the homepage hero only. Gate visuals live entirely in CSS. */
const heroArt = document.querySelector(".hero-art");
if (heroArt) {
  heroArt.style.backgroundImage = 'url("assets/pawdrey-hero.png")';
}

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}, 1200);
