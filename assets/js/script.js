document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('nav');
  const header = document.querySelector('header');
  const topVotesMenu = document.querySelector('#topVotesMenu');
  const spotlight = document.querySelector('#spotlightMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    header.classList.toggle('active');
  });

  topVotesMenu.addEventListener('click', () => {
    topVotesMenu.classList.toggle('hide');
  });

  spotlight.addEventListener('click', () => {
    spotlight.classList.toggle('hide');
  });


  const topVotesInner = document.querySelector('#topVotesMenu .inner-content');
  const closeIcon = document.querySelector('#topVotesMenu .close-tag i');

  topVotesInner.addEventListener('click', () => {
    if (closeIcon.classList.contains('fa-minus')) {
      closeIcon.classList.replace('fa-minus', 'fa-plus');
    } else {
      closeIcon.classList.replace('fa-plus', 'fa-minus');
    }
  });

  const spotlightInner = document.querySelector('#spotlight .inner-content');
  const closeIcon2 = document.querySelector('#spotlight .close-tag i');

  spotlightInner.addEventListener('click', () => {
    if (closeIcon.classList.contains('fa-minus')) {
      closeIcon2.classList.replace('fa-minus', 'fa-plus');
    } else {
      closeIcon2.classList.replace('fa-plus', 'fa-minus');
    }
  });

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });
});
