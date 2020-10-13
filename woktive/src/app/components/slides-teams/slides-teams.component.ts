import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-teams',
  templateUrl: './slides-teams.component.html',
  styleUrls: ['./slides-teams.component.scss'],
})
export class SlidesTeamsComponent implements OnInit {

  slideOpts = {
    initialSlide:1,
    speed:400
  }

  constructor() { }

  ngOnInit() {}


  //Todos los Equipos de la materia 
}
