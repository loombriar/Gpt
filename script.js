const gate = document.getElementById("briarGate");
const enter = document.getElementById("enterBriar");
if (gate && enter) {
  enter.addEventListener("click", () => {
    gate.classList.add("open");
    document.body.classList.remove("gate-locked");
    setTimeout(() => gate.setAttribute("hidden",""), 1750);
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

const heroOverride = document.createElement("style");
heroOverride.textContent = `
  .gate-art{background-image:linear-gradient(rgba(0,0,0,.18),rgba(0,0,0,.50)),url("assets/pawdrey-hero.png")!important;background-position:center 24%!important;background-size:cover!important;}
  .hero-art{background-image:url("assets/pawdrey-hero.png")!important;background-position:center 20%!important;background-size:cover!important;}
  @media (max-width:980px){.hero-art{background-position:center 15%!important;}}
  @media (max-width:640px){.hero-art{background-position:center 10%!important;}}
`;
document.head.appendChild(heroOverride);

const gateRebuild = document.createElement('style');
gateRebuild.textContent = `
  .briar-gate{perspective:1500px!important;background:#010403!important;transition:visibility 0s linear 1.65s!important;overflow:hidden!important;}
  .briar-gate.open{opacity:1!important;visibility:hidden!important;transition:visibility 0s linear 1.65s!important;}
  .gate-art{inset:0!important;z-index:-9!important;background-image:linear-gradient(180deg,rgba(1,5,3,.18),rgba(1,4,3,.72)),url("assets/moss-clearing.jpg")!important;background-position:center 58%!important;background-size:cover!important;filter:brightness(.44) saturate(.72) contrast(1.08)!important;transform:scale(1.045)!important;animation:forestDrift 18s ease-in-out infinite alternate!important;}
  @keyframes forestDrift{to{transform:scale(1.075) translate(-.4%,-.8%)}}
  .gate-vignette{z-index:-3!important;background:radial-gradient(circle at 54% 21%,rgba(226,216,173,.16) 0 6%,transparent 20%),radial-gradient(ellipse at 50% 61%,rgba(68,96,57,.10) 0 20%,transparent 52%),radial-gradient(ellipse at center,transparent 0 20%,rgba(0,0,0,.26) 52%,rgba(0,0,0,.94) 100%)!important;}
  .briar-gate:before,.briar-gate:after{content:"";position:absolute;top:-8%;bottom:-8%;width:31%;z-index:2;pointer-events:none;background:radial-gradient(ellipse at 18% 22%,rgba(75,103,51,.56) 0 3%,transparent 3.8%),radial-gradient(ellipse at 68% 42%,rgba(66,91,44,.50) 0 2.8%,transparent 3.7%),radial-gradient(ellipse at 34% 71%,rgba(78,108,52,.46) 0 3.2%,transparent 4.2%),linear-gradient(77deg,transparent 47%,rgba(47,32,18,.82) 48% 50%,transparent 51%),repeating-linear-gradient(90deg,#0a0805 0 18px,#17120c 18px 36px,#0b0806 36px 54px)!important;filter:drop-shadow(0 0 22px #000);transition:transform 1.55s cubic-bezier(.68,.02,.22,1),opacity .9s ease;}
  .briar-gate:before{left:-6%;transform:rotate(-4deg)}.briar-gate:after{right:-6%;transform:scaleX(-1) rotate(-4deg)}
  .briar-gate.open:before{transform:translateX(-38%) rotate(-7deg);opacity:.32}.briar-gate.open:after{transform:scaleX(-1) translateX(-38%) rotate(-7deg);opacity:.32}
  .gate-copy{position:relative;z-index:5;width:min(580px,84vw)!important;padding:32px 28px 26px!important;margin-top:8vh!important;text-align:center!important;border:0!important;border-radius:0!important;background:transparent!important;backdrop-filter:none!important;text-shadow:0 5px 28px #000,0 2px 8px #000;transition:opacity .55s ease,transform .8s ease;}
  .gate-copy:before{content:"";position:absolute;left:50%;top:-82px;width:min(470px,78vw);height:470px;transform:translateX(-50%);z-index:-1;pointer-events:none;border:2px solid rgba(105,83,48,.64);border-bottom:0;border-radius:50% 50% 8px 8px/34% 34% 8px 8px;background:linear-gradient(90deg,transparent 47%,rgba(50,35,20,.78) 48% 52%,transparent 53%),repeating-linear-gradient(90deg,transparent 0 34px,rgba(56,39,23,.68) 34px 39px,transparent 39px 71px),radial-gradient(ellipse at 18% 18%,rgba(68,96,50,.55) 0 4%,transparent 5%),radial-gradient(ellipse at 79% 31%,rgba(78,105,55,.52) 0 4%,transparent 5%),linear-gradient(180deg,rgba(21,17,11,.34),rgba(8,7,5,.12));box-shadow:inset 0 0 60px rgba(0,0,0,.42),0 0 40px rgba(0,0,0,.52);opacity:.78;}
  .gate-copy:after{content:"LOOM BRIAR";position:absolute;left:50%;top:-60px;transform:translateX(-50%) rotate(-1deg);color:rgba(199,170,111,.50);font:600 .78rem var(--serif);letter-spacing:.32em;text-shadow:0 2px 3px #000;}
  .briar-gate.open .gate-copy{opacity:0;transform:scale(.96) translateY(16px)}
  .gate-copy .kicker{font-size:.68rem!important;letter-spacing:.3em!important;color:#c5a96f!important;opacity:.9}.gate-copy h1{font-size:clamp(3.6rem,7vw,6.4rem)!important;line-height:.82!important;color:#eadfbe!important;letter-spacing:-.02em!important;margin:.05em 0 .12em!important}.gate-intro{font-size:clamp(1.05rem,1.8vw,1.3rem)!important;max-width:470px!important;color:#cec2aa!important;margin:1rem auto 1.35rem!important}
  .enter-button{position:relative;overflow:hidden;min-width:210px!important;min-height:52px!important;border:1px solid rgba(171,143,86,.56)!important;border-radius:2px 16px 2px 16px!important;background:linear-gradient(180deg,rgba(37,32,21,.78),rgba(13,18,13,.92))!important;color:#e7d6ac!important;box-shadow:0 10px 30px rgba(0,0,0,.45),inset 0 0 16px rgba(212,174,105,.04)!important}.enter-button:hover{border-color:#d9bc79!important;box-shadow:0 12px 34px rgba(0,0,0,.48),0 0 22px rgba(132,170,91,.08)!important}.enter-button:before{content:"";position:absolute;inset:0;transform:translateX(-120%);background:linear-gradient(105deg,transparent 30%,rgba(244,224,169,.14),transparent 70%);transition:transform .75s ease}.enter-button:hover:before{transform:translateX(120%)}
  .gate-copy small{color:#9e927c!important;letter-spacing:.17em!important;margin-top:.85rem!important}.gate-crow{z-index:4!important;left:auto!important;right:9vw!important;top:auto!important;bottom:11vh!important;width:min(170px,18vw)!important;opacity:.42!important;mix-blend-mode:screen!important;filter:brightness(.68) contrast(1.12) drop-shadow(0 12px 18px #000)!important;transform:rotate(-7deg);transition:opacity .4s ease,transform 1.2s ease!important}.briar-gate.open .gate-crow{opacity:0!important;transform:translate(65px,-48px) rotate(10deg) scale(.82)!important}
  .gate-mist{z-index:3!important;pointer-events:none!important;background:rgba(181,201,187,.055)!important;mix-blend-mode:screen;filter:blur(42px)!important}.mist-one{height:20%!important;bottom:2%!important}.mist-two{height:18%!important;bottom:24%!important;opacity:.33!important}.briar-gate.open .gate-mist{opacity:0;transition:opacity .9s ease}
  .briar-gate .enter-button:after{content:"";position:absolute;left:50%;top:-170px;width:260px;height:240px;transform:translateX(-50%);pointer-events:none;background:radial-gradient(circle at 16% 20%,#efe0a0 0 1.5px,transparent 2.2px),radial-gradient(circle at 74% 28%,#dceca8 0 1.5px,transparent 2.2px),radial-gradient(circle at 42% 54%,#e9d58e 0 1.3px,transparent 2px),radial-gradient(circle at 84% 68%,#d7e79e 0 1.4px,transparent 2px),radial-gradient(circle at 24% 79%,#e9d58e 0 1.2px,transparent 1.9px);filter:drop-shadow(0 0 6px rgba(226,220,155,.55));opacity:.65;animation:fireflyPulse 4s ease-in-out infinite alternate}@keyframes fireflyPulse{to{opacity:.28;transform:translateX(-50%) translateY(-8px)}}
  @media(max-width:700px){.gate-art{background-position:center 62%!important}.briar-gate:before,.briar-gate:after{width:37%}.gate-copy{width:min(92vw,520px)!important;padding:24px 16px 20px!important;margin-top:4vh!important}.gate-copy:before{top:-52px;width:86vw;height:390px}.gate-copy:after{top:-34px;font-size:.64rem}.gate-copy h1{font-size:clamp(3.2rem,15vw,5rem)!important}.gate-intro{font-size:1rem!important;max-width:88%!important}.gate-crow{width:105px!important;right:4vw!important;bottom:6vh!important;opacity:.32!important}}
`;
document.head.appendChild(gateRebuild);

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

const discoveryPass=document.createElement('style');
discoveryPass.textContent=`
  .briar-gate{background:#010302!important;}
  .gate-art{background-image:linear-gradient(180deg,rgba(0,4,2,.05) 0%,rgba(0,4,2,.26) 48%,rgba(0,3,2,.72) 100%),url("assets/moss-clearing.jpg")!important;background-position:43% 70%!important;filter:brightness(.31) saturate(.92) contrast(1.18)!important;}
  .gate-vignette{background:radial-gradient(ellipse at 61% 69%,rgba(235,218,158,.19) 0 3%,rgba(132,143,92,.09) 10%,transparent 27%),linear-gradient(166deg,transparent 0 56%,rgba(185,168,112,.06) 57% 61%,transparent 72%),linear-gradient(98deg,rgba(0,0,0,.82) 0 19%,transparent 39% 69%,rgba(0,0,0,.86) 91%),linear-gradient(180deg,rgba(0,0,0,.38),transparent 36%,rgba(0,0,0,.58) 100%)!important;}
  .briar-gate:before{width:50%!important;left:-23%!important;top:-18%!important;bottom:-14%!important;transform:rotate(13deg)!important;background:radial-gradient(ellipse at 73% 13%,rgba(55,82,40,.75) 0 4%,transparent 5%),radial-gradient(ellipse at 88% 35%,rgba(69,99,49,.63) 0 3.2%,transparent 4.1%),radial-gradient(ellipse at 68% 63%,rgba(49,76,38,.57) 0 4%,transparent 5%),linear-gradient(67deg,transparent 0 46%,#171008 47% 51%,transparent 52%),linear-gradient(79deg,transparent 0 62%,#100b07 63% 67%,transparent 68%)!important;filter:drop-shadow(16px 5px 18px #000)!important;}
  .briar-gate:after{width:44%!important;right:-19%!important;top:-5%!important;bottom:-19%!important;transform:scaleX(-1) rotate(-15deg)!important;background:radial-gradient(ellipse at 74% 18%,rgba(62,91,43,.7) 0 3.8%,transparent 4.8%),radial-gradient(ellipse at 84% 54%,rgba(72,101,49,.58) 0 3%,transparent 4%),linear-gradient(70deg,transparent 0 48%,#130e08 49% 54%,transparent 55%),linear-gradient(88deg,transparent 0 69%,#0c0906 70% 74%,transparent 75%)!important;filter:drop-shadow(-16px 5px 18px #000)!important;}
  .gate-copy{width:min(470px,68vw)!important;margin-top:20vh!important;margin-left:18vw!important;transform:rotate(-1.35deg)!important;text-align:left!important;padding:18px 20px!important;text-shadow:0 3px 16px #000,0 1px 4px #000!important;}
  .gate-copy:before{left:51%!important;top:-88px!important;width:min(385px,62vw)!important;height:405px!important;transform:translateX(-50%) rotate(-4deg)!important;border-color:rgba(92,73,43,.34)!important;border-width:1px!important;border-radius:47% 53% 3px 6px/30% 35% 3px 6px!important;background:linear-gradient(91deg,transparent 0 17%,rgba(43,31,18,.42) 18% 19%,transparent 20% 42%,rgba(42,30,17,.55) 43% 44%,transparent 45% 72%,rgba(38,27,16,.42) 73% 74%,transparent 75%),radial-gradient(ellipse at 13% 27%,rgba(61,90,47,.46) 0 4%,transparent 5%),radial-gradient(ellipse at 87% 16%,rgba(69,96,50,.42) 0 4%,transparent 5%),radial-gradient(ellipse at 79% 72%,rgba(58,84,43,.36) 0 4%,transparent 5%)!important;box-shadow:inset 0 0 48px rgba(0,0,0,.28)!important;opacity:.42!important;}
  .gate-copy:after{left:48%!important;top:-63px!important;transform:translateX(-50%) rotate(-3deg)!important;color:rgba(188,159,101,.31)!important;font-size:.68rem!important;letter-spacing:.28em!important;}
  .gate-copy .kicker{opacity:.55!important}.gate-copy h1{font-size:clamp(2.9rem,5.5vw,5rem)!important;line-height:.85!important;color:#e4d8b5!important}.gate-intro{margin:1rem 0 1.3rem!important;max-width:390px!important;color:#bfb49e!important;font-size:clamp(.96rem,1.55vw,1.16rem)!important}.gate-copy small{display:block!important;margin-left:4px!important;opacity:.62!important}
  .gate-crow{right:11vw!important;bottom:auto!important;top:23vh!important;width:min(105px,11vw)!important;opacity:.18!important;transform:rotate(13deg)!important;filter:brightness(.48) contrast(1.25) drop-shadow(0 10px 14px #000)!important;}
  .mist-one{left:34%!important;width:50%!important;bottom:0!important;height:16%!important;opacity:.25!important}.mist-two{left:47%!important;width:35%!important;bottom:23%!important;opacity:.16!important}
  .briar-gate .enter-button{margin-left:2px!important;opacity:.88}.briar-gate .enter-button:after{left:72%!important;top:-205px!important;width:330px!important;height:330px!important;opacity:.48!important;}
  @media(max-width:700px){.gate-art{background-position:40% 72%!important}.briar-gate:before{left:-32%!important;width:61%!important}.briar-gate:after{right:-28%!important;width:55%!important}.gate-copy{margin:18vh 0 0 19vw!important;width:68vw!important;transform:rotate(-1deg)!important}.gate-copy:before{width:70vw!important;left:49%!important}.gate-copy h1{font-size:clamp(2.8rem,13vw,4.5rem)!important}.gate-crow{right:5vw!important;top:15vh!important;width:72px!important}}
`;
document.head.appendChild(discoveryPass);

const gateCssPolish=document.createElement('style');
gateCssPolish.textContent=`
  .briar-gate{isolation:isolate!important;}
  .gate-art{filter:brightness(.36) saturate(.96) contrast(1.13)!important;background-position:45% 68%!important;}
  .gate-vignette{background:
    radial-gradient(ellipse at 58% 72%,rgba(246,223,157,.26) 0 4%,rgba(187,170,112,.12) 10%,transparent 29%),
    linear-gradient(167deg,transparent 0 53%,rgba(219,198,139,.085) 56% 61%,transparent 70%),
    linear-gradient(100deg,rgba(0,0,0,.77) 0 19%,transparent 38% 70%,rgba(0,0,0,.84) 92%),
    radial-gradient(ellipse at center,transparent 0 28%,rgba(0,0,0,.26) 57%,rgba(0,0,0,.7) 100%)!important;}
  .gate-copy:before{
    opacity:.64!important;
    border-color:rgba(137,108,63,.48)!important;
    box-shadow:inset 0 0 52px rgba(0,0,0,.36),0 0 24px rgba(173,145,86,.07)!important;
    background:
      linear-gradient(92deg,transparent 0 13%,rgba(78,53,29,.48) 14% 15.5%,transparent 17% 35%,rgba(69,47,27,.56) 36% 37.5%,transparent 39% 61%,rgba(64,43,25,.54) 62% 63.5%,transparent 65% 82%,rgba(72,48,27,.46) 83% 84.5%,transparent 86%),
      radial-gradient(ellipse at 12% 24%,rgba(70,99,48,.56) 0 4%,transparent 5%),
      radial-gradient(ellipse at 88% 18%,rgba(77,105,51,.50) 0 4%,transparent 5%),
      linear-gradient(180deg,rgba(31,23,14,.2),rgba(8,7,5,.12))!important;
  }
  .briar-gate:before{background:
    radial-gradient(ellipse at 74% 14%,rgba(61,89,43,.8) 0 4.5%,transparent 5.6%),
    radial-gradient(ellipse at 88% 36%,rgba(72,104,52,.7) 0 3.4%,transparent 4.4%),
    radial-gradient(ellipse at 68% 62%,rgba(57,85,42,.64) 0 4.2%,transparent 5.2%),
    linear-gradient(66deg,transparent 0 45%,#171008 46% 51%,transparent 52%),
    linear-gradient(79deg,transparent 0 59%,#100b07 60% 64%,transparent 65%),
    linear-gradient(112deg,transparent 0 70%,rgba(42,29,17,.8) 71% 72.2%,transparent 73%)!important;}
  .briar-gate:after{background:
    radial-gradient(ellipse at 73% 18%,rgba(65,95,45,.76) 0 4%,transparent 5%),
    radial-gradient(ellipse at 84% 55%,rgba(76,107,53,.66) 0 3.4%,transparent 4.4%),
    radial-gradient(ellipse at 64% 78%,rgba(54,83,41,.58) 0 3.8%,transparent 4.8%),
    linear-gradient(69deg,transparent 0 47%,#130e08 48% 54%,transparent 55%),
    linear-gradient(88deg,transparent 0 66%,#0c0906 67% 72%,transparent 73%),
    linear-gradient(52deg,transparent 0 73%,rgba(45,31,18,.78) 74% 75.2%,transparent 76%)!important;}
  .gate-copy h1{color:#eee1ba!important;text-shadow:0 3px 18px #000,0 0 22px rgba(223,200,137,.06)!important;}
  .gate-intro{color:#c9bea5!important;}
  .enter-button{
    border-color:rgba(207,171,101,.62)!important;
    background:linear-gradient(180deg,rgba(50,40,25,.78),rgba(15,21,15,.92))!important;
    box-shadow:0 10px 30px rgba(0,0,0,.5),0 0 20px rgba(219,192,125,.10),inset 0 0 16px rgba(222,190,117,.05)!important;
  }
  .enter-button:hover{box-shadow:0 12px 34px rgba(0,0,0,.52),0 0 28px rgba(229,201,131,.18),inset 0 0 20px rgba(222,190,117,.07)!important;}
  .gate-copy:after{color:rgba(205,174,111,.42)!important;}
  .mist-one{opacity:.31!important}.mist-two{opacity:.19!important}
  @media(max-width:700px){
    .gate-art{filter:brightness(.39) saturate(.94) contrast(1.12)!important;background-position:43% 70%!important;}
    .gate-vignette{background:radial-gradient(ellipse at 57% 74%,rgba(244,221,156,.22) 0 5%,transparent 28%),linear-gradient(100deg,rgba(0,0,0,.72) 0 14%,transparent 36% 72%,rgba(0,0,0,.78) 92%),linear-gradient(180deg,rgba(0,0,0,.24),transparent 35%,rgba(0,0,0,.55) 100%)!important;}
    .gate-copy:before{opacity:.58!important;}
  }
`;
document.head.appendChild(gateCssPolish);

window.setTimeout(() => {document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));}, 1200);
