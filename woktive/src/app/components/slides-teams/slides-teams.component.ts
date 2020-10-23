import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-teams',
  templateUrl: './slides-teams.component.html',
  styleUrls: ['./slides-teams.component.scss'],
})
export class SlidesTeamsComponent implements OnInit {

  slideOpts = {
    initialSlide:0,
    speed:400,
    slidesPerView:3,
    freeMode:true,
    spaceBetween: 10,
  }


  equipos =[
    {
      equipo:'Eq.No1'
    },
    {
      equipo:'Eq.No2'
    },
    {
      equipo:'Eq.No3'
    },
    {
      equipo:'Eq.No4'
    },
    {
      equipo:'Eq.No5'
    },
    {
      equipo:'Eq.No6'
    },
    {
      equipo:'Eq.No7'
    },
    {
      equipo:'Eq.No8'
    },
    {
      equipo:'Eq.No9'
    },

  ] 

  constructor() { }

  ngOnInit() {}

  team(texto){
    console.log('le has dado click al -> ',texto.equipo);
  }


  //Todos los Equipos de la materia 
}
