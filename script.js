const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');


MENU.addEventListener('click', (event)=>{
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_selected'));
  event.target.classList.add('navigation__item_selected');
});

BUTTON.addEventListener('click', ()=>{
  const subject = document.getElementById('subject').value.toString;
  document.getElementById('result').innerText = subject;
  document.getElementById('message-block').classList.remove('hiden');
});
CLOSE_BUTTON.addEventListener('click', ()=>{
  document.getElementById('result').innerText = '';
  document.getElementById('message-block').classList.add('hiden');
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