import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from '../shared/user.class';
import { LoadingController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { __awaiter } from 'tslib';
import {UserService} from '../../services/user.service';
import {User} from '../../shared/user.interface';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios : User ={
    email:'',
    nombre:'',
    rol:'',
    uid:''
  }
  id:string;

  constructor( private router : Router, 
               private loadingController: LoadingController,
               private route : ActivatedRoute, 
               private userSvc :UserService,
               private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('id').then((res)=>{
      this.loadProducto();
      this.id = res;
      console.log(this.id)
      this.userSvc.getUser(res).subscribe(res =>{
        this.usuarios = res;
        console.log(res);
      })
    });
  }

  redirectLogin(){
    this.router.navigateByUrl('/login');
  }

  async loadProducto(){
    const loading = await this.loadingController.create({
      message: 'Loading.....',
      duration:2000
    })

    await loading.present();
  }

}
