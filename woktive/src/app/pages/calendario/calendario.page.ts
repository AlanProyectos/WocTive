import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user.interface';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  usuarios : User ={
    email:'',
    nombre:'',
    rol:'',
    uid:''
  }

  constructor(public storage: Storage,private userSvc :UserService) { }

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
