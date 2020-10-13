import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() rol : string;

  constructor(private menu: MenuController,public router: Router, private authSvc: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  logOut(){
    console.log('Logout!!!');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }


  //Rol: Alumno
  misEquipos(){
    this.router.navigateByUrl('equipo');
  }
  misProyectos(){
    console.log('Te mandara a tus proyecto alumno');
  }
  misCalificacion(){
    console.log('Te mandara a tus calificaciones alumno');
  }

  //Rol: Maestro
  Tareas(){
    console.log('Te mandara a la pagina para crear tareas, maestro');
  }
  Calificacion(){
    console.log('Te mandara a la pagina para las calificaciones de tus alumnos, maestro');
  }
  Equipos(){
    console.log('Te mandara la pagina de todos los equipos inscritos a tu materia, maestros')
  }
  Clases(){
    console.log('te mostrara las materias que tienes inscritas de los alumnos, maestro')
  }

}
