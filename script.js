const gate = document.getElementById("briarGate");
const enter = document.getElementById("enterBriar");
if (gate && enter) {
  enter.addEventListener("click", () => {
    gate.classList.add("open");
    document.body.classList.remove("gate-locked");
    setTimeout(() => gate.setAttribute("hidden",""), 1050);
  });
}
const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

// IMPORTANT: use the real Pawdrey artwork for the entrance and hero, not the old website mockup image.
const heroOverride = document.createElement("style");
heroOverride.textContent = `
  .gate-art{
    background-image:linear-gradient(rgba(0,0,0,.18),rgba(0,0,0,.50)),url("assets/pawdrey-hero.png")!important;
    background-position:center 24%!important;
    background-size:cover!important;
  }
  .hero-art{
    background-image:url("assets/pawdrey-hero.png")!important;
    background-position:center 20%!important;
    background-size:cover!important;
  }
  @media (max-width:980px){
    .hero-art{background-position:center 15%!important;}
  }
  @media (max-width:640px){
    .hero-art{background-position:center 10%!important;}
  }
`;
document.head.appendChild(heroOverride);
