(() => {
  const cursor=document.createElement('div'); cursor.className='briar-cursor'; document.body.appendChild(cursor);
  window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button,input,textarea,select').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'))});

  const field=document.createElement('div'); field.className='firefly-field'; field.setAttribute('aria-hidden','true'); document.body.appendChild(field);
  for(let i=0;i<24;i++){const f=document.createElement('i');f.className='firefly';f.style.left=(Math.random()*100)+'vw';f.style.top=(15+Math.random()*82)+'vh';f.style.setProperty('--dx',(-70+Math.random()*140)+'px');f.style.setProperty('--dy',(-90+Math.random()*180)+'px');f.style.setProperty('--dur',(5+Math.random()*8)+'s');f.style.animationDelay=(-Math.random()*8)+'s';field.appendChild(f)}

  const clock=document.querySelector('.briar-clock'); const button=document.getElementById('wakeCrow');
  if(clock&&button){const wake=()=>{clock.classList.add('awake');button.textContent='The crow is out';setTimeout(()=>{clock.classList.remove('awake');button.textContent='Call the Crow'},3600)};button.addEventListener('click',wake);clock.addEventListener('click',e=>{if(e.target!==button)wake()})}
})();
