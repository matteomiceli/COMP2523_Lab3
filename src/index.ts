import faker from 'faker';

import { student } from './student'
import { internship } from './internship'

const map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: { lat: 0, lng: 0},
    zoom: 2
});


let newStudent = new student;
let newInternship = new internship;

newStudent.createMarker(map);
newInternship.createMarker(map);



// function initialize () {
//     let mapOptions = {
//         center: new google.maps.LatLng(44, 44),
//         zoom: 8,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }

//     let map = new google.maps.Map(document.getElementById('map_canvas'))
// }