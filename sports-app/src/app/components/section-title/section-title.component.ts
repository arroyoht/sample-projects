import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent {

  @Input()
  searchable: boolean;

  @Input()
  title: string;

  textFilter: string;

  searchIcon: IconDefinition = faSearch;

  @Input()
  get filter(){
    return this.textFilter;
  }
   
  @Output()
  filterChange = new EventEmitter();
  set filter(val: string){
    this.textFilter = val;
    this.filterChange.emit(val);
  }

  constructor() {
    this.textFilter = "";
  }
}
