import faker from 'faker';

class Student {
    firstName: string;
    lastName: string;
    location: location;

    fullName () {
        return (`${this.firstName} ${this.lastName}`);
    }
}


new google.maps.Map(document.getElementById("map_canvas"), {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  });


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