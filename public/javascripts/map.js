var map = L.map('main_map').setView([-37.9925273, -57.5502581], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
   
L.marker([-37.9925743, -57.5491803]).addTo(map);