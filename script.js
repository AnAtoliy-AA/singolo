const NAVBAR = document.getElementById('navbar');
const PICMENU = document.getElementById('picture-menu');
const PICTURES = document.getElementById('pictures');
const SLIDER = document.getElementById('slider');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');


NAVBAR.addEventListener('click', (event)=>{
  NAVBAR.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_selected'));
  event.target.classList.add('navigation__item_selected');
});

/*carousel*/

SLIDER.addEventListener('click', ()=>{
 /* SLIDER.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_selected'));*/
  SLIDER.style.backgroundImage = 'url(assets/layer4.png)';
});


PICMENU.addEventListener('click', (event)=>{
  PICMENU.querySelectorAll('button').forEach(el => el.classList.remove('button__selected'));
  event.target.classList.add('button__selected');
});

PICTURES.addEventListener('click', (event)=>{
  PICTURES.querySelectorAll('img').forEach(el => el.classList.remove('img__selected'));
  event.target.classList.add('img__selected');
});

BUTTON.addEventListener('click', ()=>{
  const subject = document.getElementById('subject').value.toString();
  const describe = document.getElementById('describe').value.toString();
  if (document.getElementById('subject').value.toString().length == 0) {
    document.getElementById('result1').innerText = ('Without topic');
  }
  else  document.getElementById('result1').innerText = ('Topic:' + subject);
 if (document.getElementById('describe').value.toString().length == 0){
  document.getElementById('result2').innerText = ('Without describe');
 }
  else document.getElementById('result2').innerText = ('Describe:' + describe);
  document.getElementById('message-block').classList.remove('hiden');
});
CLOSE_BUTTON.addEventListener('click', ()=>{
  document.getElementById('result1').innerText = '';
  document.getElementById('result2').innerText = '';
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