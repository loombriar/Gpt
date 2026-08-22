(() => {
  const cursor=document.createElement('div'); cursor.className='briar-cursor'; document.body.appendChild(cursor);
  window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button,input,textarea,select').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'))});

  const field=document.createElement('div'); field.className='firefly-field'; field.setAttribute('aria-hidden','true'); document.body.appendChild(field);
  for(let i=0;i<15;i++){
    const f=document.createElement('i');f.className='firefly';
    f.style.left=(Math.random()*100)+'vw';f.style.top=(18+Math.random()*76)+'vh';
    f.style.setProperty('--dx',(-55+Math.random()*110)+'px');f.style.setProperty('--dy',(-70+Math.random()*140)+'px');
    f.style.setProperty('--dur',(7+Math.random()*9)+'s');f.style.animationDelay=(-Math.random()*9)+'s';field.appendChild(f)
  }

  /* Briar Clock — carved, moonlit, antique woodland centerpiece */
  const clockPolish=document.createElement('style');
  clockPolish.textContent=`
    .briar-clock-section{
      min-height:0!important;height:auto!important;position:relative!important;isolation:isolate!important;
      padding:96px clamp(20px,6vw,90px) 104px!important;
      background:
        radial-gradient(circle at 50% 20%,rgba(236,218,161,.11) 0 9%,transparent 25%),
        radial-gradient(circle at 50% 33%,rgba(73,119,64,.27),transparent 39%),
        radial-gradient(circle at 15% 65%,rgba(61,85,48,.16),transparent 28%),
        linear-gradient(180deg,#04110b 0%,#020805 58%,#010403 100%)!important;
      overflow:hidden!important;
    }
    .briar-clock-section:before{
      content:"";position:absolute;left:50%;top:150px;width:min(760px,92vw);height:min(760px,92vw);
      transform:translateX(-50%);border-radius:50%;z-index:-1;pointer-events:none;
      background:radial-gradient(circle,rgba(224,207,153,.085),rgba(117,146,79,.035) 34%,transparent 67%);
      box-shadow:0 0 120px rgba(102,139,73,.05);
    }
    .briar-clock-section:after{
      content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.24;
      background-image:radial-gradient(circle at 12% 34%,rgba(244,224,156,.7) 0 1px,transparent 1.8px),radial-gradient(circle at 82% 44%,rgba(244,224,156,.55) 0 1px,transparent 1.8px),radial-gradient(circle at 72% 74%,rgba(169,210,112,.48) 0 1px,transparent 1.7px),radial-gradient(circle at 27% 78%,rgba(169,210,112,.4) 0 1px,transparent 1.7px);
      background-size:220px 190px,280px 240px,310px 260px,250px 230px;
    }
    .briar-clock-section>.section-heading{max-width:760px!important;margin:0 auto 14px!important}
    .briar-clock-section>.section-heading h2{font-size:clamp(3.2rem,6vw,5.9rem)!important;line-height:.9!important;text-shadow:0 5px 24px rgba(0,0,0,.48)}
    .briar-clock-section>.section-heading p:last-child{max-width:620px;margin-inline:auto;color:#cbbd9f!important}

    .briar-clock{
      width:min(470px,94vw)!important;height:610px!important;margin:14px auto 4px!important;
      filter:drop-shadow(0 38px 58px rgba(0,0,0,.76))!important;
      transform:translateZ(0);position:relative!important;
    }
    .briar-clock:before,.briar-clock:after{content:"";position:absolute;z-index:-1;pointer-events:none}
    .briar-clock:before{left:50%;top:38px;width:400px;height:465px;transform:translateX(-50%);border-radius:48% 48% 42% 42%;background:radial-gradient(ellipse,rgba(93,126,67,.18),transparent 68%);filter:blur(8px)}
    .briar-clock:after{left:50%;bottom:44px;width:280px;height:48px;transform:translateX(-50%);border-radius:50%;background:rgba(0,0,0,.5);filter:blur(13px)}

    .clock-house{
      left:50%!important;top:76px!important;width:350px!important;height:452px!important;
      transform:translateX(-50%)!important;
      clip-path:polygon(50% 0,95% 20%,90% 100%,10% 100%,5% 20%)!important;
      background:
        radial-gradient(ellipse at 50% 31%,rgba(129,83,43,.22),transparent 35%),
        linear-gradient(90deg,rgba(0,0,0,.42),transparent 14% 86%,rgba(0,0,0,.42)),
        repeating-linear-gradient(87deg,#20130c 0 15px,#3b2415 15px 31px,#542f1a 31px 49px,#2d1b11 49px 66px)!important;
      border:2px solid rgba(194,145,82,.57)!important;
      border-radius:10px 10px 24px 24px!important;
      box-shadow:inset 0 0 0 4px rgba(19,10,6,.64),inset 0 0 66px rgba(0,0,0,.5),inset 0 -28px 35px rgba(0,0,0,.3),0 18px 44px rgba(0,0,0,.48)!important;
    }
    .clock-house:before{
      left:28px!important;right:28px!important;top:-17px!important;height:54px!important;
      background:
        radial-gradient(ellipse at 25% 55%,rgba(89,111,55,.9) 0 8%,transparent 9%),
        radial-gradient(ellipse at 70% 35%,rgba(77,101,48,.85) 0 10%,transparent 11%),
        linear-gradient(180deg,#556941 0%,#354729 55%,#1b2817 100%)!important;
      box-shadow:0 8px 0 rgba(14,23,13,.88),0 0 28px rgba(116,153,78,.28)!important;
      border-radius:70% 70% 26% 26%!important;
    }
    .clock-house:after{
      left:39px!important;right:39px!important;bottom:23px!important;height:42px!important;opacity:.8!important;
      background:repeating-linear-gradient(90deg,rgba(159,111,58,.34) 0 9px,rgba(57,35,20,.28) 9px 18px)!important;
      border:1px solid rgba(160,116,67,.22);border-radius:50%!important;
    }

    .clock-door{
      top:120px!important;width:122px!important;height:86px!important;
      border:6px solid #52331f!important;border-radius:64px 64px 9px 9px!important;
      background:radial-gradient(circle at 50% 72%,#050504,#0e0b08 70%)!important;
      box-shadow:0 9px 20px rgba(0,0,0,.58),inset 0 0 20px #000,0 0 0 2px rgba(176,127,70,.18)!important;
    }
    .clock-door:before,.clock-door:after{
      border-color:#805333!important;
      background:linear-gradient(90deg,#25160e,#5c371f 60%,#301c11)!important;
      box-shadow:inset 0 0 10px rgba(0,0,0,.45)!important;
    }
    .briar-clock.awake .clock-door:before{transform:perspective(130px) rotateY(-82deg)!important}
    .briar-clock.awake .clock-door:after{transform:perspective(130px) rotateY(82deg)!important}

    .clock-crow{
      top:145px!important;width:86px!important;height:58px!important;
      transform:translate(-50%,20px) scale(.28)!important;
      filter:drop-shadow(0 9px 8px rgba(0,0,0,.72))!important;
      transition:.52s cubic-bezier(.16,.88,.24,1.18)!important;
    }
    .clock-crow:before{
      width:58px!important;height:41px!important;
      background:linear-gradient(135deg,#030505,#111718 60%,#050708)!important;
      box-shadow:27px 12px 0 -10px #070b0b!important;
    }
    .clock-crow:after{right:-19px!important;top:12px!important;border-left-width:24px!important;border-top-width:7px!important;border-bottom-width:7px!important;border-left-color:#b98a3e!important}
    .briar-clock.awake .clock-crow{opacity:1!important;transform:translate(-50%,-39px) scale(1)!important}

    .clock-face{
      top:247px!important;width:188px!important;height:188px!important;
      border:10px solid #4c2d19!important;
      background:
        radial-gradient(circle at 50% 50%,transparent 0 58%,rgba(68,47,27,.22) 59% 61%,transparent 62%),
        repeating-conic-gradient(from -1deg,#21170f 0deg 1deg,transparent 1deg 29deg),
        radial-gradient(circle at 45% 37%,#f2e5bd 0%,#dbc79d 58%,#b89a6d 100%)!important;
      box-shadow:0 0 0 3px #aa8248,0 0 0 6px #2a1a10,inset 0 0 0 3px rgba(255,248,221,.48),inset 0 0 24px rgba(93,59,30,.16),0 12px 30px rgba(0,0,0,.56)!important;
    }
    .clock-face:before,.clock-face:after{width:5px!important;left:50%!important;background:#20160f!important;box-shadow:0 0 2px rgba(0,0,0,.5)!important}
    .clock-face:before{height:53px!important;transform:rotate(18deg)!important}
    .clock-face:after{height:72px!important;transform:rotate(112deg)!important}

    .clock-pendulum{top:419px!important;height:118px!important;width:3px!important;background:linear-gradient(#6e4b2a,#c49958,#6e4b2a)!important;animation-duration:2.6s!important}
    .clock-pendulum:after{width:36px!important;height:40px!important;bottom:-22px!important;background:radial-gradient(circle at 42% 32%,#d2ad70,#8f6238 68%,#4a2d19)!important;box-shadow:0 5px 10px rgba(0,0,0,.5),inset 0 0 0 1px rgba(244,220,169,.25)!important}

    .clock-button{
      margin-top:0!important;min-width:168px!important;min-height:48px!important;
      color:#ead8ae!important;background:linear-gradient(180deg,rgba(71,47,28,.82),rgba(32,21,14,.92))!important;
      border:1px solid rgba(202,157,91,.52)!important;border-radius:2px 15px 2px 15px!important;
      box-shadow:inset 0 0 22px rgba(212,174,105,.06),0 8px 22px rgba(0,0,0,.35)!important;
      letter-spacing:.05em;
    }
    .clock-button:hover{background:linear-gradient(180deg,rgba(95,62,35,.9),rgba(45,29,18,.96))!important;box-shadow:0 0 0 1px rgba(239,220,169,.18),0 12px 28px rgba(0,0,0,.42)!important}

    .ferret-faucet{
      max-width:650px!important;margin:40px auto 0!important;padding:20px 24px!important;
      background:linear-gradient(145deg,rgba(8,18,13,.78),rgba(3,9,6,.9))!important;
      border-color:rgba(212,174,105,.16)!important;opacity:.84;
    }
    .ferret-faucet h3{font-size:1.65rem!important;margin-bottom:.2rem!important}.ferret-faucet p:last-child{font-size:.9rem;color:#ad9f89}
    .journal-section,.contact-section{min-height:0!important;height:auto!important;opacity:1!important;transform:none!important}
    .journal-section:empty,.contact-section:empty{display:none!important}

    @media(max-width:620px){
      .briar-clock-section{padding-top:78px!important;padding-bottom:84px!important}
      .briar-clock{width:min(370px,96vw)!important;height:520px!important}
      .clock-house{width:292px!important;height:374px!important;top:70px!important}
      .clock-door{top:108px!important;width:100px!important;height:70px!important}
      .clock-crow{top:130px!important}
      .clock-face{top:222px!important;width:156px!important;height:156px!important;border-width:8px!important}
      .clock-face:before{height:44px!important}.clock-face:after{height:59px!important}
      .clock-pendulum{top:362px!important;height:96px!important}
      .clock-house:before{left:23px!important;right:23px!important;height:45px!important}
    }
  `;
  document.head.appendChild(clockPolish);

  const clock=document.querySelector('.briar-clock'); const button=document.getElementById('wakeCrow');
  if(clock&&button){
    let timer;
    const wake=()=>{clearTimeout(timer);clock.classList.add('awake');button.textContent='The crow is out';timer=setTimeout(()=>{clock.classList.remove('awake');button.textContent='Call the Crow'},3200)};
    button.addEventListener('click',wake);clock.addEventListener('click',e=>{if(e.target!==button)wake()});
  }

  /* The Briar Thread — a spool that tumbles while a thorned vine unravels down the page */
  const thornStyle=document.createElement('style');
  thornStyle.textContent=`
    .briar-thread{position:fixed!important;left:4px!important;top:76px!important;width:82px!important;height:calc(100vh - 86px)!important;z-index:44!important;pointer-events:none!important;opacity:0!important;transition:opacity .9s ease!important;overflow:visible!important}
    .briar-thread.loose{opacity:.9!important}
    .briar-vine-svg{position:absolute;inset:0;width:82px;height:100%;overflow:visible}
    .briar-vine-shadow{fill:none;stroke:rgba(0,0,0,.45);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
    .briar-vine{fill:none;stroke:url(#briarVineGradient);stroke-width:2.35;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 3px rgba(86,121,60,.18))}
    .briar-thorns{fill:none;stroke:#6f5530;stroke-width:1.15;stroke-linecap:round;opacity:.9}
    .briar-leaf{fill:#50663d;stroke:#28351f;stroke-width:.7;filter:drop-shadow(0 1px 1px rgba(0,0,0,.4))}
    .thorn-spool{position:absolute!important;left:12px!important;width:54px!important;height:54px!important;border-radius:50%!important;overflow:hidden!important;border:1px solid rgba(205,171,103,.7)!important;background:#17100b url("assets/thorn-spool-needle.jpg") center/cover no-repeat!important;box-shadow:0 7px 18px rgba(0,0,0,.65),0 0 12px rgba(90,125,62,.18)!important;transform:translateY(-18px) rotate(var(--spool-rotate,0deg))!important;will-change:top,transform!important}
    .thorn-spool:before{content:"";position:absolute;inset:8px;border-radius:50%;border:1px solid rgba(241,216,159,.45);box-shadow:inset 0 0 10px #000}
    .thorn-spool:after{content:"";position:absolute;left:50%;top:50%;width:9px;height:9px;border-radius:50%;transform:translate(-50%,-50%);background:#2b1d12;border:1px solid rgba(220,188,122,.55)}
    .spool-crow-nudge{position:absolute!important;left:46px!important;top:-18px!important;width:28px!important;height:18px!important;background:#080b0a!important;border-radius:55% 45% 50% 50%!important;opacity:0;filter:drop-shadow(0 3px 3px rgba(0,0,0,.45))}
    .spool-crow-nudge:before{content:"";position:absolute;right:2px;top:-6px;width:10px;height:10px;border-radius:50%;background:#080b0a}
    .spool-crow-nudge:after{content:"";position:absolute;right:-8px;top:5px;border-left:10px solid #a87a35;border-top:3px solid transparent;border-bottom:3px solid transparent}
    .briar-thread.loose .spool-crow-nudge{animation:spoolCrow 1.55s ease-out forwards}
    @keyframes spoolCrow{0%{opacity:0;transform:translate(30px,-16px) rotate(-12deg)}25%,58%{opacity:1}72%{opacity:1;transform:translate(2px,7px) rotate(8deg)}100%{opacity:0;transform:translate(-25px,-18px) rotate(-16deg)}}
    @media(max-width:760px){.briar-thread{left:-7px!important;opacity:.72!important;transform:scale(.82);transform-origin:top left}}
  `;
  document.head.appendChild(thornStyle);

  const thread=document.createElement('div');
  thread.className='briar-thread';thread.setAttribute('aria-hidden','true');
  thread.innerHTML=`
    <svg class="briar-vine-svg" viewBox="0 0 82 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="briarVineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#24160d"/><stop offset=".45" stop-color="#7f5a31"/><stop offset=".72" stop-color="#4f6338"/><stop offset="1" stop-color="#2b1b10"/>
        </linearGradient>
      </defs>
      <path class="briar-vine-shadow" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <path class="briar-vine" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <path class="briar-thorns" d="M31 104 l-13 -12 M45 157 l13 -15 M28 271 l-14 11 M49 352 l14 10 M29 488 l-13 -13 M47 569 l14 -14 M28 715 l-13 10 M46 812 l15 11 M31 918 l-14 -12"/>
      <ellipse class="briar-leaf" cx="18" cy="211" rx="7" ry="3.5" transform="rotate(-28 18 211)"/>
      <ellipse class="briar-leaf" cx="59" cy="421" rx="7" ry="3.5" transform="rotate(32 59 421)"/>
      <ellipse class="briar-leaf" cx="17" cy="645" rx="7" ry="3.5" transform="rotate(-34 17 645)"/>
      <ellipse class="briar-leaf" cx="57" cy="875" rx="7" ry="3.5" transform="rotate(27 57 875)"/>
    </svg>
    <i class="spool-crow-nudge"></i><i class="thorn-spool"></i>`;
  document.body.appendChild(thread);

  const vine=thread.querySelector('.briar-vine');
  const vineShadow=thread.querySelector('.briar-vine-shadow');
  const thorns=thread.querySelector('.briar-thorns');
  const leaves=[...thread.querySelectorAll('.briar-leaf')];
  const spool=thread.querySelector('.thorn-spool');
  const length=vine.getTotalLength();
  [vine,vineShadow].forEach(p=>{p.style.strokeDasharray=length;p.style.strokeDashoffset=length});
  thorns.style.opacity='0'; leaves.forEach(l=>l.style.opacity='0');

  let loosened=false;
  const loosen=()=>{if(loosened)return;loosened=true;thread.classList.add('loose')};
  const gateButton=document.getElementById('enterBriar');
  if(gateButton) gateButton.addEventListener('click',()=>setTimeout(loosen,850)); else setTimeout(loosen,700);

  const updateThread=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    const p=Math.min(1,Math.max(0,window.scrollY/max));
    const draw=Math.max(.03,p);
    const dash=length*(1-draw);
    vine.style.strokeDashoffset=dash;
    vineShadow.style.strokeDashoffset=dash;
    thorns.style.opacity=Math.min(1,p*4);
    leaves.forEach((leaf,i)=>leaf.style.opacity=Math.max(0,Math.min(1,p*5-i*.22)));
    const travel=Math.min(91,3+p*88);
    spool.style.top=`calc(${travel}% - 10px)`;
    spool.style.setProperty('--spool-rotate',(p*1280)+'deg');
  };
  updateThread();window.addEventListener('scroll',updateThread,{passive:true});window.addEventListener('resize',updateThread);
})();