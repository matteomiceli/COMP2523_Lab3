import faker from 'faker'

export class internship {
    businessName: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.businessName = faker.company.companyName();
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
            <h3>Welcome to ${this.businessName}'s Internship!</h3>
            <p>latitude: ${this.location.lat}, longitude: ${this.location.lng}</p>
            `;

        const infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        })
    }
}