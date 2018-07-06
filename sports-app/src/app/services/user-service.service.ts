import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

import { Observable } from "rxjs";
import { daysOfWeek, rideInGroup } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/users');
  }

  getUserById(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/users?id=${id}`);
  }

  getUserAlbums(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/albums?userId=${id}`);
  }

  getUserPhotos(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/photos?userId=${id}`);
  }

  getUserPosts(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/posts?userId=${id}`);
  }

  getUserDaysOfWeek(id: number): Observable<string[]>{
    return new Observable((observer) => {
      let numberOfDays = Math.floor((Math.random() * daysOfWeek.length)) + 1;
      let userDaysOfWeek: string[] = [];

      for(let i = 0; i < numberOfDays; i++){
        var day = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
        if(userDaysOfWeek.indexOf(day) < 0){
          userDaysOfWeek.push(day);
        }
      }

      observer.next(userDaysOfWeek);
      observer.complete();
    });
  }

  getUserRideInGroup(id: number): Observable<string>{
    return new Observable((observer) => {
      observer.next(rideInGroup[Math.floor(Math.random() * rideInGroup.length)]);
      observer.complete();
    });
  }
}
