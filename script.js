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
