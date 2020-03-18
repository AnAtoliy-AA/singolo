

/*const SLIDER = document.querySelector('.slider');
const IPHONE = document.querySelector('layer__vertical')*/





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
      /*
      if (clickedButton.innerText === 'All') {
        showStandardPicturesOrder();
      } else {
        filterPicturesBySelectedButton(portfolioPictures);
      }
      */
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

/*
const showStandardPicturesOrder = () => {
  portfolioPictures.classList.remove('wrap__reverse');
}
*/

//RED BORDER PORTFOLIO PICTURES

portfolioPictures.addEventListener('click', (event) => {
  portfolioPictures.querySelectorAll('img').forEach(el => {
    el.classList.remove('img__selected')
  });
  event.target.classList.add('img__selected');
});





//SUBMIT FORM

/*
function submitForm(event) {
  event.preventDefault();
}*/


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








/*

SLIDER.addEventListener('click', () => {
  SLIDER.querySelectorAll('.arrow').forEach(el => el.classList.remove('navigation__item_selected'));
  SLIDER.style.backgroundImage = 'url(assets/layer4.png)';


  IPHONE.addEventListener('click', () => {
    SLIDER.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_selected'));
    IPHONE.classList.add('.hidden');
  });

  window.onload = function () {
    addButtonsClickHandler();
  }
  pictures

  let slideIndex = 1;
  showSlides(slideIndex);

  Next / previous controls
  const plusSlides(n) {
    showSlides(slideIndex += n);
  }

  Thumbnail image controls
  const currentSlide(n) {
    showSlides(slideIndex = n);
  }

  const showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }


*/

