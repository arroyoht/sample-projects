import { Address } from "./address.model";

export class User {
    id: number;
    username: string;
    name: string;
    email: string;
    address: Address;
    rideInGroup: string;
    dayOfTheWeek: string;
    posts: number;
    albuns: number;
    photos: number;
}