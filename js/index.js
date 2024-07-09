// let menuBar = document.getElementById("menuBar");

// menuBar.addEventListener("click",() => {
//   let menuDiv = document.createElement("div");

// })

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const headerSection = document.getElementById('headerSection');

  menuIcon.addEventListener('click', function() {
    if (headerSection.style.right === '0px') {
      headerSection.style.right = '-450px';
    } else {
      headerSection.style.right = '0px';
    }
  });
});

