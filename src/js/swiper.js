import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const breakpoint = window.matchMedia('(min-width: 769px)');

const mobileIntegrationTemplate = document.querySelector('#mobile-integration-content').innerText.trim();

const desktopIntegrationNode = document.querySelector('.integration__content');

if (window.innerWidth <= 480) {
  render(mobileIntegrationTemplate, desktopIntegrationNode);

  const integrationSwiper = new Swiper('.integration-swiper', {
    modules: [Pagination],
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination-integrations',
      clickable: true
    },
    a11y: {
      enabled: true
    }
  });
}

const testimonialSwiper = new Swiper('.swiper', {
  modules: [Pagination],
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    enabled: true
  }
});
