import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from '../shared/user.class';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { __awaiter } from 'tslib';
import {UserService} from '../services/user.service';
import {User} from '../shared/user.interface';

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
  userId = null;

  constructor( private router : Router, private loadingController: LoadingController,private route : ActivatedRoute, private userSvc :UserService) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
     this.userSvc.getUser(this.userId).subscribe(res =>{
      console.log('Usuario',res);
      this.usuarios = res;

    })
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
  getUsers(){
    this.loadProducto();
    console.log(this.usuarios);
  }

}
