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
    .briar-clock-section>.section-heading,.briar-clock-section>.clock-button,.briar-clock-section>.ferret-faucet{display:none!important}

    .briar-clock{
      width:min(470px,94vw)!important;height:610px!important;margin:0 auto!important;
      filter:drop-shadow(0 38px 58px rgba(0,0,0,.76))!important;
      transform:translateZ(0);position:relative!important;
    }
    .briar-clock:before,.briar-clock:after{content:"";position:absolute;pointer-events:none}
    .briar-clock:before{z-index:0;inset:0;left:50%;width:min(407px,87vw);height:610px;transform:translateX(-50%);background:url("assets/briar-clock-real.svg?v=20260823-muted-crystal-1") center/100% 100% no-repeat;filter:drop-shadow(0 0 20px rgba(89,105,175,.2)) drop-shadow(0 0 10px rgba(139,102,168,.14));border-radius:42%}
    .briar-clock:after{left:50%;bottom:44px;width:280px;height:48px;transform:translateX(-50%);border-radius:50%;background:rgba(0,0,0,.5);filter:blur(13px)}

    .clock-house{display:none!important;
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

    .clock-door{z-index:2!important;
      top:126px!important;width:103px!important;height:72px!important;
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
    .briar-clock:hover .clock-door:before,.briar-clock:focus-within .clock-door:before{transform:perspective(130px) rotateY(-82deg)!important}
    .briar-clock:hover .clock-door:after,.briar-clock:focus-within .clock-door:after{transform:perspective(130px) rotateY(82deg)!important}

    .clock-crow{z-index:3!important;
      top:145px!important;width:74px!important;height:50px!important;
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
    .briar-clock:hover .clock-crow,.briar-clock:focus-within .clock-crow{opacity:1!important;transform:translate(-50%,-39px) scale(1)!important}
    .crow-discount{position:absolute;z-index:8;right:-128px;top:142px;width:176px;padding:14px 15px;border:1px solid rgba(202,174,119,.56);border-radius:3px 18px 3px 18px;background:linear-gradient(145deg,rgba(12,18,29,.96),rgba(29,20,42,.97));box-shadow:0 16px 38px rgba(0,0,0,.58),0 0 22px rgba(123,105,184,.2);color:#ded4bf;text-align:center;font:500 .78rem/1.35 Inter,sans-serif;opacity:0;transform:translate(-16px,8px) scale(.86);animation:discountReveal .65s .35s cubic-bezier(.16,.88,.24,1.16) forwards;pointer-events:none}
    .crow-discount strong{display:block;margin:.15rem 0;color:#f0dfb5;font:700 1.45rem/1.05 "Cormorant Garamond",serif}.crow-discount code{display:inline-block;margin-top:7px;padding:5px 9px;border:1px dashed rgba(223,203,156,.5);color:#fff0c7;background:rgba(255,255,255,.04);font:bold .82rem Inter,sans-serif;letter-spacing:.12em}.crow-discount small{display:block;margin-top:6px;color:#a99cb6;font-size:.62rem}
    @keyframes discountReveal{to{opacity:1;transform:translate(0,0) scale(1)}}

    .clock-face{display:none!important;
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

    .clock-pendulum{z-index:2!important;left:50%!important;top:369px!important;width:70px!important;height:154px!important;margin-left:-35px!important;background:transparent url("assets/crystal-pendulum-real.svg?v=20260823-real-1") center top/contain no-repeat!important;box-shadow:none!important;filter:drop-shadow(0 7px 8px rgba(0,0,0,.58)) drop-shadow(0 0 8px rgba(117,120,190,.32))!important;transform-origin:50% 3px!important;animation-duration:2.8s!important}
    .clock-pendulum:before,.clock-pendulum:after{content:none!important;display:none!important}

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
      .briar-clock:before{width:347px;height:520px}
      .clock-house{width:292px!important;height:374px!important;top:70px!important}
      .clock-door{top:107px!important;width:88px!important;height:61px!important}
      .clock-crow{top:122px!important}
      .clock-face{top:222px!important;width:156px!important;height:156px!important;border-width:8px!important}
      .clock-face:before{height:44px!important}.clock-face:after{height:59px!important}
      .clock-pendulum{top:315px!important;width:58px!important;height:128px!important;margin-left:-29px!important}
      .crow-discount{right:4px;top:166px;width:160px}
      .clock-house:before{left:23px!important;right:23px!important;height:45px!important}
    }
  `;
  document.head.appendChild(clockPolish);

  const clock=document.querySelector('.briar-clock');
  if(clock){
    clock.setAttribute('tabindex','0');
    let discountChecked=false;
    const tryCrowGift=()=>{
      if(discountChecked)return;discountChecked=true;
      try{if(sessionStorage.getItem('loomBriarCrowChecked'))return;sessionStorage.setItem('loomBriarCrowChecked','1')}catch(e){}
      if(Math.random()>=.15)return;
      const gift=document.createElement('div');gift.className='crow-discount';gift.setAttribute('role','status');
      gift.innerHTML='<span>A gift from the crow</span><strong>10% off</strong><code>CROW10</code><small>Mention this code when you send a raven.</small>';
      clock.appendChild(gift);
    };
    clock.addEventListener('pointerenter',tryCrowGift,{once:true});clock.addEventListener('focus',tryCrowGift,{once:true});
  }

  /* The Briar Thread — a spool that tumbles while a thorned vine unravels down the page */
  const thornStyle=document.createElement('style');
  thornStyle.textContent=`
    .briar-thread{position:fixed!important;left:4px!important;top:76px!important;width:82px!important;height:calc(100vh - 86px)!important;z-index:44!important;pointer-events:none!important;opacity:0!important;transition:opacity .9s ease!important;overflow:visible!important}
    .briar-thread.loose{opacity:.9!important}
    .briar-vine-svg{position:absolute;inset:0;width:82px;height:100%;overflow:visible}
    .briar-vine-shadow{fill:none;stroke:rgba(0,0,0,.62);stroke-width:8;stroke-linecap:round;stroke-linejoin:round}
    .briar-vine{fill:none;stroke:url(#briarVineGradient);stroke-width:5.2;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 1px 2px rgba(0,0,0,.75))}
    .briar-vine-highlight{fill:none;stroke:rgba(184,116,66,.52);stroke-width:1.15;stroke-linecap:round;stroke-dasharray:3 8}
    .briar-bark{fill:none;stroke:rgba(31,15,9,.72);stroke-width:1.3;stroke-linecap:round;stroke-dasharray:1 10}
    .briar-thorn{fill:url(#thornGradient);stroke:#32170d;stroke-width:.65;filter:drop-shadow(0 1px 1px rgba(0,0,0,.85))}
    .briar-leaf{fill:#334a2e;stroke:#172219;stroke-width:1.1;filter:drop-shadow(0 2px 2px rgba(0,0,0,.72))}
    .thorn-spool{position:absolute!important;left:0;top:0;width:72px!important;height:72px!important;overflow:visible!important;border:0!important;background:transparent url("assets/thorn-spool-real.svg?v=20260823-1") center/contain no-repeat!important;filter:drop-shadow(0 9px 8px rgba(0,0,0,.72)) drop-shadow(0 0 8px rgba(91,119,63,.18))!important;transform:translate(-50%,-50%) rotate(var(--spool-rotate,0deg))!important;transform-origin:center!important;will-change:top,left,transform!important}
    .thorn-spool:before,.thorn-spool:after{content:none!important;display:none!important}
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
          <stop offset="0" stop-color="#160d08"/><stop offset=".28" stop-color="#4b2615"/><stop offset=".52" stop-color="#8a5130"/><stop offset=".72" stop-color="#422416"/><stop offset="1" stop-color="#171009"/>
        </linearGradient>
        <linearGradient id="thornGradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#442214"/><stop offset=".55" stop-color="#9c5b35"/><stop offset="1" stop-color="#d29a68"/></linearGradient>
        <clipPath id="briarReveal"><rect class="briar-reveal" x="0" y="0" width="82" height="0"/></clipPath>
      </defs>
      <path class="briar-vine-shadow" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <path class="briar-vine" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <path class="briar-vine-highlight" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <path class="briar-bark" d="M39 0 C18 90,62 155,34 245 C12 316,61 384,37 470 C14 552,62 621,35 704 C16 775,58 840,33 928 C27 952,36 978,39 1000"/>
      <g clip-path="url(#briarReveal)"><path class="briar-thorn" d="M31 104 L14 89 L28 110 Z M45 157 L61 139 L48 164 Z M28 271 L12 283 L31 278 Z M49 352 L66 363 L47 359 Z M29 488 L13 472 L27 496 Z M47 569 L63 552 L49 577 Z M28 715 L12 727 L31 722 Z M46 812 L63 824 L44 819 Z M31 918 L14 903 L29 926 Z"/><ellipse class="briar-leaf" cx="18" cy="211" rx="8" ry="4" transform="rotate(-28 18 211)"/><ellipse class="briar-leaf" cx="59" cy="421" rx="8" ry="4" transform="rotate(32 59 421)"/><ellipse class="briar-leaf" cx="17" cy="645" rx="8" ry="4" transform="rotate(-34 17 645)"/><ellipse class="briar-leaf" cx="57" cy="875" rx="8" ry="4" transform="rotate(27 57 875)"/></g>
    </svg>
    <i class="spool-crow-nudge"></i><i class="thorn-spool"></i>`;
  document.body.appendChild(thread);

  const vine=thread.querySelector('.briar-vine');
  const vineShadow=thread.querySelector('.briar-vine-shadow');
  const vineHighlight=thread.querySelector('.briar-vine-highlight');
  const bark=thread.querySelector('.briar-bark');
  const reveal=thread.querySelector('.briar-reveal');
  const spool=thread.querySelector('.thorn-spool');
  const length=vine.getTotalLength();
  [vine,vineShadow,vineHighlight,bark].forEach(p=>{p.style.strokeDasharray=length;p.style.strokeDashoffset=length});

  let loosened=false;
  const loosen=()=>{if(loosened)return;loosened=true;thread.classList.add('loose')};
  const gateButton=document.getElementById('enterBriar');
  if(gateButton) gateButton.addEventListener('click',()=>setTimeout(loosen,850)); else setTimeout(loosen,700);

  const updateThread=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    const p=Math.min(1,Math.max(0,window.scrollY/max));
    const draw=Math.max(.03,p);
    const dash=length*(1-draw);
    [vine,vineShadow,vineHighlight,bark].forEach(path=>path.style.strokeDashoffset=dash);
    reveal.setAttribute('height',String(1000*draw));
    const point=vine.getPointAtLength(length*draw);
    spool.style.left=`${point.x}px`;
    spool.style.top=`${point.y/10}%`;
    const renderedDistance=length*draw*(thread.clientHeight/1000);
    const turns=renderedDistance/(Math.PI*72);
    spool.style.setProperty('--spool-rotate',`${turns*360}deg`);
  };
  updateThread();window.addEventListener('scroll',updateThread,{passive:true});window.addEventListener('resize',updateThread);
})();
