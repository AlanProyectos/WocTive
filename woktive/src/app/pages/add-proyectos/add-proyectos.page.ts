import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MaestroService } from 'src/app/services/maestro.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ProyectosInterface} from 'src/app/shared/proyectos.interface';

@Component({
  selector: 'app-add-proyectos',
  templateUrl: './add-proyectos.page.html',
  styleUrls: ['./add-proyectos.page.scss'],
})
export class AddProyectosPage implements OnInit {


  constructor(private alumnoSvc: AlumnoService, private ProyectoSvc:ProyectoService , private maestroSvc : MaestroService){ }

  alumnos =  [];
  maestros = [];
  seleccionados =[];

  maestroseleccionado =null;

  proyectoCreado: ProyectosInterface= {
    nombreProyecto:'',
    integrantesNombre:[],
    maestroProyecto:'',
    materiaProyecto:''

  }

  ngOnInit() {
    this.alumnoSvc.getAlumnos().subscribe(res =>{
      this.alumnos = res;
      console.log(res);
    })  
    this.maestroSvc.getMaestros().subscribe(res=>{
      this.maestros = res;
    })
  }
  CrearEquipo(nombreProyecto,alumnosSeleccionados, materiaProyecto,maestroProyecto){
    this.proyectoCreado.nombreProyecto = nombreProyecto.value;
    this.proyectoCreado.integrantesNombre = alumnosSeleccionados.value;
    this.proyectoCreado.materiaProyecto = materiaProyecto.value;
    this.proyectoCreado.maestroProyecto = maestroProyecto.value;

    console.log(this.proyectoCreado);

    this.ProyectoSvc.addProyecto(this.proyectoCreado);
  }



}
