import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {

  @Input() nombre : string;
  @Input() rol : string;

  constructor() { }

  ngOnInit() {}

}
