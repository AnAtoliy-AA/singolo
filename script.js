const MENU = document.getElementById('menu');



MENU.addEventListener('click', (event)=>{
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_selected'));
  event.target.classList.add('navigation__item_selected');
});






/*
let step = 0;
const infoLogger = (event) => {
    step++;
    console.log(`step-${step}`, event.target);
  document.querySelectorAll('a').forEach(a => a.style.classList.remove('navigation__item_selected'));
   
   event.target.style.classList.add('navigation__item_selected');
}

document.querySelector('nav').addEventListener('click', infoLogger);
*/