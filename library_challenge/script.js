(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.658428, -121.876999], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    var marker = L.marker([37.658428, -121.876999]).addTo(map);

    var circle = L.circle([37.658428, -121.876999], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var popup = L.popup()
    .setLatLng([37.66845, -121.876999])
    .setContent("This is my hometown!")
    .openOn(map);
}());