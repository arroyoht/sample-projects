import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user.model';
import { faHeartbeat, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { daysOfWeek, rideInGroup } from '../../../app.constants';
import { Address } from '../../../model/address.model';

@Component({
  selector: 'app-register-section',
  templateUrl: './register-section.component.html',
  styleUrls: ['./register-section.component.css']
})
export class RegisterSectionComponent implements OnInit {
  
  daysOfTheWeek: string[] = daysOfWeek;
  rideInGroup: string[] = rideInGroup;
  checkIcon = faCheck;
  circleIcon = faCircle;

  userList: User[];
  
  newUser: User;

  panelItems: any = [
    { 
      title: 'Need help?', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      icon: faLifeRing
    },
    { 
      title: 'Why Register?', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..', 
      icon: faHeartbeat
    },
    { 
      title: 'What people are saying...', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      icon: faSmile
    },
  ]

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
    // Creates a fresh user instance 
    this.resetUser();
  }

  /**
   * Selects/Unselects a given day of the week
   * @param day day of the week to be toggled from selection
   */
  toggleDayOfTheWeek(day: string){
    if(!this.newUser.dayOfTheWeek){
        this.newUser.dayOfTheWeek = [];
    }

    var dayIndex = this.newUser.dayOfTheWeek.indexOf(day);
    if(dayIndex < 0){
      this.newUser.dayOfTheWeek.push(day)
    }
    else {
      this.newUser.dayOfTheWeek.splice(dayIndex, 1);
    }
  }

  /**
   * Verifies if a given day of the week is selected
   * @param day day to be verified
   */
  isDaySelected(day: string){
    return !(this.newUser.dayOfTheWeek.indexOf(day) < 0);
  }

  /**
   * Selects a given ride in group option
   * @param option option to be selected
   */
  setRideInGroupOption(option: string){
    this.newUser.rideInGroup = option;
  }

  /**
   * Checks if a given ride option is selected
   * @param option option to be verified for selection
   */
  isRideOptionSelected(option: string){
    return this.newUser.rideInGroup == option;
  }

  /**
   * Validates the form to enable/disable the submit button
   */
  isFormValid(){
    return this.newUser.username && this.newUser.username.trim().length > 0 &&
        this.newUser.name && this.newUser.name.trim().length > 0 &&
        this.newUser.email && this.newUser.email.trim().length > 0 &&
        this.newUser.rideInGroup && this.newUser.rideInGroup.trim().length > 0 &&
        this.newUser.dayOfTheWeek.length > 0;
  }

  /**
   * Creates the user and add to the user list
   */
  createUser(){
    this.users.push(this.newUser);
    this.resetUser();
  }

  /**
   * Method responsible for initializing the user object as empty
   */
  resetUser(){
    this.newUser = new User();
    this.newUser.dayOfTheWeek = [];
    this.newUser.address = new Address();
    this.newUser.photos = 0;
    this.newUser.albums = 0;
    this.newUser.posts = 0;
  }
}
