/* в этот файл добавляет скрипты*/

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
