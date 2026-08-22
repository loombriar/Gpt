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

// Discovery pass: make the threshold feel stumbled upon, not staged.
const discoveryPass=document.createElement('style');
discoveryPass.textContent=`
  .briar-gate{background:#010302!important;}
  .gate-art{background-image:linear-gradient(180deg,rgba(0,4,2,.05) 0%,rgba(0,4,2,.26) 48%,rgba(0,3,2,.72) 100%),url("assets/moss-clearing.jpg")!important;background-position:46% 66%!important;filter:brightness(.36) saturate(.88) contrast(1.13)!important;}
  .gate-vignette{background:radial-gradient(ellipse at 57% 58%,rgba(221,210,163,.16) 0 8%,rgba(86,111,65,.08) 18%,transparent 34%),linear-gradient(103deg,rgba(0,0,0,.74) 0 24%,transparent 42% 67%,rgba(0,0,0,.78) 88%),linear-gradient(180deg,rgba(0,0,0,.24),transparent 32%,rgba(0,0,0,.45) 100%)!important;}
  .briar-gate:before{width:43%!important;left:-18%!important;transform:rotate(7deg)!important;background:radial-gradient(ellipse at 72% 15%,rgba(61,87,43,.72) 0 4%,transparent 5%),radial-gradient(ellipse at 83% 43%,rgba(72,99,50,.62) 0 3.4%,transparent 4.4%),linear-gradient(70deg,transparent 0 46%,#171109 47% 52%,transparent 53%),linear-gradient(84deg,transparent 0 62%,#0d0a07 63% 69%,transparent 70%)!important;filter:drop-shadow(16px 5px 18px #000)!important;}
  .briar-gate:after{width:38%!important;right:-15%!important;transform:scaleX(-1) rotate(-9deg)!important;background:radial-gradient(ellipse at 72% 19%,rgba(62,90,43,.68) 0 4%,transparent 5%),radial-gradient(ellipse at 78% 61%,rgba(69,98,48,.58) 0 3.5%,transparent 4.5%),linear-gradient(72deg,transparent 0 45%,#151008 46% 52%,transparent 53%),linear-gradient(88deg,transparent 0 65%,#0c0906 66% 71%,transparent 72%)!important;filter:drop-shadow(-16px 5px 18px #000)!important;}
  .gate-copy{width:min(520px,78vw)!important;margin-top:17vh!important;margin-left:12vw!important;transform:rotate(-.7deg)!important;text-align:left!important;padding:18px 20px!important;text-shadow:0 3px 16px #000,0 1px 4px #000!important;}
  .gate-copy:before{left:47%!important;top:-96px!important;width:min(420px,70vw)!important;height:430px!important;transform:translateX(-50%) rotate(-2deg)!important;border-color:rgba(83,67,42,.52)!important;border-width:2px 1px 0 2px!important;border-radius:44% 56% 4px 9px/29% 38% 5px 8px!important;background:repeating-linear-gradient(91deg,transparent 0 42px,rgba(44,33,20,.58) 43px 47px,transparent 48px 79px),linear-gradient(96deg,transparent 0 49%,rgba(48,35,21,.72) 50% 52%,transparent 53%),radial-gradient(ellipse at 12% 18%,rgba(60,90,43,.72) 0 4%,transparent 5%),radial-gradient(ellipse at 90% 42%,rgba(68,98,46,.67) 0 4%,transparent 5%)!important;box-shadow:inset 0 0 50px rgba(0,0,0,.36),0 0 32px rgba(0,0,0,.42)!important;opacity:.72!important;}
  .gate-copy:after{content:"loom briar"!important;left:44%!important;top:-58px!important;transform:translateX(-50%) rotate(-4deg)!important;color:rgba(186,158,103,.34)!important;font-size:.66rem!important;letter-spacing:.24em!important;text-transform:lowercase!important;}
  .gate-copy .kicker{opacity:.55!important;font-size:.58rem!important;letter-spacing:.22em!important;}.gate-copy h1{font-size:clamp(2.8rem,5.4vw,5rem)!important;max-width:430px!important;line-height:.88!important;color:rgba(235,222,187,.9)!important;margin:.1em 0 .2em!important;}.gate-intro{font-size:clamp(.9rem,1.35vw,1.08rem)!important;line-height:1.55!important;max-width:390px!important;margin:.7rem 0 1.05rem!important;color:rgba(211,199,170,.78)!important;}.gate-copy small{opacity:.5!important;font-size:.63rem!important;}
  .enter-button{min-width:184px!important;min-height:46px!important;padding:.72rem 1.05rem!important;background:rgba(13,18,12,.74)!important;border-color:rgba(156,132,82,.42)!important;border-radius:3px 12px 3px 12px!important;color:rgba(232,215,174,.9)!important;}
  .gate-crow{right:13vw!important;bottom:auto!important;top:22vh!important;width:min(120px,13vw)!important;opacity:.25!important;transform:rotate(7deg)!important;filter:brightness(.5) contrast(1.18) drop-shadow(0 8px 12px #000)!important;}
  .mist-one{height:26%!important;bottom:-5%!important;transform:rotate(-3deg)!important}.mist-two{height:14%!important;bottom:31%!important;opacity:.2!important;}
  .briar-gate .enter-button:after{top:-235px!important;left:115%!important;width:360px!important;height:330px!important;opacity:.48!important;}
  .briar-gate.open .gate-copy{transform:translate(16px,12px) scale(.97) rotate(-.7deg)!important;opacity:0!important}.briar-gate.open:before{transform:translateX(-28%) rotate(10deg)!important;opacity:.2!important}.briar-gate.open:after{transform:scaleX(-1) translateX(-28%) rotate(-12deg)!important;opacity:.2!important}
  @media(max-width:700px){.gate-art{background-position:49% 64%!important}.gate-copy{margin:13vh 0 0 7vw!important;width:82vw!important;padding:14px!important}.gate-copy:before{left:50%!important;width:80vw!important;height:400px!important}.gate-copy h1{font-size:clamp(2.8rem,13vw,4.5rem)!important}.gate-intro{font-size:.92rem!important;max-width:78vw!important}.gate-crow{top:15vh!important;right:5vw!important;width:90px!important;opacity:.2!important}.briar-gate:before{width:48%!important;left:-22%!important}.briar-gate:after{width:44%!important;right:-21%!important}}
`;
document.head.appendChild(discoveryPass);

window.setTimeout(() => {document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));}, 1200);
