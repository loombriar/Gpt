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
  heroArt.style.backgroundImage = 'url("assets/pawdrey-mushroom-entrance.svg?v=20260823-clock-path-1")';
}

const pawdreySecret = document.getElementById("pawdreySecret");
const openPawdreySecret = document.getElementById("openPawdreySecret");
const closePawdreySecret = document.getElementById("closePawdreySecret");
let pawdreySecretReturnFocus = null;

function showPawdreySecret() {
  if (!pawdreySecret) return;
  pawdreySecretReturnFocus = document.activeElement;
  pawdreySecret.hidden = false;
  document.body.classList.add("pawdrey-secret-open");
  closePawdreySecret?.focus();
}

function hidePawdreySecret() {
  if (!pawdreySecret) return;
  pawdreySecret.hidden = true;
  document.body.classList.remove("pawdrey-secret-open");
  pawdreySecretReturnFocus?.focus();
}

openPawdreySecret?.addEventListener("click", showPawdreySecret);
closePawdreySecret?.addEventListener("click", hidePawdreySecret);
pawdreySecret?.querySelector(".pawdrey-secret-backdrop")?.addEventListener("click", hidePawdreySecret);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && pawdreySecret && !pawdreySecret.hidden) hidePawdreySecret();
});

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}, 1200);
