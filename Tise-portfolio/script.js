const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-card');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;cards.forEach(card=>card.classList.toggle('hidden',filter!=='all'&&!card.dataset.category.includes(filter)))}));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav-link')];
window.addEventListener('scroll',()=>{let current='top';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))},{passive:true});

const quotes=[...document.querySelectorAll('.quote')];let index=0;
function showQuote(i){quotes.forEach((q,n)=>q.style.display=n===i?'block':'none')}
document.getElementById('next').addEventListener('click',()=>{index=(index+1)%quotes.length;showQuote(index)});
document.getElementById('prev').addEventListener('click',()=>{index=(index-1+quotes.length)%quotes.length;showQuote(index)});
if(innerWidth<=760)showQuote(0);
window.addEventListener('resize',()=>{if(innerWidth<=760)showQuote(index);else quotes.forEach(q=>q.style.display='block')});
