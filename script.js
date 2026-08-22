const gate = document.getElementById("briarGate");
const enter = document.getElementById("enterBriar");
if (gate && enter) {
  enter.addEventListener("click", () => {
    gate.classList.add("open");
    document.body.classList.remove("gate-locked");
    setTimeout(() => gate.setAttribute("hidden",""), 1650);
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

// Use the real Pawdrey artwork for the entrance and hero.
const heroOverride = document.createElement("style");
heroOverride.textContent = `
  .gate-art{background-image:linear-gradient(rgba(0,0,0,.18),rgba(0,0,0,.50)),url("assets/pawdrey-hero.png")!important;background-position:center 24%!important;background-size:cover!important;}
  .hero-art{background-image:url("assets/pawdrey-hero.png")!important;background-position:center 20%!important;background-size:cover!important;}
  @media (max-width:980px){.hero-art{background-position:center 15%!important;}}
  @media (max-width:640px){.hero-art{background-position:center 10%!important;}}
`;
document.head.appendChild(heroOverride);

// Rebuilt Briar Woods entrance: moonlit thorn gates physically part when entered.
const gateRebuild = document.createElement('style');
gateRebuild.textContent = `
  .briar-gate{
    perspective:1500px!important;
    background:#010403!important;
    transition:visibility 0s linear 1.55s!important;
  }
  .briar-gate.open{opacity:1!important;visibility:hidden!important;transition:visibility 0s linear 1.55s!important;}
  .gate-art{
    inset:0!important;z-index:-8!important;
    filter:brightness(.42) saturate(.78) contrast(1.08)!important;
    transform:scale(1.035)!important;
    animation:gateBreath 14s ease-in-out infinite alternate!important;
  }
  @keyframes gateBreath{to{transform:scale(1.075) translateY(-.8%)}}
  .gate-vignette{
    z-index:-2!important;
    background:
      radial-gradient(circle at 50% 19%,rgba(236,220,163,.20) 0 4%,transparent 18%),
      radial-gradient(ellipse at center,transparent 0 18%,rgba(0,0,0,.24) 46%,rgba(0,0,0,.92) 100%)!important;
  }
  .briar-gate:before,.briar-gate:after{
    content:"";position:absolute;top:-5%;bottom:-5%;width:52%;z-index:2;pointer-events:none;
    background:
      radial-gradient(ellipse at 16% 22%,rgba(84,106,54,.55) 0 2.5%,transparent 3.2%),
      radial-gradient(ellipse at 82% 35%,rgba(69,92,45,.52) 0 2.4%,transparent 3.1%),
      radial-gradient(ellipse at 24% 68%,rgba(76,101,49,.48) 0 2.8%,transparent 3.5%),
      repeating-linear-gradient(90deg,rgba(12,8,5,.22) 0 3px,transparent 3px 54px),
      linear-gradient(90deg,#080705 0%,#17130d 18%,#0c0a07 43%,#21190f 72%,#080705 100%);
    border-color:rgba(173,132,70,.46);border-style:solid;
    box-shadow:inset 0 0 80px #000,0 0 50px rgba(0,0,0,.72);
    transition:transform 1.45s cubic-bezier(.68,.02,.22,1),filter 1.45s ease;
  }
  .briar-gate:before{
    left:-1%;border-width:0 2px 0 0;transform-origin:left center;
    clip-path:polygon(0 0,100% 0,100% 7%,94% 10%,100% 14%,100% 23%,93% 27%,100% 31%,100% 100%,0 100%);
  }
  .briar-gate:after{
    right:-1%;border-width:0 0 0 2px;transform-origin:right center;
    clip-path:polygon(0 0,100% 0,100% 100%,0 100%,0 31%,7% 27%,0 23%,0 14%,6% 10%,0 7%);
  }
  .briar-gate.open:before{transform:rotateY(-78deg) translateX(-10%);filter:brightness(.42)}
  .briar-gate.open:after{transform:rotateY(78deg) translateX(10%);filter:brightness(.42)}
  .gate-copy{
    position:relative;z-index:5;width:min(690px,88vw)!important;padding:44px 34px!important;
    border:1px solid rgba(212,174,105,.18);border-radius:50% 50% 7px 7px/18% 18% 7px 7px;
    background:radial-gradient(ellipse at center,rgba(3,10,7,.78),rgba(2,6,4,.42) 62%,transparent 76%);
    backdrop-filter:blur(2px);transition:opacity .55s ease,transform .75s ease;
  }
  .briar-gate.open .gate-copy{opacity:0;transform:scale(.94) translateY(18px)}
  .gate-copy:before{
    content:"✦";display:grid;place-items:center;width:58px;height:58px;margin:0 auto 18px;
    border:1px solid rgba(216,179,106,.46);border-radius:50%;color:#e5ca8e;font-size:1rem;
    box-shadow:0 0 30px rgba(207,177,107,.12),inset 0 0 20px rgba(207,177,107,.08);
  }
  .gate-copy .kicker{font-size:.74rem!important;letter-spacing:.32em!important;color:#d8b66f!important}
  .gate-copy h1{font-size:clamp(4.2rem,8vw,7.7rem)!important;line-height:.78!important;text-shadow:0 5px 28px #000,0 0 42px rgba(215,188,124,.09)!important}
  .gate-intro{font-size:clamp(1.15rem,2vw,1.42rem)!important;max-width:520px!important;color:#d8ccb5!important}
  .enter-button{
    position:relative;overflow:hidden;min-width:230px!important;min-height:56px!important;
    border:1px solid rgba(220,184,111,.62)!important;border-radius:2px 20px 2px 20px!important;
    background:linear-gradient(145deg,rgba(72,50,30,.92),rgba(17,27,19,.96))!important;
    box-shadow:0 12px 34px rgba(0,0,0,.5),inset 0 0 24px rgba(212,174,105,.06),0 0 24px rgba(112,148,77,.07)!important;
    color:#f1dfb5!important;
  }
  .enter-button:before{content:"";position:absolute;inset:0;transform:translateX(-120%);background:linear-gradient(105deg,transparent 30%,rgba(244,224,169,.15),transparent 70%);transition:transform .7s ease}
  .enter-button:hover:before{transform:translateX(120%)}
  .gate-crow{
    z-index:4!important;left:auto!important;right:5vw!important;top:auto!important;bottom:5vh!important;
    width:min(230px,22vw)!important;opacity:.62!important;mix-blend-mode:screen!important;
    transform:rotate(-5deg);transition:opacity .4s ease,transform 1.2s ease!important;
  }
  .briar-gate.open .gate-crow{opacity:0!important;transform:translate(80px,-50px) rotate(8deg) scale(.8)!important}
  .gate-mist{z-index:3!important;pointer-events:none!important;background:rgba(190,210,196,.07)!important;mix-blend-mode:screen}
  .briar-gate.open .gate-mist{opacity:0;transition:opacity .8s ease}
  @media(max-width:700px){
    .briar-gate:before,.briar-gate:after{width:54%}
    .gate-copy{padding:30px 18px!important;background:radial-gradient(ellipse at center,rgba(3,10,7,.83),rgba(2,6,4,.54) 66%,transparent 82%)}
    .gate-copy:before{width:46px;height:46px;margin-bottom:14px}
    .gate-copy h1{font-size:clamp(3.6rem,17vw,5.6rem)!important}
    .gate-intro{font-size:1.08rem!important}
    .gate-crow{width:120px!important;right:3vw!important;bottom:3vh!important;opacity:.48!important}
  }
  @media(prefers-reduced-motion:reduce){
    .briar-gate:before,.briar-gate:after,.gate-copy,.gate-crow{transition-duration:.2s!important}
    .gate-art{animation:none!important}
  }
`;
document.head.appendChild(gateRebuild);

// Clock/layout overrides.
const finalClockOverride = document.createElement("style");
finalClockOverride.textContent = `
  .briar-clock-section{min-height:0!important;height:auto!important;padding:84px clamp(22px,6vw,92px) 70px!important;}
  .briar-clock-section>.section-heading{margin-bottom:18px!important;}
  .briar-clock{transform:scale(1.14)!important;transform-origin:top center!important;margin-top:26px!important;margin-bottom:86px!important;}
  .clock-house{box-shadow:inset 0 0 0 3px rgba(24,13,7,.68),inset 0 0 60px rgba(0,0,0,.52),0 18px 42px rgba(0,0,0,.55)!important;}
  .clock-face{background:radial-gradient(circle at 50% 50%,transparent 0 61%,rgba(78,52,28,.13) 62% 64%,transparent 65%),radial-gradient(circle at 48% 42%,#f2e5c0 0%,#dcc89d 58%,#af936a 100%)!important;}
  .clock-button{font-size:.94rem!important;letter-spacing:.04em!important;}.ferret-faucet{margin-top:18px!important;}
  .journal-section .reveal,.contact-section .reveal{opacity:1!important;transform:none!important;}
  .journal-section,.contact-section{min-height:0!important;height:auto!important;}
  @media(max-width:700px){.briar-clock{transform:scale(1.04)!important;margin-bottom:34px!important;}.briar-clock-section{padding-bottom:54px!important;}}
`;
document.head.appendChild(finalClockOverride);

window.setTimeout(() => {document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));}, 1200);
