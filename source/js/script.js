/* в этот файл добавляет скрипты*/
L.map('map')
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
);

marker.addTo(map);
