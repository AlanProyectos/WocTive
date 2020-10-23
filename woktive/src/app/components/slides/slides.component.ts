import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slideOpts = {
    initialSlide:1,
    speed:400,
    slidesPerView:3,
    freeMode:true,
    spaceBetween: 10,
  }


  materias = [
    {
      nombre:'Matematicas',
      tareascant: 7,
      colorCuadro:'',
      equipo:'Dinamita',
      maestro:'Ricardo V.'
    },
    {
      nombre:'Español',
      tareascant: 5,
      colorCuadro:'',
      equipo:'Maravilla',
      maestro:'Susana G.'
    },
    {
      nombre:'Dispositivos',
      tareascant: 1,
      colorCuadro:'',
      equipo:'Buena Onda',
      maestro:'Ismael P'
      
    },
    {
      nombre:'Artes',
      tareascant: 20,
      colorCuadro:'',
      equipo:'Alfa Lobo',
      maestro:'Brenda K.'
    },
    {
      nombre:'Empresariales',
      tareascant: 4,
      colorCuadro:'',
      equipo:'Emprendesaurios',
      maestro:'Everardo M.'
    },
    {
      nombre:'POO',
      tareascant: 0,
      colorCuadro:'',
      equipo:'Dinamita',
      maestro:'Carlos A.'
    },
    {
      nombre:'Laboratorio',
      tareascant: 20,
      colorCuadro:'',
      equipo:'LAURA',
      maestro:'Pablito C.'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.materias.map(res =>{
      if(res.tareascant == 0){
        res.colorCuadro ='Baja'
      }
      if(res.tareascant >= 1 && res.tareascant <= 4){
        res.colorCuadro ='Media'
      }
      if(res.tareascant >= 5 && res.tareascant <= 9){
        res.colorCuadro ='Alta'
      }
      if(res.tareascant > 10){
        res.colorCuadro ='Urgente'
      }
    });
  }

}
