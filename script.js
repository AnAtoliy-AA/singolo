
document.addEventListener('scroll', onScroll);
const sectionSelector = document.querySelectorAll('#main>section');
const navbarLinks = document.querySelectorAll('#navbar a');
const iphoneScreenIsON = document.querySelector('.iphone__layer');
const iphoneScreenIsOFF = document.querySelector('.iphone__layer>img');
const portfolioPictures = document.querySelector('.portfolio__pictures');


// NAVBAR
function onScroll(event) {
  const currentPosition = window.scrollY;

  sectionSelector.forEach((el) => {
    el.getAttribute('id');
    if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
      navbarLinks.forEach((a) => {
        a.classList.remove('navigation__item_selected');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('navigation__item_selected');
        }
      })
    }
  });
}

//CAROUSEL

const carouselItems = document.querySelectorAll('.carousel__item');
const arrowLeft = document.querySelector('.slider__arrow.left');
const arrowRight = document.querySelector('.slider__arrow.right');
let activeItem = 0;
let isEnabled = true;

function changeActiveItem(n) {
  activeItem = (n + carouselItems.length) % carouselItems.length;
}

function hideItem(direction) {
  isEnabled = false;
  carouselItems[activeItem].classList.add(direction);
  carouselItems[activeItem].addEventListener('animationend', function() {
    this.classList.remove('carousel__item_active', direction);
  })
}

function showItem(direction) { 
  carouselItems[activeItem].classList.add('carousel__item_next',direction);
  carouselItems[activeItem].addEventListener('animationend', function() {
    this.classList.remove('carousel__item_next', direction);
    this.classList.add('carousel__item_active');
    isEnabled = true;
  })
}
function nextItem(n) {
  hideItem('animation__to-right');
  changeActiveItem(n - 1);
  showItem('animation__from-left');
}
arrowLeft.addEventListener('click', function () {
  if (isEnabled) {
    previousItem(activeItem);
  }
});

function previousItem(n) {
  hideItem('animation__to-left');
  changeActiveItem(n + 1);
  showItem('animation__from-right');
}
arrowRight.addEventListener('click', function () {
  if (isEnabled) {
    nextItem(activeItem);
  }
});




//iPHONE SCREEN
iphoneScreenIsON.addEventListener('click', () => {
  iphoneScreenIsOFF.classList.toggle("hidden")
})

//PORTFOLIO PICTURES

window.onload = function () {
  addButtonsClickHandler();
}
const addButtonsClickHandler = () => {
  document.querySelector('.portfolio__buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      let clickedButton = e.target;
      removeSelectedButtons();
      selectClickedButton(clickedButton);
      filterPicturesBySelectedButton(portfolioPictures);
       }
  })
}
const removeSelectedButtons = () => {
  let buttons = document.querySelectorAll('.portfolio__buttons .button');
  buttons.forEach(button => {
    button.classList.remove('button__selected');
  })
}
const selectClickedButton = (clickedButton) => {
  clickedButton.classList.add('button__selected');
}

//SHUFFLE PICTURES
const filterPicturesBySelectedButton = (list) => {

  for (let i = 0; i <= list.children.length; i++) {
    list.appendChild(list.children[Math.random() * i | 0]);
  }
}

//RED BORDER PORTFOLIO PICTURES

portfolioPictures.addEventListener('click', (event) => {
  portfolioPictures.querySelectorAll('img').forEach(el => {
    el.classList.remove('img__selected')
  });
  event.target.classList.add('img__selected');
});

//SUBMIT FORM

const submitButton = document.getElementById('btn');

const contactForm = document.getElementById('contact-form');
const messageName = document.getElementById('message-name');
const message_block = document.getElementById('message-block');
const formResultSubject = document.getElementById('result-subject');
const formResultDescribe = document.getElementById('result-describe');
const closeButton = document.getElementById('close-btn');

submitButton.addEventListener('click', () => {
  event.preventDefault();
  message_block.classList.remove('hidden');
  const quote_name = document.getElementById('quote_name').value.toString();
  const quote_email = document.getElementById('quote_email').value.toString();
  const subject = document.getElementById('subject').value.toString();
  const describe = document.getElementById('describe').value.toString();

  if ((quote_name.length === 0) || (quote_email.length === 0)) {
    messageName.innerText = ('PLEASE ENTER REQUIRED INFORMATION');
  }
  else {
    messageName.innerText = ('The letter was sent');
  }
  if (subject.length === 0) {
    formResultSubject.innerText = ('Without topic');
  }
  else {
    formResultSubject.innerText = ('Topic:' + subject);
  }

  if (describe.length === 0) {
    formResultDescribe.innerText = ('Without describe');
  }
  else {
    formResultDescribe.innerText = ('Describe:' + describe);
  }
});

closeButton.addEventListener('click', () => {
  contactForm.reset();
  message_block.classList.add('hidden');
});


