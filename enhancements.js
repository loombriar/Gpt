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
