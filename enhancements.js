(() => {
  const cursor=document.createElement('div'); cursor.className='briar-cursor'; cursor.setAttribute('aria-hidden','true'); document.body.appendChild(cursor);
  let cursorX=innerWidth/2,cursorY=innerHeight/2,flyX=cursorX,flyY=cursorY,lastSpark=0;
  const driftFirefly=()=>{flyX+=(cursorX-flyX)*.18;flyY+=(cursorY-flyY)*.18;cursor.style.transform=`translate(${flyX}px,${flyY}px) translate(-50%,-50%)`;requestAnimationFrame(driftFirefly)};
  requestAnimationFrame(driftFirefly);
  window.addEventListener('pointermove',e=>{
    cursorX=e.clientX;cursorY=e.clientY;cursor.classList.add('awake');
    const now=performance.now();
    if(now-lastSpark>72&&Math.hypot(e.movementX||0,e.movementY||0)>3){
      lastSpark=now;const spark=document.createElement('i');spark.className='briar-cursor-spark';
      spark.style.left=e.clientX+'px';spark.style.top=e.clientY+'px';spark.style.setProperty('--spark-x',(-8+Math.random()*16)+'px');spark.style.setProperty('--spark-y',(8+Math.random()*14)+'px');
      document.body.appendChild(spark);setTimeout(()=>spark.remove(),650)
    }
  },{passive:true});
  document.addEventListener('pointerover',e=>cursor.classList.toggle('hover',!!e.target.closest('a,button,input,textarea,select,[role="button"]')));

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

    .clock-door{display:none!important;z-index:2!important;
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
      top:121px!important;width:96px!important;height:96px!important;
      background:transparent url("assets/briar-crow-real.svg?v=20260823-crystal-door-1") center/contain no-repeat!important;
      transform:translate(-50%,18px) scale(.38)!important;
      filter:drop-shadow(0 9px 8px rgba(0,0,0,.72)) drop-shadow(0 0 5px rgba(95,111,174,.22))!important;
      transition:.52s cubic-bezier(.16,.88,.24,1.18)!important;
    }
    .clock-crow:before,.clock-crow:after{content:none!important;display:none!important}
    .briar-clock.awake .clock-crow{opacity:1!important;transform:translate(-50%,0) scale(.88)!important}
    .briar-clock:hover .clock-crow,.briar-clock:focus-within .clock-crow{opacity:1!important;transform:translate(-50%,0) scale(.88)!important}
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

    .clock-pendulum{z-index:2!important;left:50%!important;top:390px!important;width:44px!important;height:95px!important;margin-left:-22px!important;background:transparent url("assets/crystal-pendulum-real.svg?v=20260823-real-1") center top/contain no-repeat!important;box-shadow:none!important;filter:drop-shadow(0 6px 7px rgba(0,0,0,.55)) drop-shadow(0 0 6px rgba(117,120,190,.25))!important;transform-origin:50% 3px!important;animation-duration:2.8s!important}
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
      .clock-crow{top:106px!important;width:82px!important;height:82px!important}
      .clock-face{top:222px!important;width:156px!important;height:156px!important;border-width:8px!important}
      .clock-face:before{height:44px!important}.clock-face:after{height:59px!important}
      .clock-pendulum{top:332px!important;width:38px!important;height:81px!important;margin-left:-19px!important}
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

  /* Ferret Faucet replaces the spool and follows the center path as the visitor walks. */
  thread.style.display='none';
  const ferretRunnerStyle=document.createElement('style');
  ferretRunnerStyle.textContent=`
    .ferret-path-runner{position:fixed;left:50%;top:42vh;width:clamp(86px,10vw,150px);aspect-ratio:2/3;z-index:43;pointer-events:none;opacity:0;background:url("assets/ferret-faucet-down.svg?v=20260823-1") center/contain no-repeat;mix-blend-mode:screen;filter:drop-shadow(0 12px 9px rgba(0,0,0,.62)) saturate(.78) brightness(.82);transform:translate(-50%,-50%) scale(var(--ferret-scale,.7)) rotate(var(--ferret-turn,0deg));transform-origin:50% 70%;transition:opacity .35s ease,background-image .12s linear;will-change:transform,left,top}
    .ferret-path-runner.visible{opacity:.92}
    .ferret-path-runner.returning{background-image:url("assets/ferret-faucet-run.svg?v=20260823-1")}
    .ferret-path-runner.running{animation:ferretScamper .3s ease-in-out infinite alternate}
    @keyframes ferretScamper{from{margin-top:-3px}to{margin-top:3px}}
    @media(max-width:760px){.ferret-path-runner{width:82px;top:48vh}}
    @media(prefers-reduced-motion:reduce){.ferret-path-runner{animation:none}}
  `;
  document.head.appendChild(ferretRunnerStyle);
  const ferretRunner=document.createElement('div');
  ferretRunner.className='ferret-path-runner';ferretRunner.setAttribute('aria-hidden','true');
  document.body.appendChild(ferretRunner);
  const updateFerretRunner=()=>{
    const start=(document.getElementById('cupcakes')?.offsetTop||window.innerHeight)-window.innerHeight*.35;
    const finish=(document.querySelector('.character-walk')?.offsetTop||document.documentElement.scrollHeight)-window.innerHeight*.25;
    const p=Math.min(1,Math.max(0,(window.scrollY-start)/Math.max(1,finish-start)));
    const onPath=window.scrollY>start&&window.scrollY<finish;
    ferretRunner.classList.toggle('visible',onPath);
    ferretRunner.style.left=`${50+Math.sin(p*Math.PI*5)*1.45}%`;
    ferretRunner.style.top=`${38+p*20}vh`;
    ferretRunner.style.setProperty('--ferret-scale',String(.54+p*.32));
    ferretRunner.style.setProperty('--ferret-turn',`${Math.sin(p*Math.PI*5)*-2.2}deg`);
  };
  let lastRunnerY=window.scrollY,runnerStopTimer;
  const runFerretWithScroll=()=>{
    const nextY=window.scrollY,delta=nextY-lastRunnerY;
    if(Math.abs(delta)>1){
      ferretRunner.classList.toggle('returning',delta<0);
      ferretRunner.classList.add('running');
      clearTimeout(runnerStopTimer);
      runnerStopTimer=setTimeout(()=>ferretRunner.classList.remove('running'),120);
      lastRunnerY=nextY;
    }
    updateFerretRunner();
  };
  updateFerretRunner();window.addEventListener('scroll',runFerretWithScroll,{passive:true});window.addEventListener('resize',updateFerretRunner);

  /* The Path — one continuous garden walk with discoveries on either bank. */
  const walkingLayout=document.createElement('style');
  walkingLayout.textContent=`
    main{position:relative!important;background:#050b07!important;isolation:isolate!important}
    main:before{display:block!important}
    .continuous-briar-background{display:none!important}
    main>section,#home,.character-walk,.forest-divider{position:relative!important;z-index:1!important}
    main>section:not(#home),.character-walk,.character-walk>section{background:transparent!important;background-color:transparent!important;background-image:none!important;backdrop-filter:none!important;border:0!important;box-shadow:none!important}
    main>section:not(#home):after{display:none!important}
    main>section:not(#home){min-height:92vh!important;padding-left:clamp(22px,5vw,74px)!important;padding-right:clamp(22px,5vw,74px)!important}
    .cupcake-inner,.feature-product,.story-section,.character-walk,.journal-grid,.contact-section{position:relative;z-index:2}
    .cupcake-copy,.feature-copy,.story-copy,.pawdrey-copy,.section-heading,.contact-copy,.journal-card,.ferret-faucet{background:transparent!important;background-image:none!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important}
    .cupcake-copy,.feature-copy,.story-copy,.pawdrey-copy,.section-heading,.contact-copy,.journal-card{filter:drop-shadow(0 3px 3px rgba(0,0,0,.92)) drop-shadow(0 0 14px rgba(0,0,0,.6))}
    .cupcake-copy p,.feature-copy p,.story-copy p,.pawdrey-copy p,.section-heading p,.contact-copy p,.journal-card p{color:#eee3d0!important;text-shadow:0 2px 4px #000,0 0 11px #000}
    .cupcake-copy h2,.feature-copy h3,.story-copy h2,.pawdrey-copy h2,.section-heading h2,.contact-copy h2,.journal-card h3{color:#f3dfac!important;text-shadow:0 3px 5px #000,0 0 18px rgba(0,0,0,.9)}
    #cupcakes{display:grid!important;align-items:center!important}
    #cupcakes .cupcake-inner{width:min(1420px,100%)!important;margin:auto!important;display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:clamp(110px,16vw,250px)!important;align-items:center!important}
    #cupcakes .cupcake-card{grid-column:1!important;grid-row:1!important;width:min(100%,500px)!important;justify-self:end!important;background:transparent!important;border:0!important;box-shadow:none!important}
    #cupcakes .cupcake-copy{grid-column:2!important;grid-row:1!important;max-width:510px!important;padding:0!important;align-self:center!important}
    #floor{padding-top:80px!important}
    #floor>.section-heading{width:min(560px,40vw)!important;margin:0 5vw 70px auto!important;text-align:left!important}
    .feature-product{width:min(1450px,100%)!important;max-width:none!important;min-height:76vh!important;margin:0 auto 8vh!important;display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:clamp(100px,15vw,240px)!important;align-items:center!important;overflow:visible!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
    .feature-product .feature-image,.feature-product .ocean-stage{grid-column:1!important;grid-row:1!important;order:0!important;justify-self:end!important;width:100%!important;max-width:570px!important}
    .feature-product .feature-copy{grid-column:2!important;grid-row:1!important;order:0!important;max-width:500px!important;padding:0!important;align-self:center!important}
    .feature-product:nth-of-type(even) .feature-image,.feature-product:nth-of-type(even) .ocean-stage{grid-column:2!important;justify-self:start!important}
    .feature-product:nth-of-type(even) .feature-copy{grid-column:1!important;justify-self:end!important;text-align:right!important}
    .feature-product .feature-image,.feature-product .ocean-stage,#cupcakes .cupcake-card{background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important}
    .feature-product .feature-image img,#cupcakes .cupcake-photo,.approved-ocean-gallery img{border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;filter:saturate(.96) contrast(1.03) drop-shadow(0 20px 22px rgba(0,0,0,.52))!important;mask-image:radial-gradient(ellipse 94% 91% at center,#000 66%,rgba(0,0,0,.94) 75%,rgba(0,0,0,.52) 88%,transparent 100%)!important;-webkit-mask-image:radial-gradient(ellipse 94% 91% at center,#000 66%,rgba(0,0,0,.94) 75%,rgba(0,0,0,.52) 88%,transparent 100%)!important}
    .feature-product.bloom .feature-image img{transform:rotate(-.7deg)!important}
    .feature-product.luna .feature-image img{transform:rotate(.65deg)!important}
    .approved-ocean-gallery{gap:0!important;overflow:visible!important}
    .approved-ocean-gallery .ocean-sales{transform:rotate(-.6deg)!important;margin-bottom:-2%!important}
    .approved-ocean-gallery .ocean-beauty{transform:rotate(.7deg)!important;margin-top:-2%!important}
    #cupcakes .cupcake-photo{transform:rotate(-.5deg)!important}
    #briar.atelier-section{min-height:86vh!important;padding:8vh 3vw!important;display:flex!important;align-items:center!important;justify-content:center!important;background:transparent!important}
    #briar .atelier-stage{position:relative!important;width:min(1500px,100%)!important;margin:auto!important}
    #briar .atelier-scene{display:block;width:100%!important;height:auto!important;max-height:82vh!important;object-fit:cover!important;border-radius:clamp(18px,3vw,46px)!important;box-shadow:0 34px 85px rgba(0,0,0,.58)!important;mask-image:radial-gradient(ellipse 94% 92% at center,#000 74%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 94% 92% at center,#000 74%,transparent 100%)}
    #briar .atelier-gallery{position:absolute!important;z-index:3!important;left:44%!important;right:5.5%!important;top:16%!important;bottom:14%!important;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:clamp(8px,1.4vw,24px)!important;align-items:center!important;pointer-events:auto!important}
    #briar .atelier-gallery.real-art-set{display:block!important;left:0!important;right:0!important;top:0!important;bottom:0!important;perspective:1100px!important;pointer-events:none!important}
    #briar .atelier-gallery.real-art-set figure{position:absolute!important;z-index:3!important;padding:clamp(2px,.32vw,6px)!important;border:1px solid rgba(218,174,91,.62)!important;background:linear-gradient(135deg,#563718,#171008 34%,#8b612b 62%,#241509)!important;box-shadow:8px 12px 17px rgba(0,0,0,.76),inset 0 0 0 2px rgba(10,6,3,.78)!important;transform-origin:center bottom!important;pointer-events:auto!important;cursor:pointer!important;transition:filter .2s,box-shadow .2s!important}
    #briar .atelier-gallery.real-art-set figure:before{content:""!important;position:absolute!important;inset:4px!important;z-index:2!important;pointer-events:none!important;box-shadow:inset 0 0 7px rgba(244,190,97,.22),inset 0 0 0 1px rgba(255,230,165,.18)!important}
    #briar .atelier-gallery.real-art-set figure:nth-child(1){left:55.2%!important;top:27%!important;width:10.5%!important;transform:rotateY(-2deg) rotate(-.7deg)!important}
    #briar .atelier-gallery.real-art-set figure:nth-child(2){left:66.2%!important;top:28%!important;width:5.5%!important;transform:rotateY(-5deg) rotate(.8deg)!important}
    #briar .atelier-gallery.real-art-set figure:nth-child(3){left:54.6%!important;top:48.5%!important;width:10.8%!important;transform:rotateY(-2deg) rotate(.45deg)!important}
    #briar .atelier-gallery.real-art-set figure:nth-child(4){left:47.2%!important;top:42%!important;width:5.8%!important;transform:rotateY(4deg) rotate(-1.2deg)!important}
    #briar .atelier-gallery.real-art-set figure:nth-child(5){left:66.4%!important;top:52.5%!important;width:5.2%!important;transform:rotateY(-5deg) rotate(.65deg)!important}
    #briar .atelier-gallery.real-art-set figure img{width:100%!important;height:auto!important;max-height:none!important;filter:sepia(.04) brightness(.84) contrast(1.04) saturate(.92)!important}
    #briar .atelier-gallery.real-art-set figcaption{display:none!important}
    #briar .atelier-gallery.real-art-set figure:hover,#briar .atelier-gallery.real-art-set figure:focus{z-index:8!important;filter:brightness(1.18)!important;box-shadow:9px 15px 24px rgba(0,0,0,.84),0 0 15px rgba(231,191,100,.18)!important;outline:1px solid rgba(242,211,137,.55)!important}
    #briar .atelier-gallery figure{margin:0!important;padding:clamp(5px,.7vw,11px)!important;background:linear-gradient(135deg,#806330,#291b0e 45%,#b4914d 70%,#34200e)!important;border:1px solid rgba(238,211,143,.7)!important;box-shadow:0 14px 30px rgba(0,0,0,.72),inset 0 0 0 2px rgba(23,12,5,.75)!important;transform:rotate(-1.2deg)!important}
    #briar .atelier-gallery figure:nth-child(2){transform:translateY(-8%) rotate(1deg)!important}
    #briar .atelier-gallery figure:nth-child(3){transform:translateY(6%) rotate(-.5deg)!important}
    #briar .atelier-gallery img{display:block!important;width:100%!important;aspect-ratio:auto!important;max-height:52vh!important;object-fit:contain!important;object-position:center!important;filter:none!important}
    #briar .atelier-gallery figcaption{padding:.55em .2em .15em!important;color:#ead7a2!important;font-family:Georgia,serif!important;font-size:clamp(.62rem,.85vw,1rem)!important;letter-spacing:.08em!important;text-align:center!important;text-shadow:0 2px 3px #000!important}
    #cupcakes,.feature-product{isolation:isolate!important}
    #cupcakes:before,.feature-product:before{content:""!important;display:block!important;position:absolute!important;z-index:0!important;inset:-7vh calc(50% - 50vw)!important;pointer-events:none!important;background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;filter:saturate(.94) contrast(1.05) brightness(.78)!important;mask-image:linear-gradient(180deg,transparent 0,#000 13%,#000 87%,transparent 100%)!important;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 13%,#000 87%,transparent 100%)!important}
    #cupcakes:before{background-image:linear-gradient(90deg,transparent 50%,rgba(1,6,4,.2)),url("assets/mushroom-pottery-zone.svg?v=20260823-1")!important}
    .feature-product.bloom:before{background-image:linear-gradient(90deg,rgba(1,5,3,.08),rgba(1,5,3,.18)),url("assets/story-scenes/03-briar-bloom.jpg?v=20260824-artmatch-1")!important}
    .feature-product.luna:before{background-image:linear-gradient(90deg,rgba(1,5,3,.18),rgba(1,5,3,.08)),url("assets/story-scenes/04-lunastray.jpg?v=20260824-artmatch-1")!important}
    .feature-product.ocean:before{background-image:linear-gradient(90deg,rgba(1,5,3,.08),rgba(1,5,3,.18)),url("assets/story-scenes/05-ocean-paws.jpg?v=20260824-artmatch-1")!important}
    #cupcakes .cupcake-inner,.feature-product>*{position:relative!important;z-index:1!important}
    .product-discovery{display:block!important;width:min(100%,560px)!important;height:auto!important;margin:auto!important;cursor:pointer!important;mask-image:none!important;-webkit-mask-image:none!important;filter:drop-shadow(0 24px 20px rgba(0,0,0,.7)) saturate(.96)!important;transition:transform .32s ease,filter .32s ease!important}
    .product-discovery:hover,.product-discovery:focus{transform:translateY(-7px) scale(1.025)!important;filter:drop-shadow(0 31px 25px rgba(0,0,0,.78)) saturate(1.04) brightness(1.05)!important;outline:none!important}
    .feature-product:not(.details-open) .feature-copy,#cupcakes:not(.details-open) .cupcake-copy{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:translateY(18px)!important}
    .feature-copy,.cupcake-copy{transition:opacity .42s ease,transform .42s ease,visibility .42s!important}
    .feature-product.details-open .feature-copy,#cupcakes.details-open .cupcake-copy{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translateY(0)!important}
    .feature-image:has(.product-discovery):after,.ocean-stage:has(.product-discovery):after,#cupcakes .cupcake-card:has(.product-discovery):after{content:"Click to discover"!important;display:block!important;margin-top:-2.1rem!important;text-align:center!important;color:#efdca9!important;font:600 .75rem/1.2 Georgia,serif!important;letter-spacing:.16em!important;text-transform:uppercase!important;text-shadow:0 2px 8px #000!important;opacity:.78!important;pointer-events:none!important}
    .details-open .feature-image:after,.details-open .ocean-stage:after,#cupcakes.details-open .cupcake-card:after{content:"Click to close"!important}
    .character-walk{min-height:100vh!important;padding:90px clamp(22px,5vw,74px)!important;display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:clamp(110px,16vw,250px)!important;align-items:center!important}
    .character-walk .pawdrey-section,.character-walk .briar-clock-section{min-width:0!important;padding:0!important;margin:0!important;display:block!important;text-align:left!important}
    .character-walk .pawdrey-section{grid-column:2!important;grid-row:1!important}
    .character-walk .briar-clock-section{grid-column:1!important;grid-row:1!important}
    .character-walk .pawdrey-image img{max-height:480px!important}
    .character-walk .pawdrey-copy{margin-top:28px!important}
    .character-walk .briar-clock{margin:0 auto!important;transform:scale(.88)}
    .journal-card{padding:24px 8px!important}
    .contact-form{background:rgba(2,8,6,.16)!important;border-color:rgba(225,208,159,.24)!important;box-shadow:none!important;backdrop-filter:none!important}
    footer{background:rgba(1,5,3,.36)!important;backdrop-filter:none!important}
    @media(max-width:820px){
      main{background:#07100a!important;overflow:hidden!important}
      #home{background:linear-gradient(180deg,transparent 68%,rgba(3,9,6,.72)),url("assets/briar-opening-gate-v3.svg?v=20260823-1") center/cover no-repeat!important}
      #cupcakes:before,.feature-product:before{inset:-28px -18px!important;background-size:cover!important;background-attachment:scroll!important;filter:saturate(.98) contrast(1.07) brightness(.82)!important;mask-image:linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent)!important;-webkit-mask-image:linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent)!important}
      .character-walk,#journal,#raven{background:linear-gradient(180deg,rgba(3,9,6,.18),rgba(3,9,6,.36)),url("assets/briar-path-background-v3.svg?v=20260823-1") center/cover scroll no-repeat!important}
      .continuous-briar-background{object-fit:fill!important}
      main>section:not(#home){min-height:0!important;padding-top:76px!important;padding-bottom:76px!important}
      #cupcakes .cupcake-inner,.feature-product,.character-walk{grid-template-columns:1fr!important;gap:34px!important}
      #cupcakes .cupcake-card,#cupcakes .cupcake-copy,.feature-product .feature-image,.feature-product .ocean-stage,.feature-product .feature-copy,.feature-product:nth-of-type(even) .feature-image,.feature-product:nth-of-type(even) .ocean-stage,.feature-product:nth-of-type(even) .feature-copy,.character-walk .pawdrey-section,.character-walk .briar-clock-section{grid-column:1!important;grid-row:auto!important;justify-self:center!important;text-align:left!important}
      #cupcakes .cupcake-card{grid-row:1!important}#cupcakes .cupcake-copy{grid-row:2!important}
      #floor>.section-heading{width:auto!important;margin:0 0 55px!important}
      .feature-product{min-height:0!important;margin-bottom:90px!important}
      .feature-product:nth-of-type(even) .feature-copy{text-align:left!important}
      #briar.atelier-section{min-height:0!important;padding:64px 14px!important}
      #briar .atelier-scene{border-radius:20px!important;mask-image:none;-webkit-mask-image:none}
      #briar .atelier-gallery{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;margin:-8px 8px 0!important;padding:18px 10px 8px!important;grid-template-columns:1fr!important;gap:24px!important;background:linear-gradient(180deg,rgba(15,23,14,.94),rgba(4,11,7,.78))!important;border-radius:0 0 18px 18px!important}
      #briar .atelier-gallery.real-art-set{display:grid!important;position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;grid-template-columns:1fr!important;pointer-events:auto!important}
      #briar .atelier-gallery figure,#briar .atelier-gallery figure:nth-child(2),#briar .atelier-gallery figure:nth-child(3),#briar .atelier-gallery.real-art-set figure:nth-child(4),#briar .atelier-gallery.real-art-set figure:nth-child(5){position:relative!important;left:auto!important;top:auto!important;grid-column:1!important;grid-row:auto!important;width:min(88%,430px)!important;margin:auto!important;transform:none!important}
      #briar .atelier-gallery.real-art-set figcaption{display:block!important}
      #briar .atelier-gallery img{aspect-ratio:auto!important;height:auto!important;object-fit:contain!important}
      #briar .atelier-gallery figcaption{font-size:1rem!important}
      .character-walk .briar-clock-section{grid-row:1!important}.character-walk .pawdrey-section{grid-row:2!important}
      .feature-product img,#cupcakes img{max-width:100%!important;height:auto!important}
      .feature-product .feature-image img,#cupcakes .cupcake-photo,.approved-ocean-gallery img{filter:saturate(.98) contrast(1.04) drop-shadow(0 13px 16px rgba(0,0,0,.48))!important;mask-image:radial-gradient(ellipse 97% 94% at center,#000 71%,rgba(0,0,0,.9) 82%,transparent 100%)!important;-webkit-mask-image:radial-gradient(ellipse 97% 94% at center,#000 71%,rgba(0,0,0,.9) 82%,transparent 100%)!important}
      .cupcake-copy,.feature-copy,.pawdrey-copy,.section-heading,.contact-copy{width:100%!important;max-width:100%!important}
    }

    /* Ten connected bird's-eye trail scenes */
    main{background:#06100b!important}
    main::before,main::after,.continuous-briar-background{display:none!important}
    #home,#briar,.magic-section,.character-walk,#journal,#raven{background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;background-attachment:scroll!important}
    #home{background-image:linear-gradient(180deg,rgba(1,5,3,.05),rgba(1,5,3,.34)),url("assets/briar-woods-background-v4.jpg?v=20260824-woodland-1")!important}
    #briar{background-image:linear-gradient(180deg,rgba(1,5,3,.08),rgba(1,5,3,.3)),url("assets/loom-briar-story-path-v2.jpg?v=20260824-woodland-1")!important}
    .feature-product.bloom:before{background-image:linear-gradient(90deg,rgba(1,5,3,.12),rgba(1,5,3,.2)),url("assets/loom-briar-moss-clearing-v2.jpg?v=20260824-woodland-1")!important}
    .feature-product.luna:before{background-image:linear-gradient(90deg,rgba(1,5,3,.2),rgba(1,5,3,.12)),url("assets/loom-briar-moss-clearing-v2.jpg?v=20260824-woodland-1")!important}
    .feature-product.ocean:before{background-image:linear-gradient(90deg,rgba(1,5,3,.12),rgba(1,5,3,.2)),url("assets/loom-briar-moss-clearing-v2.jpg?v=20260824-woodland-1")!important}
    #cupcakes:before{background-image:linear-gradient(90deg,rgba(1,5,3,.12),rgba(1,5,3,.2)),url("assets/loom-briar-moss-background-v1.jpg?v=20260824-woodland-1")!important}
    .magic-section{background-image:linear-gradient(180deg,rgba(1,5,3,.12),rgba(1,5,3,.3)),url("assets/loom-briar-story-path-v1.jpg?v=20260824-woodland-1")!important}
    .character-walk{background-image:linear-gradient(180deg,rgba(1,5,3,.1),rgba(1,5,3,.3)),url("assets/briar-woods-background-v4.jpg?v=20260824-woodland-1")!important;grid-template-columns:1fr!important}
    .character-walk .pawdrey-section{grid-column:1!important;max-width:1180px!important;margin:auto!important}
    .character-walk .briar-clock-section{display:none!important}
    #journal{background-image:linear-gradient(180deg,rgba(1,5,3,.12),rgba(1,5,3,.32)),url("assets/loom-briar-moss-background-v1.jpg?v=20260824-woodland-1")!important}
    #raven{background-image:linear-gradient(180deg,rgba(1,5,3,.12),rgba(1,5,3,.36)),url("assets/loom-briar-story-path-v2.jpg?v=20260824-woodland-1")!important}
    #home,#briar,.magic-section,.character-walk,#journal,#raven,#cupcakes,.feature-product{min-height:100svh!important}
    #cupcakes:before,.feature-product:before{inset:0 calc(50% - 50vw)!important;mask-image:none!important;-webkit-mask-image:none!important;filter:saturate(.96) contrast(1.03) brightness(.8)!important}
    @media(max-width:820px){
      #home,#briar,.magic-section,.character-walk,#journal,#raven{background-position:center top!important}
      #cupcakes:before,.feature-product:before{inset:0 -18px!important;background-position:center top!important}
    }

    /* Seam fixes: make the ten scenes read as one continuous trail */
    .forest-divider{display:none!important}
    main>section,.character-walk,.feature-product{margin-top:-2px!important;margin-bottom:-2px!important}
    main #home.hero{background-image:linear-gradient(180deg,rgba(1,5,3,.03),rgba(1,5,3,.3)),url("assets/briar-woods-background-v4.jpg?v=20260824-woodland-1")!important;background-position:center top!important;background-size:cover!important;background-repeat:no-repeat!important}
    main #home .hero-art{display:none!important}
    #floor{position:relative!important;background:#06100b url("assets/loom-briar-moss-clearing-v2.jpg?v=20260824-woodland-1") center/cover scroll no-repeat!important;margin-block:-2px!important}
    #floor:before{content:"";position:absolute;inset:-3px 0;background:linear-gradient(180deg,rgba(6,16,11,.18),rgba(6,16,11,.08));pointer-events:none}
    #floor>*{position:relative;z-index:1}
    #cupcakes:before,.feature-product:before{inset:-3px calc(50% - 50vw)!important}
    @media(max-width:820px){
      #cupcakes:before,.feature-product:before{inset:-3px -18px!important}
    }

    /* Fully seamless trail and free-floating product boxes */
    html,body,main{margin:0!important;padding:0!important;background:#06100b!important}
    main{overflow:hidden!important}
    main>section,main>div,.feature-product,.magic-section,.character-walk{
      border:0!important;outline:0!important;box-shadow:none!important;
      margin-block:-8px!important;
    }
    #home,#briar,#floor,#cupcakes,.magic-section,.character-walk,#journal,#raven{
      border:0!important;outline:0!important;box-shadow:none!important;
    }
    #floor{padding-top:8px!important;padding-bottom:8px!important}
    .feature-product{
      position:relative!important;background:transparent!important;
      border-radius:0!important;overflow:visible!important;
      padding-block:clamp(72px,9vw,130px)!important;
    }
    .feature-product:before,#cupcakes:before{
      inset:-12px calc(50% - 50vw)!important;
      background-size:cover!important;background-repeat:no-repeat!important;
    }
    .feature-image,.ocean-stage,.approved-ocean-gallery,
    .feature-product .feature-copy{
      background:transparent!important;border:0!important;outline:0!important;
      box-shadow:none!important;border-radius:0!important;
    }
    .feature-image:before,.feature-image:after,.ocean-stage:before,.ocean-stage:after,
    .feature-product .feature-copy:before,.feature-product .feature-copy:after{
      display:none!important;content:none!important;
    }
    .feature-image img,.ocean-stage img,.ocean-sales{
      display:block!important;width:min(100%,680px)!important;height:auto!important;
      object-fit:contain!important;margin:auto!important;border:0!important;
      outline:0!important;border-radius:0!important;background:transparent!important;
      box-shadow:none!important;filter:drop-shadow(0 22px 22px rgba(0,0,0,.48))!important;
    }
    .feature-product .feature-copy{
      padding:clamp(18px,3vw,34px)!important;
      text-shadow:0 2px 5px rgba(0,0,0,.95),0 0 18px rgba(0,0,0,.8)!important;
    }
    .feature-product .feature-copy p,.feature-product .feature-copy h3,
    .feature-product .feature-copy .price{filter:drop-shadow(0 2px 4px rgba(0,0,0,.85))}
    .forest-divider{display:none!important;height:0!important;min-height:0!important;padding:0!important;margin:0!important}
    @media(max-width:820px){
      main>section,main>div,.feature-product,.magic-section,.character-walk{margin-block:-6px!important}
      .feature-product:before,#cupcakes:before{inset:-10px -18px!important}
      .feature-product{padding-block:72px!important}
      .feature-image img,.ocean-stage img,.ocean-sales{width:min(94vw,620px)!important}
    }

    /* Organic tree-and-mist bridges cover every remaining scene join */
    #home,#briar,.feature-product,#cupcakes,.magic-section,.character-walk,#journal{
      position:relative!important;overflow:visible!important;
    }
    .mist-scene-seam{
      position:absolute;left:50%;bottom:-94px;transform:translateX(-50%);
      width:100vw;height:188px;z-index:18;pointer-events:none;
      background:
        linear-gradient(180deg,rgba(6,16,11,0) 0%,rgba(6,16,11,.1) 18%,rgba(6,16,11,.08) 78%,rgba(6,16,11,0) 100%),
        url("assets/loom-briar-story-path-v2.jpg?v=20260824-woodland-1") center/cover no-repeat;
      -webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 18%,#000 82%,transparent 100%);
      mask-image:linear-gradient(180deg,transparent 0%,#000 18%,#000 82%,transparent 100%);
      filter:saturate(.94) contrast(1.04);
    }
    @media(max-width:820px){
      .mist-scene-seam{height:150px;bottom:-75px;background-position:center center}
    }

    /* Fill the former dark clearings with visible forest depth */
    #floor,#journal,#raven{
      background:
        linear-gradient(180deg,rgba(2,8,5,.16),rgba(2,8,5,.28)),
        url("assets/loom-briar-story-path-v2.jpg?v=20260824-woodland-1") center/cover scroll no-repeat!important;
      background-color:#06100b!important;
    }
    #floor>.section-heading{
      max-width:none!important;width:100vw!important;
      margin-left:calc(50% - 50vw)!important;margin-right:calc(50% - 50vw)!important;
      padding:clamp(90px,12vw,170px) clamp(24px,14vw,220px)!important;
      margin-bottom:0!important;
      background:linear-gradient(90deg,rgba(2,8,5,.48),rgba(2,8,5,.12) 28%,rgba(2,8,5,.12) 72%,rgba(2,8,5,.48))!important;
    }
    #journal{background-position:center top!important}
    #raven{background-position:center bottom!important}
    .journal-card{
      border:0!important;outline:0!important;box-shadow:none!important;
      background:rgba(3,10,7,.42)!important;
      backdrop-filter:blur(2px)!important;
    }
    .journal-card:before,.journal-card:after{display:none!important;content:none!important}
    @media(max-width:820px){
      #floor,#journal,#raven{background-size:auto 100%!important}
      #floor>.section-heading{padding:90px 22px!important}
    }

    /* Remove the dark transition strip; repaired product cutouts remain visible */
    .mist-scene-seam{display:none!important}
    main>section,main>div,.feature-product,.magic-section,.character-walk{
      margin-top:0!important;margin-bottom:0!important;
    }
    .feature-image,.ocean-stage{min-height:clamp(330px,48vw,620px)!important;display:grid!important;place-items:center!important}
    .feature-image img,.ocean-stage img,.ocean-sales{
      display:block!important;visibility:visible!important;opacity:1!important;
      position:relative!important;z-index:4!important;
    }
  `;
  document.head.appendChild(walkingLayout);

  /* Forest transition bridges */
  document.querySelectorAll('#home,#briar,.feature-product.bloom,.feature-product.luna,.feature-product.ocean,#cupcakes,.magic-section,.character-walk,#journal').forEach(scene=>{
    if(!scene.querySelector(':scope > .mist-scene-seam')){
      const seam=document.createElement('div');
      seam.className='mist-scene-seam';
      seam.setAttribute('aria-hidden','true');
      scene.appendChild(seam);
    }
  });


  /* Products appear as discoveries in the scenery; details arrive only when opened. */
  document.querySelectorAll('.product-discovery').forEach(product=>{
    const owner=product.closest('.feature-product,#cupcakes');
    const toggle=()=>{const open=owner.classList.toggle('details-open');product.setAttribute('aria-expanded',String(open));if(open){owner.querySelector('.feature-copy,.cupcake-copy')?.scrollIntoView({behavior:'smooth',block:'nearest'})}};
    product.addEventListener('click',toggle);
    product.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();toggle()}});
  });

  /* Original art — small paintings on the Atelier wall, full-size when discovered. */
  const artLightbox=document.createElement('div');
  artLightbox.className='atelier-lightbox';artLightbox.hidden=true;
  artLightbox.innerHTML='<button class="atelier-lightbox-backdrop" type="button" aria-label="Close painting"></button><div class="atelier-lightbox-card" role="dialog" aria-modal="true" aria-label="Original Loom Briar painting"><button class="atelier-lightbox-close" type="button" aria-label="Close">×</button><img alt=""><p></p></div>';
  document.body.appendChild(artLightbox);
  const lightboxImage=artLightbox.querySelector('img'),lightboxTitle=artLightbox.querySelector('p');
  const closeArtwork=()=>{artLightbox.hidden=true;document.body.classList.remove('artwork-open')};
  document.querySelectorAll('#briar .atelier-gallery figure').forEach(frame=>{
    frame.tabIndex=0;frame.setAttribute('role','button');frame.setAttribute('aria-label','Enlarge '+(frame.querySelector('figcaption')?.textContent||'painting'));
    const open=()=>{const source=frame.querySelector('img');lightboxImage.src=source.src;lightboxImage.alt=source.alt;lightboxTitle.textContent=frame.querySelector('figcaption')?.textContent||'';artLightbox.hidden=false;document.body.classList.add('artwork-open');artLightbox.querySelector('.atelier-lightbox-close').focus()};
    frame.addEventListener('click',open);frame.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();open()}});
  });
  artLightbox.querySelector('.atelier-lightbox-backdrop').addEventListener('click',closeArtwork);
  artLightbox.querySelector('.atelier-lightbox-close').addEventListener('click',closeArtwork);
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&!artLightbox.hidden)closeArtwork()});
  const artLightboxStyle=document.createElement('style');artLightboxStyle.textContent=`
    .atelier-lightbox[hidden]{display:none!important}.atelier-lightbox{position:fixed;inset:0;z-index:2200;display:grid;place-items:center;padding:clamp(16px,4vw,52px)}
    .atelier-lightbox-backdrop{position:absolute;inset:0;border:0;background:rgba(1,5,3,.9);backdrop-filter:blur(8px)}
    .atelier-lightbox-card{position:relative;z-index:1;max-width:min(1100px,92vw);max-height:92vh;padding:clamp(8px,1.2vw,16px);background:linear-gradient(135deg,#6b4720,#1d1209 38%,#96703a 68%,#241409);border:1px solid rgba(239,209,137,.68);box-shadow:0 32px 90px #000}
    .atelier-lightbox-card img{display:block;max-width:100%;max-height:82vh;width:auto;height:auto;object-fit:contain;background:#090b08}
    .atelier-lightbox-card p{margin:.65rem .2rem .15rem;color:#f0dca7;text-align:center;font:600 clamp(1.1rem,2vw,1.55rem) Georgia,serif;letter-spacing:.05em}
    .atelier-lightbox-close{position:absolute;right:-13px;top:-13px;z-index:2;width:38px;height:38px;border-radius:50%;border:1px solid #d4ae69;background:#11140f;color:#f3dfac;font-size:1.5rem}
    body.artwork-open{overflow:hidden}
  `;document.head.appendChild(artLightboxStyle);
})();
