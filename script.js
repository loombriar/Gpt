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

// True final visual pass: added on load so it comes after enhancements.js and wins the cascade.
window.addEventListener('load', () => {
  const relic = document.createElement('style');
  relic.textContent = `
    .briar-clock-section{
      position:relative!important;
      padding:92px clamp(22px,6vw,92px) 78px!important;
      background:
        radial-gradient(ellipse at 50% 34%,rgba(145,121,69,.12) 0%,rgba(53,86,47,.16) 28%,transparent 53%),
        radial-gradient(circle at 18% 28%,rgba(61,104,61,.11),transparent 28%),
        linear-gradient(180deg,#04110b 0%,#020806 62%,#020504 100%)!important;
      box-shadow:inset 0 1px rgba(214,185,112,.08),inset 0 -1px rgba(214,185,112,.05)!important;
    }
    .briar-clock-section:before,
    .briar-clock-section:after{
      content:"";position:absolute;pointer-events:none;opacity:.32;
      width:220px;height:430px;top:120px;
      background:
        radial-gradient(ellipse at 30% 10%,rgba(102,128,70,.45) 0 3%,transparent 4%),
        radial-gradient(ellipse at 52% 24%,rgba(81,111,59,.4) 0 3%,transparent 4%),
        radial-gradient(ellipse at 35% 41%,rgba(81,111,59,.34) 0 3%,transparent 4%),
        linear-gradient(74deg,transparent 48%,rgba(98,72,39,.46) 49% 50%,transparent 51%);
      filter:blur(.2px);
    }
    .briar-clock-section:before{left:-55px;transform:rotate(-7deg)}
    .briar-clock-section:after{right:-55px;transform:scaleX(-1) rotate(-7deg)}
    .briar-clock-section>.section-heading{position:relative;z-index:2;margin-bottom:16px!important}
    .briar-clock-section>.section-heading p:last-child{max-width:610px;margin-inline:auto;color:#bcae94!important}

    .briar-clock{
      width:min(390px,88vw)!important;height:540px!important;
      margin:22px auto 8px!important;transform:none!important;
      filter:drop-shadow(0 30px 30px rgba(0,0,0,.7)) drop-shadow(0 0 28px rgba(116,142,75,.08))!important;
    }
    .clock-house{
      top:62px!important;width:300px!important;height:425px!important;
      clip-path:polygon(50% 0,88% 12%,96% 28%,91% 100%,9% 100%,4% 28%,12% 12%)!important;
      background:
        radial-gradient(ellipse at 50% 18%,rgba(133,91,48,.22),transparent 25%),
        linear-gradient(90deg,rgba(0,0,0,.48),transparent 14% 86%,rgba(0,0,0,.5)),
        repeating-linear-gradient(94deg,#24150d 0 15px,#382216 15px 30px,#4a2c1a 30px 44px,#2e1c12 44px 60px)!important;
      border:2px solid rgba(185,137,75,.5)!important;
      border-radius:22px 22px 42px 42px!important;
      box-shadow:
        inset 0 0 0 3px rgba(21,12,7,.7),
        inset 0 0 0 8px rgba(108,72,37,.12),
        inset 0 0 64px rgba(0,0,0,.56),
        0 22px 45px rgba(0,0,0,.56)!important;
    }
    .clock-house:before{
      left:30px!important;right:30px!important;top:-20px!important;height:72px!important;
      border-radius:50% 50% 20% 20%!important;
      background:
        radial-gradient(ellipse at 22% 55%,#536b43 0 8%,transparent 9%),
        radial-gradient(ellipse at 40% 33%,#415837 0 9%,transparent 10%),
        radial-gradient(ellipse at 60% 47%,#5a7148 0 8%,transparent 9%),
        radial-gradient(ellipse at 78% 35%,#3d5232 0 9%,transparent 10%),
        linear-gradient(180deg,#35462d,#1e2b1c 66%,#121a11)!important;
      box-shadow:0 8px 0 rgba(15,24,14,.82),0 0 26px rgba(102,137,74,.16)!important;
    }
    .clock-house:after{
      left:40px!important;right:40px!important;bottom:18px!important;height:42px!important;
      border-radius:50%!important;
      background:repeating-linear-gradient(90deg,rgba(173,127,68,.18) 0 10px,rgba(40,24,14,.3) 10px 20px)!important;
      opacity:.8!important;
    }

    .clock-door{
      top:112px!important;width:108px!important;height:75px!important;
      border:5px solid #3f2819!important;border-radius:54px 54px 10px 10px!important;
      background:radial-gradient(circle at 50% 65%,#040504,#0b0907 72%)!important;
      box-shadow:0 7px 18px rgba(0,0,0,.62),0 0 0 2px rgba(145,100,52,.26),inset 0 0 20px #000!important;
    }
    .clock-door:before,.clock-door:after{
      background:linear-gradient(90deg,#21140d,#51311d 55%,#2a190f)!important;
      border-color:#78502f!important;
    }

    .clock-face{
      top:231px!important;width:168px!important;height:168px!important;
      border:10px solid #3f291a!important;
      background:
        repeating-conic-gradient(from -1deg,#3a2b1d 0deg 1deg,transparent 1deg 30deg),
        radial-gradient(circle at 50% 50%,transparent 0 66%,rgba(69,47,29,.26) 67% 68%,transparent 69%),
        radial-gradient(circle at 42% 34%,#e4d4aa 0%,#cbb889 56%,#9b8057 100%)!important;
      box-shadow:0 0 0 3px #86623a,0 0 0 5px rgba(39,24,14,.8),inset 0 0 24px rgba(83,59,33,.34),0 11px 24px rgba(0,0,0,.55)!important;
    }
    .clock-face:before,.clock-face:after{background:#1b140e!important;box-shadow:0 0 0 1px rgba(255,255,255,.05)!important}

    .clock-pendulum{top:390px!important;height:108px!important;background:linear-gradient(#60401f,#b28649 52%,#5e3b20)!important}
    .clock-pendulum:after{width:34px!important;height:38px!important;border-radius:48% 48% 55% 55%!important;background:radial-gradient(circle at 38% 28%,#d0ac6e,#8c6638 62%,#4c321d)!important}

    .clock-crow{top:134px!important}
    .briar-clock.awake .clock-crow{transform:translate(-50%,-42px) scale(1.08)!important}
    .clock-button{
      margin-top:6px!important;min-width:164px!important;
      background:linear-gradient(180deg,rgba(76,52,31,.78),rgba(30,21,14,.92))!important;
      border-color:rgba(203,162,93,.48)!important;
      box-shadow:inset 0 0 16px rgba(226,192,123,.05),0 8px 18px rgba(0,0,0,.3)!important;
    }
    .ferret-faucet{max-width:650px!important;margin-top:34px!important;background:linear-gradient(145deg,rgba(7,16,12,.82),rgba(4,10,7,.92))!important}

    @media(max-width:620px){
      .briar-clock-section{padding-top:70px!important;padding-bottom:60px!important}
      .briar-clock{width:min(330px,92vw)!important;height:470px!important}
      .clock-house{width:255px!important;height:352px!important;top:62px!important}
      .clock-house:before{left:24px!important;right:24px!important;height:58px!important}
      .clock-door{top:101px!important;width:90px!important;height:63px!important}
      .clock-crow{top:119px!important}
      .clock-face{top:196px!important;width:142px!important;height:142px!important;border-width:8px!important}
      .clock-pendulum{top:326px!important;height:90px!important}
      .briar-clock-section:before,.briar-clock-section:after{opacity:.18;width:140px}
    }
  `;
  document.head.appendChild(relic);
});
