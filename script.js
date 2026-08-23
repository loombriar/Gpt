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

/* Render the real Succulent Cupcake photograph as an actual image element.
   This bypasses the older CSS background/pseudo-element rules that could hide it. */
const cupcakeCard = document.querySelector("#cupcakes .cupcake-card");
if (cupcakeCard) {
  cupcakeCard.innerHTML = "";
  cupcakeCard.style.setProperty("padding", "0", "important");
  cupcakeCard.style.setProperty("background", "#07110c", "important");
  cupcakeCard.style.setProperty("display", "block", "important");

  const cupcakePhoto = document.createElement("img");
  cupcakePhoto.src = "assets/succulent-cupcake-garden.jpg?v=20260823-direct-2";
  cupcakePhoto.alt = "Assorted live succulent and cactus plants arranged in decorative cupcake-style planters";
  cupcakePhoto.className = "cupcake-photo-direct";
  cupcakePhoto.style.setProperty("display", "block", "important");
  cupcakePhoto.style.setProperty("visibility", "visible", "important");
  cupcakePhoto.style.setProperty("opacity", "1", "important");
  cupcakePhoto.style.setProperty("position", "absolute", "important");
  cupcakePhoto.style.setProperty("inset", "0", "important");
  cupcakePhoto.style.setProperty("width", "100%", "important");
  cupcakePhoto.style.setProperty("height", "100%", "important");
  cupcakePhoto.style.setProperty("max-height", "none", "important");
  cupcakePhoto.style.setProperty("object-fit", "cover", "important");
  cupcakePhoto.style.setProperty("object-position", "center", "important");
  cupcakePhoto.style.setProperty("z-index", "2", "important");
  cupcakeCard.appendChild(cupcakePhoto);
}

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}, 1200);
