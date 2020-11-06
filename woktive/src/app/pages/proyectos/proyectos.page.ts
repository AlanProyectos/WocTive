import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from 'src/app/shared/user.interface';
import {Storage} from '@ionic/storage';
import { not } from '@angular/compiler/src/output/output_ast';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ProyectosInterface } from 'src/app/shared/proyectos.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {

  slideOpts = {
    initialSlide:1,
    speed:400,
    slidesPerView:3,
    freeMode:true,
    spaceBetween: 10,
  }

  usuarios : UserInterface ={
    email:'',
    nombre:'',
    rol:'',
    uid:''
  }

  proyectos: { 
  }

    



  constructor(public storage: Storage,
              private userSvc :UserService,
              private proyectoSvc : ProyectoService) { }

  id:string;

  ngOnInit() {
    this.storage.get('id').then((res)=>{
      this.id = res;
      console.log(this.id)
      this.userSvc.getUser(res).subscribe(res =>{
        this.usuarios = res;
        console.log(res);
      })
    });

    this.proyectoSvc.getProyectos().subscribe(res =>{
      this.proyectos = res;
    
      console.log(this.proyectos);
    })
      
    
  }



}
