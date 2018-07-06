import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
export class UserSectionComponent implements OnInit {

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

  ngOnInit() {
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
  }

  /**
   * Method responsible for composing the city coordinates google map link
   * @param address user address
   */
  getCityAddressLink(address: Address){
    return `https://www.google.com/maps/?q=${address.geo.lat},${address.geo.lng}`;
  }

  /**
   * Method responsible for getting the view name to be displayed for the user days of the week
   * @param days user days of the week list
   */
  getDaysOfTheWeek(days: string[]){
    if(days.length == 2 && days.indexOf(daysOfWeek[daysOfWeek.length - 1]) >= 0 && days.indexOf(daysOfWeek[daysOfWeek.length - 2]) >= 0){
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
}
