'use strict';

const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
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

// Tabbed component----------------------

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if (!clicked) {
    return;
  }

  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');
  // active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  // console.log(clicked);
  // console.log(clicked.dataset);
});

//-----menu fade effect----
const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// passing argument into handler function
// nav.addEventListener('mouseover', handelHover.bind(0.5));
// nav.addEventListener('mouseout', handelHover.bind(1));

// //----- sticky navigation -----

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//callback function for intersectionObserver
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

// IntersectionObserver API
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ----- reveal sections-----

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove('section--hidden');
  }
  observer.unobserve(entry.target);
};

// Intersection observer API
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
// -----Lazy loading images-----
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    return;
  } else {
    //replace src with data-src
    entry.target.src = entry.target.dataset.src;
    // javascript would replace the image in the backend, it would notify the image being loaded by the load event, we can listen to the event
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  }
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(function (img) {
  return imgObserver.observe(img);
});

//-----slider-----

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // functions for the dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class ="dots__dot" data-slide ="${i}"></button>`
      );
    });
  };

  //function to indicate the active dot

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--activate'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  //function for slide change
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      return (s.style.transform = `translateX(${100 * (i - slide)}%)`);
    });
  };
  // default conditon in the begining
  // going to the next slide function
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // initialisation function

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };

  init();

  // -----event listeners
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  //changing slides by key events
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  //event delegation on dot container
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('DOT');
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
const messageStr = `find new opportunnities, dont be bound with the old ones`;

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
  

// intersection observer API

// 5)callback function which would be passed into IntersectiionObserver()
//this call back function will get called each time each time that the observed element, i.e the target element is intersecting the root element at the threshold taht we have defined. no matter if we are scrolling up or down
//This call back function is called with two arguments, entries and the observer object itself
//entries are an array of threshold entries
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

// 4)options which would be an object and would passed in the IntersectionObserver()
const obsOptions = {
  //this object first needs a root property, this root will be the element that we want our target element to intersect.

  // putting null as the root, the target element would be intersecting with the entire viewport
  root: null,
  // percentage of intersection at which  the oberver call back would be called, we can multiple thresholds as an array
  threshold: 0.1,
};

// 1)we would need to pass in a callback function and options object
const observer = new IntersectionObserver(obsCallback, obsOptions);

//2) call the observer to observe a target element
observer.observe(section1);
  */
