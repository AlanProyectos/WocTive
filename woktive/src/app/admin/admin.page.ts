import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../shared/users.class';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  usuarios : Users ={
    uid:'',
    email: '',
    displayName:'',
    emailVerified: false
  }

  userId = null;

  constructor( private router : Router, private authSvc: AuthService, private loadingController: LoadingController,private route : ActivatedRoute ) { }

  

  ngOnInit() {
    //this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap.get('id'));
    // if(this.userId){
    //   this.loadProducto();
    // }
  }
  redirectLogin(){
    this.router.navigateByUrl('/login');
  }

  async loadProducto(){
    const loading = await this.loadingController.create({
      message: 'Loading.....'
    })

    //await loading.present();

    this.authSvc.getUser(this.userId);

  }

  getUsers(){
    console.log(this.authSvc.getUser(this.route.snapshot.paramMap.get('id')));
  }

}
