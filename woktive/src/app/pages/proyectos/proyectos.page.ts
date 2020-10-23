import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user.interface';
import {Storage} from '@ionic/storage';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {

  usuarios : User ={
    email:'',
    nombre:'',
    rol:'',
    uid:''
  }


  constructor(public storage: Storage,
              private userSvc :UserService) { }

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
      
    
  }



}
