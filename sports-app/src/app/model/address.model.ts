export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

class Geolocation {
    lat: string;
    lng: string;
}