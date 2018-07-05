import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  arrowDownIcon: IconDefinition; 
  arrowUpIcon: IconDefinition;

  isMenuOpen: boolean = false;

  // Mock user
  user: any = {
    name: "Jason Bourne"
  };

  constructor() { 
    this.arrowDownIcon = faAngleDown;
    this.arrowUpIcon = faAngleUp;
  }

  ngOnInit() {
  }

  getUserBadge(){
    var badge = "NA";
    
    if(this.user){
      let names = this.user.name.split(" ");
      if(names.length > 1){
        badge = names[0][0] + names[1][0];
      }
    }

    return badge;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
