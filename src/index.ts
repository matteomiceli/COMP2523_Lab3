import faker from 'faker';
import {  } from 'googlemaps'
 
class Student {
    firstName: string;
    lastName: string;
    location: location;

    fullName () {
        return (`${this.firstName} ${this.lastName}`);
    }
}


let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap()
// function initialize () {
//     let mapOptions = {
//         center: new google.maps.LatLng(44, 44),
//         zoom: 8,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }

//     let map = new google.maps.Map(document.getElementById('map_canvas'))
// }

class Internship {
    businessName: string;
    location: location;


}

interface location {
    lat: number;
    lon: number;
}


console.log('this is woring!');