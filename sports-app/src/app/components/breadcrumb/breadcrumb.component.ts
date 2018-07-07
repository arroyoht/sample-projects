import { Component, OnInit } from '@angular/core';
import { faAngleRight, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  /**
   * Breadcrumbs mock
   */
  breadcrumbs: string[] = [
    "Home",
    "Page Name",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
    "Page 7",
    "Page 8",
    "Page 9",
    "Current Page"
  ];

  /**
   * Font awesome icons
   */
  arrowIcon: IconDefinition;
  homeIcon: IconDefinition;

  constructor() {
    this.arrowIcon = faAngleRight;
    this.homeIcon = faHome;
  }

  ngOnInit() {
  }

  /**
   * Method responsible for getting the current breadcrumb page
   */
  getCurrentPage(){
    return this.breadcrumbs[this.breadcrumbs.length - 1];
  }

  /**
   * Method responsible for getting the first breadcrumb page
   */
  getFirstPage(){
    return this.breadcrumbs[0];
  }

  /**
   * Method responsible for verifying if the breadcrumb page should be hidden from DOM
   * @param index index of the breadcrumb page
   */
  isHidden(index: number){
    return ( index > 1 ) && ( index != (this.breadcrumbs.length - 1) );
  }

  /**
   * Method responsible for verifying if the breadcrumb index is the current one
   * @param index 
   */
  isCurrent(index: number){
    return index == (this.breadcrumbs.length - 1);
  }

  /**
   * Method responsible for verifyinf if the breadcrumb list has hidden elements from DOM
   */
  hasHidden(){
    return this.breadcrumbs.length > 3;
  }
}
