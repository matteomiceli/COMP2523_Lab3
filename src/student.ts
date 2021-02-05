import faker from 'faker'

export class student {
    firstName: string;
    lastName: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    createMarker(map) {
        const marker = new google.maps.Marker({
            map: map,
            position: {
                lat: this.location.lat,
                lng: this.location.lng
            }
        });

        const contentString = `
            <h3>${this.firstName} ${this.lastName}</h3>
            <p>latitude: ${this.location.lat}, longitude: ${this.location.lng}</p>
            `;

        const infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        })
    }

    // infoWindow(map) {
    //     let contentString = `
    //     <h3>Student</h3>
    //     <p>${this.location.lat}, ${this.location.lng}</p>
    //     `;
        
    //     map.marker.addListener('click', () => {
    //         new google.maps.InfoWindow({
    //             content: contentString
    //         });
    //     })
            
    // }
}