import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../model/user.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  filter: string;

  users: User[];

  trashIcon: IconDefinition = faTrashAlt;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchAllUsers();
  }

  fetchAllUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  removeUser(user: User) {
    // Try to match user by id and remove if it exists
    if(user && user.id){
      this.users = this.users.filter(u => u.id != user.id);
    }
  }
}
