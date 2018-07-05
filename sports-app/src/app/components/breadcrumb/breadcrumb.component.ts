import { Component, OnInit } from '@angular/core';
import { faAngleRight, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: string[] = [
    "Home",
    "Page Name",
    "Breadcrumb 3",
    "Breadcrumb 4",
    "Breadcrumb 5",
    "Breadcrumb 6",
    "Breadcrumb 7",
    "Breadcrumb 8",
    "Breadcrumb 9",
    "Current Page"
  ];

  arrowIcon: IconDefinition;
  homeIcon: IconDefinition;

  constructor() {
    this.arrowIcon = faAngleRight;
    this.homeIcon = faHome;
  }

  ngOnInit() {
  }

  getCurrentPage(){
    return this.breadcrumbs[this.breadcrumbs.length - 1];
  }

  getFirstPage(){
    return this.breadcrumbs[0];
  }

  isHidden(index: number){
    return ( index > 1 ) && ( index != (this.breadcrumbs.length - 1) );
  }

  isCurrent(index: number){
    return index == (this.breadcrumbs.length - 1);
  }

  hasHidden(){
    return this.breadcrumbs.length > 3;
  }
}
