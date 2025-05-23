'use strict';
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own.
 Pretend you're working on your own 😉

PART 1
*** 1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path.
 When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. 
 The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
*** 2. Comsume the promise using .then and also add an error handler;


*** 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), 
and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. 
You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const imagesBox = document.querySelector('.images');
let currentImg = document.createElement('img'); // Create an image element
let isLocked = false;

imagesBox.appendChild(currentImg); // Add it to the page

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000); // Waits for the specified time before resolving
  });
};

const createImage = function () {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const imagePath = `img/img-${randomNumber}.jpg`;

    currentImg.onload = () => {
      resolve(currentImg); // Resolve with the updated image
    };

    currentImg.onerror = () => {
      console.log('Failed to load image');
      reject(new Error('Failed to load image'));
    };

    currentImg.src = imagePath; // Change image source
  });
};

// Load first image
createImage();

// Change image when clicked
imagesBox.addEventListener('click', function () {
  if (isLocked === true) {
    console.log('Locked');
    // If locked, do nothing
    return;
  } else {
    // If not locked,        isLocked = true; // Lock immediately
    createImage();
    console.log(`${currentImg.src} loaded succesfully`);
    isLocked = true;
    wait(2)
      .then(() => {
        isLocked = false;
        console.log('unlocked');
      })
      .catch(err => {
        // If there was an error loading the image
        console.log(err);
        isLocked = false; // Unl       createImage();ock immediately so the user can try again
      });
  }
});
