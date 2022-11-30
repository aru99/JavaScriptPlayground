'use strict';

const imgContainer = document.querySelector('.images');

// waiting function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImage;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log(`image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log(`img 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//----- cc3-----
const loadNpause = async function () {
  try {
    // Load img 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';

    // img 2
    // Load img 1
    img = await createImage('img/img-2.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

loadNpause();

//
