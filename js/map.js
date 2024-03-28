
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
var data=0;

let markers = []; 
var count=0


function greet(name) {
    data=name;
    const newLatLng = [51.5+count, -0.09]; 
    const newMarker = L.marker(newLatLng).addTo(map);
    newMarker.bindPopup("<b>"+"lat:"+(51.5+count)+"</b> <b>"+"lon:"+(51.5+count)+"</b>").openPopup();
    count +=0.01
    // Zwracamy nazwę
    return name;
}


