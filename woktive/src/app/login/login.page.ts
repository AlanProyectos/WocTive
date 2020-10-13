import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

type Item ={
  src: string;
  text:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user :User = new User();

  items: Item[] = [
    {
      src: '../../../assets/img/woctive.jpeg',
      text: 'Logo'
    }
  ];
  userId = null;

  constructor(private authSvc : AuthService, private router: Router,private route : ActivatedRoute,private loadingController: LoadingController) { 
    
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if(this.userId){
      this.loadProducto();
    }
  }
  async loadProducto(){
    const loading = await this.loadingController.create({
      message: 'Loading.....'
    })

    await loading.present();
  }



  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log(user.user.uid);
      this.router.navigateByUrl(`home/${user.user.uid}`);
    }
  }

}
