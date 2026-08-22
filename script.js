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

// Final clock/layout pass. This runs after the stylesheet links, so these overrides win.
const finalClockOverride = document.createElement("style");
finalClockOverride.textContent = `
  .briar-clock-section{
    min-height:0!important;
    height:auto!important;
    padding:84px clamp(22px,6vw,92px) 70px!important;
  }
  .briar-clock-section>.section-heading{margin-bottom:18px!important;}
  .briar-clock{
    transform:scale(1.14)!important;
    transform-origin:top center!important;
    margin-top:26px!important;
    margin-bottom:86px!important;
  }
  .clock-house{
    box-shadow:inset 0 0 0 3px rgba(24,13,7,.68),inset 0 0 60px rgba(0,0,0,.52),0 18px 42px rgba(0,0,0,.55)!important;
  }
  .clock-face{
    background:
      radial-gradient(circle at 50% 50%,transparent 0 61%,rgba(78,52,28,.13) 62% 64%,transparent 65%),
      radial-gradient(circle at 48% 42%,#f2e5c0 0%,#dcc89d 58%,#af936a 100%)!important;
  }
  .clock-button{font-size:.94rem!important;letter-spacing:.04em!important;}
  .ferret-faucet{margin-top:18px!important;}

  /* Never leave invisible reveal sections occupying giant blank areas. */
  .journal-section .reveal,.contact-section .reveal{
    opacity:1!important;
    transform:none!important;
  }
  .journal-section,.contact-section{
    min-height:0!important;
    height:auto!important;
  }
  @media(max-width:700px){
    .briar-clock{transform:scale(1.04)!important;margin-bottom:34px!important;}
    .briar-clock-section{padding-bottom:54px!important;}
  }
`;
document.head.appendChild(finalClockOverride);

// Failsafe: reveal everything after load so long-page screenshots and slower browsers do not show blank sections.
window.setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}, 1200);
