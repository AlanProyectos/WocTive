import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { stringify } from 'querystring';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MaestroService } from 'src/app/services/maestro.service';
import { UserInterface } from 'src/app/shared/user.interface';
import {AuthService} from '../../services/auth.service';

type Item ={
  src: string;
  text:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email :string;
  public password:string;
  public rol:string;
  public nombre:string;

  alumno: UserInterface = {
    email :'',
    nombre:'',
    rol: '',
    uid :''
  }

  maestro: UserInterface = {
    email :'',
    nombre:'',
    rol: '',
    uid:''
  }

  

  constructor(private authSvc : AuthService, private router: Router, private alumnoSvc: AlumnoService, private maestrosSvc: MaestroService) { }

  ngOnInit() {
  }

  items: Item[] = [
    {
      src: '../../../assets/img/woctive.jpeg',
      text: 'Logo'
    }
  ];

  onSubmitRegister(email,password,rol,nombre){

    
    this.authSvc.onRegister(email,password,rol,nombre).then( auth =>{
      this.router.navigate(['login']);
    }).catch(err => console.log(err));
    
    
  }

}
