/* в этот файл добавляет скрипты*/

/* Mобильное меню */

const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const headerMain = document.querySelector('.main-header');

headerMain.classList.remove('main-header--nojs');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  }
});

/* Слайдер */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
});

/* Карта */

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerIcon = L.icon({
  iconURL: '/../img/marker-icon.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const markerOptions = {
  icon: markerIcon,
};

// L.marker([59.96831, 30.31748], {icon: markerIcon}).addTo(map);

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
);

marker.addTo(map);

// marker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });
