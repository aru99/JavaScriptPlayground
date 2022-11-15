'use strict';

const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// -----------------------Modal window------------------------------------

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ------------------Smooth scrolling-----------------
// old school way

// eventlistener for scroll
btnScroolTo.addEventListener('click', function (e) {
  // getting coordinates to where we want to scroll
  // const s1coords = section1.getBoundingClientRect();
  // scrolling
  // scrollTo(left_coordinates, top_coordinattes), always add the window.pageXoffset and window.pageYoffset to break the dependency of viewport dependency
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // new way to do the same, only works on modern browsers.
  section1.scrollIntoView({ behavior: 'smooth' });
});

//------------------- page navigation--------------
//wihtout event delegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     // preventing the default anchor scroll  bahaviour
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// with event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////////////////////////////

/*
const header = document.querySelector('header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.padding = '1rem';

//increasing the height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
  
  // Smooth scrolling
// old school way

const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// eventlistener for scroll
btnScroolTo.addEventListener('click', function (e) {
  // getting coordinates to where we want to scroll
  const s1coords = section1.getBoundingClientRect();
  // scrolling
  // scrollTo(left_coordinates, top_coordinattes), always add the window.pageXoffset and window.pageYoffset to break the dependency of viewport dependency
  // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );
    // window.scrollTo({
      //   left: s1coords.left + window.pageXOffset,
      //   top: s1coords.top + window.pageYOffset,
      //   behavior: 'smooth',
      // });
      
      // new way to do the same, only works on modern browsers.
      section1.scrollIntoView({ behavior: 'smooth' });
    });
    
    // mouse Enterevent
    const h1 = document.querySelector('h1');
    h1.addEventListener('mouseenter', function (e) {
      // h1.style.color = 'orangered';
    });
    
    // bubbling
    const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
    
    const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
    
    document.querySelector('.nav__link').addEventListener('click', function (e) {
      this.style.backgroundColor = randomColor();
      e.stopPropagation();
    });
    
    document.querySelector('.nav__links').addEventListener('click', function (e) {
      this.style.backgroundColor = randomColor();
    });
    
    document.querySelector('.nav').addEventListener('click', function (e) {
      this.style.backgroundColor = randomColor();
    });
    */
