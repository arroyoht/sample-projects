import { Component, OnInit } from '@angular/core';
import { faTrophy, faPuzzlePiece, faMapSigns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  panelItems: any = [
    { title: 'Cycling', subtitle: 'Sport Type', icon: faPuzzlePiece},
    { title: 'Advanced', subtitle: 'Mode', icon: faTrophy},
    { title: '30 miles', subtitle: 'Route', icon: faMapSigns},
  ]

  constructor() { }

  ngOnInit() {
  }

}
