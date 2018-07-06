import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  /**
   * Varable holding all the users from the API
   */
  users: User[];

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.fetchAllUsers();
  }

  /**
   * Fetch all users from the API
   */
  fetchAllUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      this.users.forEach(u => this.populateUserData(u));
    });
  }

  /**
   * Method responsible for populating all data for each user
   * @param user user to have data fetched and populated
   */
  populateUserData(user: User){
    this.userService.getUserPhotos(user.id).subscribe((response) => {
      if(response && response.length){
        user.photos = response.length;
      }
    });

    this.userService.getUserPosts(user.id).subscribe((response) => {
      if(response && response.length){
        user.posts = response.length;
      }
    });

    this.userService.getUserAlbums(user.id).subscribe((response) => {
      if(response && response.length){
        user.albums = response.length;
      }
    });

    this.userService.getUserDaysOfWeek(user.id).subscribe((response) => {
      if(response){
        user.dayOfTheWeek = response;
      }
    });

    this.userService.getUserRideInGroup(user.id).subscribe((response) => {
      if(response){
        user.rideInGroup = response;
      }
    });
  }
}
