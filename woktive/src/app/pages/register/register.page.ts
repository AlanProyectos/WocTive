import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'src/app/shared/user.class';
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

  

  constructor(private authSvc : AuthService, private router: Router) { }

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
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
