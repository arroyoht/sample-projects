import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser: User;

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

  getLoggedInUser(){

  }
}
