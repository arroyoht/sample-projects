import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user.model';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faLifeRing } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register-section',
  templateUrl: './register-section.component.html',
  styleUrls: ['./register-section.component.css']
})
export class RegisterSectionComponent implements OnInit {
  
  userList: User[];

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
  }

}
