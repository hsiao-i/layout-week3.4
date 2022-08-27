// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header-nav')
const button = document.querySelector('button')

hamburger.addEventListener('click', (e) => {

  if (button.classList.contains('open') == true){
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  } else {
      nav.classList.add('open');
      hamburger.classList.add('open');
  }
})