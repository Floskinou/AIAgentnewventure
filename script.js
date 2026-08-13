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
const revealElements=[...document.querySelectorAll('.reveal')];
if(reduced){
  revealElements.forEach(element=>element.classList.add('is-visible'));
}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }),{threshold:.12,rootMargin:'0px 0px -40px'});

  revealElements.forEach(element=>{
    const rect=element.getBoundingClientRect();
    if(rect.top<window.innerHeight&&rect.bottom>0){
      element.classList.add('is-visible');
    }else{
      observer.observe(element);
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(target){
    event.preventDefault();
    target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
  }
}));
