import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

import { Observable } from "rxjs";
import { daysOfWeek, rideInGroup } from '../app.constants';

/**
 * Service responsible for fetching user data
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  /**
   * Responsible for fetching all users from the API
   */
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/users');
  }

  /**
   * Responsible for fetching a user by ID
   * @param id user unique identifier
   */
  getUserById(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/users?id=${id}`);
  }

  /**
   * Responsible for fetching a user list of albums by ID
   * @param id user unique identifier
   */
  getUserAlbums(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/albums?userId=${id}`);
  }

  /**
   * Responsible for fetching a user list of Photos by ID
   * @param id user unique identifier
   */
  getUserPhotos(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/photos?userId=${id}`);
  }

  /**
   * Responsible for fetching a user list of posts by ID
   * @param id user unique identifier
   */
  getUserPosts(id: number){
    return this.http.get<User[]>(this.apiBaseUrl + `/posts?userId=${id}`);
  }

  /**
   * Responsible for fetching a user list of days of the week by ID
   * @param id user unique identifier
   */
  getUserDaysOfWeek(id: number): Observable<string[]>{
    // Simulates an HTTP request by returning an observable
    return new Observable((observer) => {
      let numberOfDays = Math.floor((Math.random() * daysOfWeek.length)) + 1;
      let userDaysOfWeek: string[] = [];

      // Gets a random amount of random days of the week
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

  /**
   * Responsible for fetching a user ride in group option value
   * @param id user unique identifier
   */
  getUserRideInGroup(id: number): Observable<string>{
    // Simulates an HTTP request by returning an observable
    return new Observable((observer) => {
      // Gets a random option from the list constant
      observer.next(rideInGroup[Math.floor(Math.random() * rideInGroup.length)]);
      observer.complete();
    });
  }
}
