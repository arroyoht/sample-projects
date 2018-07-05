import { Component, OnInit } from '@angular/core';
import { faVolleyballBall, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faVolleyballBall: IconDefinition;

  constructor() {
    this.faVolleyballBall = faVolleyballBall;
  }

  ngOnInit() {
    
  }

}
