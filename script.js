const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

document.querySelector('#year').textContent=new Date().getFullYear();

const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(target){
    event.preventDefault();
    target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
  }
}));
