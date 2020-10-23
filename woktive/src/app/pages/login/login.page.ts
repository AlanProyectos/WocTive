import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../shared/user.class';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import {Storage} from '@ionic/storage';


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

  constructor(private authSvc : AuthService,
              private router: Router,
              private route : ActivatedRoute,
              private loadingController: LoadingController, 
              public navCtrl: NavController,
              public storage: Storage) { 
    
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
    console.log(this.user);
    if(user){
      console.log(user.user.uid);
      this.router.navigate([`/tabs/home`]);

      this.storage.set('id', user.user.uid);
    }
  }

}
