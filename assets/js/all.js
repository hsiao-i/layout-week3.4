"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.header-nav');
var button = document.querySelector('button');
hamburger.addEventListener('click', function (e) {
  if (button.classList.contains('open') == true) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  } else {
    nav.classList.add('open');
    hamburger.classList.add('open');
  }
});
//# sourceMappingURL=all.js.map
