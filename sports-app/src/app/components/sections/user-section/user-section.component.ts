import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../model/user.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { Address } from '../../../model/address.model';
import { daysOfWeek } from '../../../app.constants';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent {

  filter: string;

  userList: User[];

  trashIcon: IconDefinition = faTrashAlt;

  @Input()
  get users(){
    return this.userList;
  }

  @Output()
  usersChange = new EventEmitter();
  set users(val: User[]){
    this.userList = val;
    this.usersChange.emit(val);
  }

  constructor() { 
    this.userList = [];
  }

  /**
   * Method responsible for removing a given user from the list
   * @param user user to be removed
   */
  removeUser(user: User) {
    // Try to match user by id and remove if it exists
    if(user && user.id){
      this.users = this.users.filter(u => u.id != user.id);
    }
    else if(!user.id && this.users.indexOf(user) >= 0){
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  /**
   * Method responsible for composing the city coordinates google map link
   * @param address user address
   */
  getCityAddressLink(address: Address){
    if(!address || !address.geo){
      return "";
    }
    
    return `https://www.google.com/maps/?q=${address.geo.lat},${address.geo.lng}`;
  }

  /**
   * Method responsible for getting the view name to be displayed for the user days of the week
   * @param days user days of the week list
   */
  getDaysOfTheWeek(days: string[]){
    if(!days || days.length == 0){
      return " - ";
    }
    else if(days.length == 2 && days.indexOf(daysOfWeek[daysOfWeek.length - 1]) >= 0 && days.indexOf(daysOfWeek[daysOfWeek.length - 2]) >= 0){
      return "Weekends";
    }
    else if(days.length == 5 && days.indexOf(daysOfWeek[daysOfWeek.length - 1]) < 0 && days.indexOf(daysOfWeek[daysOfWeek.length - 2]) < 0){
      return "Week Days";
    }
    else if(days.length == 7){
      return "Everyday";
    }
    
    return days.join(", ");
  }

  /**
   * Filters users given the text filter input
   */
  getFilteredUsers(){
    if(this.filter && this.filter.length > 0){  
        return this.users.filter(u => {
            return !(u.name.indexOf(this.filter) < 0) ||
                !(u.username.indexOf(this.filter) < 0) ||
                !(u.email.indexOf(this.filter) < 0) ||
                !(u.photos.toString().indexOf(this.filter) < 0) ||
                !(u.albums.toString().indexOf(this.filter) < 0) ||
                !(u.posts.toString().indexOf(this.filter) < 0) ||
                !(u.rideInGroup.indexOf(this.filter) < 0) ||
                (u.address && u.address.city && !(u.address.city.indexOf(this.filter) < 0)) ||
                !(this.getDaysOfTheWeek(u.dayOfTheWeek).indexOf(this.filter) < 0);
        });
    }

    return this.users;
  }
}
