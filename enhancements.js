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

  /* Clock refinement pass: larger, richer, and without the dead vertical space. */
  const clockPolish=document.createElement('style');
  clockPolish.textContent=`
    .briar-clock-section{
      min-height:0!important;height:auto!important;
      padding:88px clamp(20px,6vw,90px) 96px!important;
      background:
        radial-gradient(circle at 50% 18%,rgba(208,177,105,.09),transparent 25%),
        radial-gradient(circle at 50% 28%,rgba(68,108,58,.28),transparent 42%),
        linear-gradient(180deg,#031009 0%,#020705 55%,#020504 100%)!important;
      overflow:hidden!important;
    }
    .briar-clock-section>.section-heading{max-width:760px!important;margin:0 auto 22px!important}
    .briar-clock-section>.section-heading h2{font-size:clamp(3rem,6vw,5.6rem)!important;line-height:.92!important}
    .briar-clock{
      width:min(430px,92vw)!important;height:565px!important;margin:26px auto 12px!important;
      filter:drop-shadow(0 34px 50px rgba(0,0,0,.68))!important;
      transform:translateZ(0);
    }
    .clock-house{
      left:50%!important;top:82px!important;width:330px!important;height:420px!important;
      transform:translateX(-50%)!important;
      clip-path:polygon(50% 0,94% 21%,89% 100%,11% 100%,6% 21%)!important;
      background:
        linear-gradient(90deg,rgba(0,0,0,.36),transparent 18% 82%,rgba(0,0,0,.36)),
        repeating-linear-gradient(90deg,#29190f 0 18px,#3c2516 18px 34px,#4a2c19 34px 51px,#302014 51px 68px)!important;
      border:2px solid rgba(182,134,75,.5)!important;
      box-shadow:inset 0 0 0 3px rgba(20,11,6,.6),inset 0 0 54px rgba(0,0,0,.46),0 15px 35px rgba(0,0,0,.4)!important;
    }
    .clock-house:before{
      left:24px!important;right:24px!important;top:-14px!important;height:48px!important;
      background:linear-gradient(180deg,#536640 0%,#35482b 58%,#1d2a18 100%)!important;
      box-shadow:0 7px 0 rgba(15,25,14,.8),0 0 24px rgba(116,153,78,.28)!important;
    }
    .clock-house:after{left:35px!important;right:35px!important;bottom:22px!important;height:34px!important;opacity:.72!important}
    .clock-door{
      top:126px!important;width:112px!important;height:78px!important;
      border:5px solid #533522!important;border-radius:58px 58px 8px 8px!important;
      box-shadow:0 8px 18px rgba(0,0,0,.55),inset 0 0 18px #000!important;
    }
    .clock-door:before,.clock-door:after{border-color:#7b5130!important;background:linear-gradient(90deg,#2b1b11,#56351f)!important}
    .clock-crow{
      top:147px!important;width:82px!important;height:54px!important;
      transform:translate(-50%,22px) scale(.34)!important;
      filter:drop-shadow(0 8px 7px rgba(0,0,0,.65))!important;
    }
    .clock-crow:before{width:54px!important;height:39px!important;box-shadow:25px 11px 0 -10px #090d0d!important}
    .clock-crow:after{right:-17px!important;top:11px!important;border-left-width:22px!important;border-top-width:6px!important;border-bottom-width:6px!important}
    .briar-clock.awake .clock-crow{opacity:1!important;transform:translate(-50%,-34px) scale(1)!important}
    .clock-face{
      top:245px!important;width:178px!important;height:178px!important;
      border-width:9px!important;box-shadow:0 0 0 3px #9f7944,inset 0 0 0 3px rgba(255,244,210,.45),0 10px 28px rgba(0,0,0,.5)!important;
    }
    .clock-face:before,.clock-face:after{width:5px!important;left:50%!important}
    .clock-face:before{height:50px!important}.clock-face:after{height:67px!important}
    .clock-pendulum{top:406px!important;height:112px!important;width:3px!important}
    .clock-pendulum:after{width:32px!important;height:32px!important;bottom:-16px!important}
    .clock-button{margin-top:4px!important;min-width:150px!important}
    .ferret-faucet{margin-top:34px!important}
    .journal-section,.contact-section{min-height:0!important;height:auto!important}
    .journal-section:empty,.contact-section:empty{display:none!important}
    @media(max-width:620px){
      .briar-clock{width:min(350px,94vw)!important;height:485px!important}
      .clock-house{width:275px!important;height:350px!important;top:76px!important}
      .clock-door{top:114px!important;width:96px!important;height:68px!important}
      .clock-crow{top:135px!important}
      .clock-face{top:214px!important;width:150px!important;height:150px!important}
      .clock-pendulum{top:350px!important;height:94px!important}
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
