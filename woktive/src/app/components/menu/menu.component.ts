import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController,public router: Router, private authSvc: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  logOut(){
    console.log('Logout!!!');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

  redirectVentas(){
    console.log('HOLA');
  }

}
