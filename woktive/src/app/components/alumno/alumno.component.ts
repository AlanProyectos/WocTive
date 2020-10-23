import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {

  @Input() nombre : string;
  @Input() rol : string;

  public prioridades =[
    {
      name:"Urgente",
      cant:7,
      color:'#d90710'
    },
    {
      name:"Alta",
      cant:5,
      color:'#0049ae'
    },
    {
      name:"Media",
      cant:3,
      color:'#7e2e85'
    },
    {
      name:"Baja",
      cant:0,
      color:'#789032'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
