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

  const thread=document.createElement('div');
  thread.className='briar-thread';thread.setAttribute('aria-hidden','true');
  thread.innerHTML='<i class="spool-crow-nudge"></i><i class="briar-thread-line"></i><i class="thorn-spool"></i>';
  document.body.appendChild(thread);
  let loosened=false;
  const loosen=()=>{if(loosened)return;loosened=true;thread.classList.add('loose')};
  const gateButton=document.getElementById('enterBriar');
  if(gateButton) gateButton.addEventListener('click',()=>setTimeout(loosen,850)); else setTimeout(loosen,700);
  const updateThread=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    const p=Math.min(1,Math.max(0,window.scrollY/max));
    const travel=Math.min(86,5+p*81);
    thread.style.setProperty('--thread-length',travel+'%');
    thread.style.setProperty('--spool-y',travel+'%');
    thread.style.setProperty('--spool-rotate',(p*900)+'deg');
  };
  updateThread();window.addEventListener('scroll',updateThread,{passive:true});window.addEventListener('resize',updateThread);
})();
